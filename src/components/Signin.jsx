import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import { BlogContext } from "../store/blogStore";

const Signin = () => {
  const {loginUser, setIsLoggedIn} = useContext(BlogContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
    setIsLoggedIn(true);
  };

  return (
    <div className="signin-container bg-dark">
      <div className="signin-card">
        <div className="signin-image">
          <img
            src="/public/SignupImage.png"
            alt="Signup"
          />
        </div>

        <div className="signin-form">
          <h2 className="signin-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>
          <p className="signin-footer">
            Don't have an account? <Link to="/signup" className="text-info">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;