import { TokenManager } from "@forgerock/javascript-sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  useEffect(() => {
    async function login() {
      const tokens = await TokenManager.getTokens({
        query: {
          acr_values: 3,
        },
        forceRenew: false,
        login: "redirect",
      });
      if (tokens) {
        history("/protected");
      }
    }

    login();
  });

  return (
    <div>
      <h1>loading...</h1>
    </div>
  );
};

export default Login;
