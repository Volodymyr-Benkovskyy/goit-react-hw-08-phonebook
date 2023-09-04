import './index.css';
import { store } from './components/redux/store';
import App from './components/App/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</React.StrictMode>
);
