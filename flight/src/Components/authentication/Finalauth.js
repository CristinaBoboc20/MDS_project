import React from "react";
import Autentication from "./Autentication";
import { Auth0Provider } from "@auth0/auth0-react";

const Finalauth = () => {
  const domain = "dev-syp5l8t5nlchbz2i.us.auth0.com";
  const clientId = "nseIDHWgvvSuNsaAjeN0a2wLW3TRQiQe";

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
