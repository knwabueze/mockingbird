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

export const createRouter = stores =>
    <Provider {...stores}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/logout" component={LogoutRedirect} />
                    <Route exact path="/signup" component={SignupPage} />
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </div>
        </Router>
    </Provider>