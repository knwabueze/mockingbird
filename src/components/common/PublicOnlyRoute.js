import React from 'react'
import { inject, observer } from 'mobx-react'

import {
    Route,
    Redirect
} from 'react-router-dom'

const PublicOnlyRoute = ({
    component,
    redirectPath,
    path,
    auth,
    exact }) => {
    return !auth.user
        ? <Route exact={exact} path={path} component={component} />
        : <Redirect to={redirectPath} />
}

export default inject("auth")(observer(PublicOnlyRoute));