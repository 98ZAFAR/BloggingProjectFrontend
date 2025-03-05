import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./resetpassword.css";
import { BlogContext } from "../store/blogStore";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const {resetPassword} = useContext(BlogContext);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if(e.target.name=='password'){
        setPassword(e.target.value);
    }
    else if(e.target.name=='confirmPassword'){
        setConfirmPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    resetPassword(password, resetToken);
  };

  return (
    <div className="reset-password-container bg-dark">
      <div className="reset-password-card">
        <h2 className="reset-password-title">Reset Password</h2>
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="reset-password-btn">
            Reset Password
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;