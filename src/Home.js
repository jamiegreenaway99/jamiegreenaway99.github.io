import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;
