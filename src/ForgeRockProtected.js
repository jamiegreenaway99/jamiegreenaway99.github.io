import { TokenManager } from "@forgerock/javascript-sdk";
import { useEffect } from "react";

function AccessToken() {
  useEffect(() => {
    async function getToken() {
      try {
        console.log(await TokenManager.getTokens());
      } catch (err) {
        console.log(err);
      }
    }
    getToken();
  });
  return (
    <div className="App">
      <h1>Home</h1>
      <h1>Protected</h1>
    </div>
  );
}

export default AccessToken;
