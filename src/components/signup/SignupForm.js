import React from 'react'
import _ from 'lodash'
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import SignupErrors, { SignupError } from './SignupErrors'

@withRouter
@inject("signup")
@observer
class SignupForm extends React.Component {
    email = null;
    password = null;
    timeout = null;

    signUpUser = e => {
        e.preventDefault();
        const { signup, history } = this.props;        
        signup.onSubmit()
            .then(() => {
                history.push("/");
            })
            .catch(err => {
                console.log(err)
            })
    }

    renderErrorIcon = field => {
        const { fields } = this.props.signup.form;

        return fields[field].error &&
            <span className="icon is-small is-right">
                <i className="fa fa-warning"></i>
            </span>
    }

    componentWillUnmount() {
        this.props.signup.form.meta.submitAttempts = 0;
        this.props.signup.clearAllErrors();
        this.props.signup.clearAllValues();

        this.email.value = "";
        this.password.value = "";
    }

    updateField = field => {
        this.props.signup.clearFieldErrors(field);
        if (this.props.signup.form.meta.submitAttempts > 0) {
            const { signup } = this.props;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                signup.validateField(field, this[field].value)
            }, 450);
        }
        this.props.signup.updateField(field, this[field].value);
    }

    immediatelyUpdateField = field => {
        if (this.props.signup.form.meta.submitAttempts > 0) {
            const { signup } = this.props;
            signup.validateField(field, this[field].value);
        }
        this.props.signup.updateField(field, this[field].value);
    }

    render() {
        const { lastServerError } = this.props.signup.form.meta;
        const { email, password } = this.props.signup.form.fields;

        return <form onSubmit={this.signUpUser} data-signup-form>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        onChange={() => this.updateField('email')}
                        onBlur={() => this.immediatelyUpdateField('email')}
                        className={`input is-horizontal ${email.error && 'is-danger'}`}
                        placeholder="Email..."
                        type="text"
                        ref={e => this.email = e} />
                    <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                    </span>
                    {this.renderErrorIcon('email')}
                </p>
                {email.error && <SignupError error={toJS(email.error)} />}
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        onChange={() => this.updateField('password')}
                        onBlur={() => this.immediatelyUpdateField('password')}
                        className={`input ${password.error && 'is-danger'}`}
                        type="password"
                        placeholder="Password..."
                        ref={e => this.password = e} />
                    <span className="icon is-small is-left">
                        <i className="fa fa-unlock"></i>
                    </span>
                    {this.renderErrorIcon('password')}
                </p>
                {password.error && <SignupError error={toJS(password.error)} />}
            </div>
            <br />
            <SignupErrors serverErrors={lastServerError} errors={[email.error, password.error]} />
            <div className="field is-horizontal">
                <div className="field-label" />
                <p className="control">
                    <button className="button is-success" type="submit">
                        Signup
                    </button>
                </p>
            </div>
        </form>
    }
}

export default SignupForm;