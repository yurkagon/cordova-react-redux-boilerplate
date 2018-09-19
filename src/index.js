import React from 'react';
import ReactDOM from 'react-dom';
import App from './bootstrap';
import registerServiceWorker from './bootstrap/registerServiceWorker';
import './style/index.css';

// specific configuration for different platforms
const configureApp = {
  android: () => {
    console.log('The app runs on Android');
  },
  ios: () => {
    console.log('The app runs on IOS');
  },
  browser: () => {
    console.log('The app runs in Browser');
  },
};

const startApp = () => {
  const { platformId } = window.cordova;
  configureApp[platformId]();
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
  configureApp.browser();
}
