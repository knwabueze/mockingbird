import ReactDOM from 'react-dom';
import { createRouter } from './components/router';
import createStores from './stores'

ReactDOM.render(createRouter(createStores()), document.getElementById('root'));
