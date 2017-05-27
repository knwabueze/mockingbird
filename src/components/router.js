import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import MainPage from './main/MainPage';
import LoginModal from './login/LoginModal';
import { Provider } from 'mobx-react';

export const createRouter = stores =>
    <Provider {...stores}>
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={MainPage} />
                </Switch>
                <Switch data-modal-routes>
                    <Route path="/login" component={LoginModal} />
                </Switch>
            </div>
        </Router>
    </Provider>;