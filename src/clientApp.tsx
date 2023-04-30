import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import setupStore, { RootState } from './redux/store';
import { PreloadedState } from '@reduxjs/toolkit';

import App from './App';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}

const store = setupStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as Element,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
