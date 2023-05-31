import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/", { replace: true });
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="form_container">
      <div className="form_wrapper">
        <span className="logo">My Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign in</button>
        </form>
        {err && <span>Somthing went Wrong</span>}

        <p>
          You don't have a account? <Link to="/register">Regiser</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
