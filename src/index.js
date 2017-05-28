import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createRouter } from './components/router';
import store from './store'

ReactDOM.render(createRouter(store), document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
    module.hot.accept('./components/router', () => ReactDOM.render(createRouter(store)));
};