import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { Provider } from 'react-redux'
import MainPage from './main/MainPage';
import LoginModal from './login/LoginModal'

export const createRouter = store =>
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={MainPage} />
                </Switch>
                <Switch>
                    <Route exact strict path="/login" component={LoginModal} />
                </Switch>
            </div>
        </Router>
    </Provider>