import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Shared styles for consistency

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Example credentials
    const validUsername = "Adya";
    const validPassword = "Malkin@ji";

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); // Redirect to home page
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      {error && <p className="login-error">{error}</p>}
      <input
        type="text"
        className="login-input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;