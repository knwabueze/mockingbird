import { observable, action, runInAction } from 'mobx'
import remotedev from 'mobx-remotedev'
import _ from 'lodash'
import { FormStore } from './common/form'

@remotedev
export class LoginStore extends FormStore {
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
        super();
        this.auth = { signInWithEmailAndPassword: auth.signInWithEmailAndPassword };
    }

    @action onSubmit = () => {
        ++this.form.meta.submitAttempts;

        runInAction('ensure that every field is validated', () => {
            _.mapKeys(this.form.fields, (value, key) => {
                this.validateField(key, value.value);
            })
        }, this)

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
}