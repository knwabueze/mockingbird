import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createRouter } from './components/router';
import createStores from './stores'

ReactDOM.render(createRouter(createStores()), document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
    module.hot.accept('./components/router', () => ReactDOM.render(createRouter(createStores())));
};