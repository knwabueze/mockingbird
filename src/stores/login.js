import { observable, action, computed, toJS, runInAction } from 'mobx'
import validationPromise from '../services/validation-promise'
import remotedev from 'mobx-remotedev'
import _ from 'lodash'

@remotedev
export class LoginStore {
    @observable form = {
        fields: {
            email: {
                value: '',
                error: null,
                rules: 'required|email'
            },
            password: {
                value: '',
                error: null,
                rules: 'required'
            }
        },
        meta: {
            submited: false,
            submitAttempts: 0,
            lastServerError: null
        }
    }

    auth = null;

    constructor(auth) {
        this.auth = auth;
    }

    @action updateField = (field, value) => {
        validationPromise({ [field]: this.form.fields[field].rules }, { [field]: value })
            .then(() => {
                this.form.fields[field].error = null;
            })
            .catch(err => {
                let newErr = _.values(err)[0]
                this.form.fields[field].error = newErr;
            })
        this.form.fields[field].value = value;
    }

    @action onSubmit = () => {
        runInAction("check if form has gone through inital validaiton", () => {
            if (this.form.meta.submitAttempts === 0) {
                _.mapKeys(toJS(this.form.fields), (value, key) => {
                    this.updateField(key, value.value);
                })
            }         
        })

        ++this.form.meta.submitAttempts;
        return new Promise((resolve, reject) => {
            if (this.hasErrors) {
                this.form.meta.lastServerError = "auth/validation-needs-to-be-resolved";
                reject("Validation errors need to be resolved.");
            } else {
                const { email, password } = this.form.fields;
                this.auth.signInWithEmailAndPassword(email.value, password.value)
                    .catch(err => {
                        this.form.meta.lastServerError = err.code;
                        reject(err.code);
                    })
                    .then(() => {
                        this.form.meta.submited = true;
                        resolve();
                    })
            }
        })
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

        _.each(toJS(fields), (value, key) => {
            acc = !!value.error || acc;
        })

        return acc;
    }
}