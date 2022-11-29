import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { Config } from "@forgerock/javascript-sdk";
import ForgeRockProtected from "./ForgeRockProtected";
import Callback from "./callback";
import { AppContext } from "./context/global-state";
import PaymentsPage from "./PaymentsPage";
Config.set({
  clientId: "WebOAuthClient",
  redirectUri: "http://localhost:3000/callback",
  scope: "openid profile email",
  serverConfig: {
    baseUrl: "https://openam-jpmc-poc.forgeblocks.com/am",
    timeout: "5000",
  },
  realmPath: "alpha",
  support: "modern",
});

function App() {
  return (
    <AppContext.Provider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/protected" element={<ForgeRockProtected />} />
            <Route path="/payments" element={<PaymentsPage />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
