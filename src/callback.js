import { TokenManager } from "@forgerock/javascript-sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const url = window.location.href;
  const history = useNavigate();
  useEffect(() => {
    async function authenticateUser(code, state) {
      console.log(code);
      console.log(state);
      const tokens = await TokenManager.getTokens({
        query: {
          code: code,
          state: state,
        },
      });
      console.log(tokens);
      if (tokens) {
        history("/protected");
      }
    }

    if (url.includes("code=") && url.includes("state=")) {
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get("code");
      const state = queryParams.get("state");
      authenticateUser(code, state);
    }
  }, [url]);

  return <h1>loading...</h1>;
};

export default Callback;
