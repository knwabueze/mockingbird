import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { Provider } from 'react-redux'
import MainPage from './main/MainPage';

export const createRouter = store =>
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={MainPage} />
                </Switch>
            </div>
        </Router>
    </Provider>