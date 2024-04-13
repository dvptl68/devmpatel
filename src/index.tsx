import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Construction from './Construction';
import Router from './Router';

const showConstructionPage = false;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {
      showConstructionPage
        ? <Construction />
        : <Router />
    }
  </React.StrictMode>
);
