import React from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import LoginErrors, { LoginError } from './LoginErrors'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'

@withRouter
@inject("ui", "login")
@observer
class LoginForm extends React.Component {
    timeout = null;
    signInUser = e => {
        e.preventDefault();
        const { ui, login, history } = this.props;
        login.onSubmit()
            .then(() => {
                ui.toggleLoginModal();
                history.push("/");
            })
            .catch(err => {
            });
    }

    renderErrorIcon(field) {
        const { fields } = this.props.login.form;

        return fields[field].error ?
            <span className="icon is-small is-right">
                <i className="fa fa-warning"></i>
            </span> : null
    }

    componentWillUnmount() {
        this.props.login.clearAllErrors();
        this.props.login.clearAllValues();

        _.mapKeys(this.refs, (value, key) => {
            this.refs[key].value = "";
        })

        clearTimeout(this.timeout);
    }

    updateField(field) {
        const { login } = this.props;

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            login.updateField(field, this.refs[field].value)
        }, 800);
    }

    immediatelyUpdateField(field) {
        const { login } = this.props;
        login.updateField(field, this.refs[field].value)
    }

    render() {
        const { lastServerError } = this.props.login.form.meta;
        const { email, password } = this.props.login.form.fields;

        return <form onSubmit={this.signInUser}>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        onChange={this.updateField.bind(this, 'email')}
                        onBlur={this.immediatelyUpdateField.bind(this, 'email')}
                        className={`input ${email.error ? 'is-danger' : ''}`}
                        type="text"
                        placeholder="Email..."
                        ref="email" />
                    <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                    </span>
                    {this.renderErrorIcon('email')}
                </p>
                {email.error ? <LoginError error={toJS(email.error)} /> : null}
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        onChange={this.immediatelyUpdateField.bind(this, 'password')}
                        onBlur={this.immediatelyUpdateField.bind(this, 'password')}
                        className={`input ${password.error ? 'is-danger' : ''}`}
                        type="password"
                        placeholder="Password..."
                        ref="password" />
                    {this.renderErrorIcon('password')}
                    <span className="icon is-small is-left">
                        <i className="fa fa-unlock"></i>
                    </span>
                </p>
                {password.error ? <LoginError error={toJS(password.error)} /> : null}
            </div>
            <br />
            <LoginErrors serverErrors={lastServerError} errors={[email.error, password.error]} />
            <div className="field is-horizontal">
                <div className="field-label" />
                <p className="control">
                    <button className="button is-info" type="submit">
                        Login
                    </button>
                </p>
            </div>
        </form>
    }
}

export default LoginForm;