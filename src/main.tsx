import './styles/globals.scss';
import './styles/tailwind.css';

import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
