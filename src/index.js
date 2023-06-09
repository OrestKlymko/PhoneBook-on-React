import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/PhoneBook-on-React">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
