import React from 'react'
import _ from 'lodash'

export const LoginError = ({ error, style = {} }) => {
    return <li style={style} className="help is-danger">
        {_.map(error, (v, i) => {
            return <span key={i}>
                {v}
                <br />
            </span>
        })}
    </li>
};

function switchServerError(serverError) {
    switch (serverError) {
        case "auth/user-not-found":
            return "Username and password don't match any in the server. Maybe you haven't registered?";
        case "auth/wrong-password":
            return "Either username or password is incorrect.";
        case "auth/invalid-email":
            return "Invalid email address was supplied."
        case "auth/validation-needs-to-be-resolved":
            return "";
        default:
            return "Unprecdented server error.";
    }
}

const LoginErrors = ({ errors, serverErrors }) => {
    return (errors && errors.length >= 0) || serverErrors ? <ul className="container">
        {errors.map((v, i) => <LoginError style={{
            display: 'list-item'
        }} error={v} key={i} />)}
        {serverErrors ? <li className="help is-danger"> {switchServerError(serverErrors)} </li> : null}
    </ul> : null
}

export default LoginErrors;