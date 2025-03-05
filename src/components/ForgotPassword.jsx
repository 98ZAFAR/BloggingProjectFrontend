import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./forgotpassword.css";
import { BlogContext } from "../store/blogStore";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const {forgotPassword} = useContext(BlogContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    
    forgotPassword(email);
  };

  return (
    <div className="forgot-password-container bg-dark">
      <div className="forgot-password-card">
        <h2 className="forgot-password-title">Forgot Password</h2>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter your email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="forgot-password-btn">
            Send Reset Link
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <p className="forgot-password-footer">
          Remember your password? <Link to="/signin" className="text-info">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;