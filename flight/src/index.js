import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const domain='dev-syp5l8t5nlchbz2i.us.auth0.com'
const clientId='nseIDHWgvvSuNsaAjeN0a2wLW3TRQiQe'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri= {window.location.origin}
    >
      <App/>
    </Auth0Provider>
  </React.StrictMode>
);
 

reportWebVitals();
