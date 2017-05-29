import React from 'react'
import { inject, observer } from 'mobx-react'

@inject(stores => ({
    ui: stores.ui,
    auth: stores.auth
}))
@observer
class LoginForm extends React.Component {
    signInUser = e => {
        e.preventDefault();
        const { auth, ui } = this.props;
        auth.signInWithEmailAndPassword(this.refs.email.value, this.refs.password.value);
        ui.toggleLoginModal();
    }

    render() {
        return <form onSubmit={this.signInUser}>
            <div className="field">
                <p className="control">
                    <input className="input" type="text" placeholder="Email..." ref="email" />
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <input className="input" type="password" placeholder="Password..." ref="password" />
                </p>
            </div>
            <div className="field is-horizontal">
                <div className="field-label">

                </div>
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