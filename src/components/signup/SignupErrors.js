import React from 'react'
import _ from 'lodash'

export const SignupError = ({ error, style = {} }) => {
    return <li style={style} className="help is-danger">
        {_.map(error, (v, i) => {
                return <span key={i}>
                    {v}
                    <br />
                </span>
            })}
    </li>
}

const SignupErrors = ({ errors, serverErrors }) => {
    return ((errors && errors.length >= 0) || serverErrors) && <ul className="container">
        {errors.map((v, i) => <SignupError style={{
            display: 'list-item'
        }} error={v} key={i} />)}
        {serverErrors && <li className="help is-danger"></li>}
    </ul>
}

export default SignupErrors;