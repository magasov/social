import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = React.useContext(AuthContext);

  const handleLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>
            Hello World<span>.</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            nostrum quibusdam possimus, non ex ipsum rem natus, eum provident
            quo voluptates reiciendis harum autem aperiam consectetur veniam
            quod aliquid officia.
          </p>
          <span>Еще нет аккаунта?</span>
          <Link to="/register">
            <button>Регистрация</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
