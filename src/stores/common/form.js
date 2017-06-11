import { action, computed } from 'mobx'
import validationPromise from '../../services/validation-promise'
import _ from 'lodash'

export class FormStore {
    @action validateField = (field, value) => {
        validationPromise({ [field]: this.form.fields[field].rules }, { [field]: value })
            .then(() => {
                this.form.fields[field].error = null;
            })
            .catch(err => {
                let newErr = _.values(err)[0]
                this.form.fields[field].error = newErr;
            })
    }

    @action updateField = (field, value) => {
        this.form.fields[field].value = value
    }

    @action clearAllErrors() {
        _.mapKeys(this.form.fields, (value, key) => {
            this.form.fields[key].error = null;
        })
        this.form.meta.lastServerError = null;
    }

    @action clearFieldErrors(field) {
        this.form.fields[field].error = null;
    }

    @action clearAllValues() {
        _.mapKeys(this.form.fields, (value, key) => {
            this.form.fields[key].value = "";
        })
    }

    @computed get hasErrors() {
        const { fields } = this.form;
        let acc = false;

        _.each(fields, (value, key) => {
            acc = !!value.error || acc;
        })

        return acc;
    }
}