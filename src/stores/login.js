import { observable, action, computed } from 'mobx'
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
            lastServerError: null
        }
    }

    auth = null;

    constructor(auth) {
        this.auth = auth;
        this.form.meta.submited = false;
    }

    @action updateField(field, value) {
        validationPromise({ [field]: this.form.fields[field].rules }, { [field]: value })
            .then(() => {
                this.form.fields[field].error = null;
                this.form.fields[field].value = value;
            })
            .catch(err => {
                let newErr = _.values(err)[0]
                this.form.fields[field].error = newErr;
            })
    }

    @action onSubmit() {
        return new Promise((resolve, reject) => {
            _.mapKeys(this.form.fields, (value, key) => {
                this.updateField(key, value.value);
            })

            if (this.hasErrors) {
                reject(new Error("Validation errors need to be resolved."));
            } else {
                const { email, password } = this.form.fields;
                this.auth.signInWithEmailAndPassword(email.value, password.value)
                    .then(() => {
                        this.form.meta.submited = true;
                        this.clearAllValues();
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        this.form.meta.lastServerError = err.code;
                        reject(new Error(err.code));
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

    @action clearAllValues() {
        _.mapKeys(this.form.fields, (value, key) => {
            this.form.fields[key].value = "";
        })
    }

    @computed get hasErrors() {
        let hasErrors = false;

        _.forEach(this.form.fields, (value, key) => {
            hasErrors = hasErrors || !!value.error
        });

        return hasErrors;
    }
}