import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './App';
import store from './store'
import {Provider} from 'react-redux'
import {unregister} from './registerServiceWorker';

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
unregister();
