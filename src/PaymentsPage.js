import { TokenManager } from "@forgerock/javascript-sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PaymentsPage() {
  const history = useNavigate();
  useEffect(() => {
    async function getToken() {
      try {
        await TokenManager.getTokens({ forceRenew: false });
      } catch (err) {
        history("/login");
      }
    }
    getToken();
  });
  return (
    <div className="App">
      <h1>Home</h1>
      <h1>Payments</h1>
    </div>
  );
}

export default PaymentsPage;
