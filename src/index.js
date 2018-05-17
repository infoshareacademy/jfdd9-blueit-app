import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import setupFirebase from './setupFirebase'
import registerServiceWorker from './registerServiceWorker';
import {UserProvider} from "./Components/contexts/User";

setupFirebase()

const composeProviders = (children, ...providers) => providers.reduce(
  (result, Next) => <Next>{result}</Next>,
  children
)

ReactDOM.render(
  composeProviders(
    <App/>,
    UserProvider
  ),
  document.getElementById('root')
);
registerServiceWorker()
