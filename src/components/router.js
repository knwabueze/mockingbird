import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import MainPage from './main/MainPage';
import { Provider } from 'mobx-react';

export const createRouter = stores =>
    <Provider {...stores}>
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </Router>
    </Provider>;