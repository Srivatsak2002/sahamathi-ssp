import React, { useState } from "react";
import "./signIn.css";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log({ email, password });
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-title">Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="signin-footer">
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </div>
        </form>

        <div className="new-user">
          New user?{" "}
          <a href="#" onClick={() => navigate("/register")}>
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
