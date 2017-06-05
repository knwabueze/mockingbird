import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import MainPage from './main/MainPage';
import LogoutRedirect from './logout/LogoutRedirect'
import SignupPage from './signup/SignupPage'
import { Provider } from 'mobx-react'

import PublicOnlyRoute from './common/PublicOnlyRoute'
import NotFound from './errpages/NotFound'

export const createRouter = (stores) =>
    <Provider {...stores}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/logout" component={LogoutRedirect} />
                    <PublicOnlyRoute
                        redirectPath="/"
                        path="/signup"
                        exact
                        component={SignupPage} />
                    <Route exact path="/" component={MainPage} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </div>
        </Router>
    </Provider>