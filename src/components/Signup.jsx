import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { BlogContext } from "../store/blogStore";

const Signup = () => {
  const {registerUser} = useContext(BlogContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  return (
    <div className="signup-container bg-dark">
      <div className="signup-card">
        <div className="signup-image">
          <img
            src="/public/SignupImage.png"
            alt="Signup"
          />
        </div>

        <div className="signup-form">
          <h2 className="signup-title">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
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
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
          <p className="signup-footer">
            Already have an account? <Link to="/signin" className="text-info">Signin</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;