import React from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import LoginErrors, { LoginError } from './LoginErrors'
import _ from 'lodash'

@inject("ui", "auth")
@observer
class LoginForm extends React.Component {
    signInUser = e => {
        e.preventDefault();
        const { auth, ui } = this.props;
        auth.signInWithEmailAndPassword(this.refs.email.value, this.refs.password.value)
            .then(() => {
                ui.toggleLoginModal();
            })
    }

    componentWillUnmount() {
        const { auth } = this.props;
        auth.clearErrors();
    }

    renderErrorIcon(field) {
        const { validationErrors } = this.props.auth;

        return validationErrors && toJS(validationErrors)[field] ?
            <span className="icon is-small is-right">
                <i className="fa fa-warning"></i>
            </span> : null
    }

    reupdateValidation = () => {
        const { auth } = this.props;
        if (auth.hasErrors) {
            auth.validateLoginForm(this.refs.email.value, this.refs.password.value)
                .catch(() => { });
        }
    }

    render() {
        const { loading, validationErrors, serverErrors } = this.props.auth

        return !loading ? <form onSubmit={this.signInUser}>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        onChange={this.reupdateValidation}
                        className={`input ${validationErrors && toJS(validationErrors).email ? 'is-danger' : ''}`}
                        type="text"
                        placeholder="Email..."
                        ref="email" />
                    <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                    </span>
                    {this.renderErrorIcon('email')}
                </p>
                {validationErrors && toJS(validationErrors).email ?
                    <LoginError error={toJS(validationErrors).email} /> : null}
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        onChange={this.reupdateValidation}
                        className={`input ${validationErrors && toJS(validationErrors).password ? 'is-danger' : ''}`}
                        type="password"
                        placeholder="Password..."
                        ref="password" />
                    {this.renderErrorIcon('password')}
                    <span className="icon is-small is-left">
                        <i className="fa fa-unlock"></i>
                    </span>
                </p>
                {validationErrors && toJS(validationErrors).password ?
                    <LoginError error={toJS(validationErrors).password} /> : null}
            </div>
            <LoginErrors serverErrors={serverErrors} errors={_.map(toJS(validationErrors))} />
            <div className="field is-horizontal">
                <div className="field-label" />
                <p className="control">
                    <button className="button is-info" type="submit">
                        Login
                    </button>
                </p>
            </div>
        </form> : null
    }
}

export default LoginForm;