import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
// Components
import App from './App';
// Styles
import './styles/Global.scss';
import './assets/fonts/jaapokki-enhance/jaapokki-enhance.css';
// Other
import * as serviceWorker from './serviceWorker';
import reducer from '../src/store/reducer';

const store = createStore(reducer);

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
