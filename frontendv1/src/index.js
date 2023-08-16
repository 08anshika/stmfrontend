import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-hu74ogavx16roil2.us.auth0.com"
  clientId="PUPhyyEvfw6pERG8h9uBhwfSibQHWD9b"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
);


