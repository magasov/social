import { Link } from "react-router-dom";
import "./auth.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>
            Vay Social<span>.</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            nostrum quibusdam possimus, non ex ipsum rem natus, eum provident
            quo voluptates reiciendis harum autem aperiam consectetur veniam
            quod aliquid officia.
          </p>
          <span>Уже есть аккаунт?</span>
          <Link to="/login">
            <button>Логин</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
