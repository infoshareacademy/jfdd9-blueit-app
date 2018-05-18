import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setupFirebase from "./setupFirebase";


setupFirebase()

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
registerServiceWorker();
