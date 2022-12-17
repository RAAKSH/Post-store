

import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/css/sb-admin.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

