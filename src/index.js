import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createRouter } from './components/router';
import { stores } from './stores'

ReactDOM.render(createRouter(stores), document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
    module.hot.accept('./components/router', () => ReactDOM.render(createRouter(stores)));
};

window.stores = stores;