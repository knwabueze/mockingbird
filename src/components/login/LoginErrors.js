import React from 'react'

export const LoginError = ({ error }) => <li className="help is-danger">
    {error.map((i, k) => {
        return <span key={k}>
            {i}
            <br/>
        </span>
    })}
</li>;

function switchServerError(serverError) {
    switch (serverError.code) {
        case "auth/user-not-found":
            return "Username and password don't match any in the server. Maybe you haven't registered?";
        case "auth/wrong-password":
            return "Either username or password is incorrect.";
        default:
            return "Unprecdented server error.";
    }
}

const LoginErrors = ({ errors, serverErrors }) => {
    return (errors && errors.length !== 0) || serverErrors ? <ul className="container">
        {errors.map((v, i) => <LoginError error={v} key={i} />)}
        {serverErrors ? <li className="help is-danger"> {switchServerError(serverErrors)} </li> : null}
    </ul> : null
}

export default LoginErrors;