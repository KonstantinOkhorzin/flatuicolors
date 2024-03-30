import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';

import App from './app';
import { globalStyles } from './styles';
import ContextProvider from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
    <Global styles={globalStyles} />
  </React.StrictMode>
);
