import React from "react";
import Autentication from "./Autentication";
import { Auth0Provider } from "@auth0/auth0-react";

const Finalauth = () => {
  const domain = "dev-y1lx07ra50qmcuuy.us.auth0.com";
  const clientId = "XZTLzBiKwIxbYXrJnIWxTCUtYBGXq5SH";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Autentication />
    </Auth0Provider>
  );
};

export default Finalauth;
