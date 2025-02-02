import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../store/blogStore";
import "./blogs.css";

const Blogs = () => {
  const navigate = useNavigate();
  const { blogs } = useContext(BlogContext);

  return (
    <div className="container-fluid bg-dark text-light min-vh-100">
      <div className="row py-4">
        <aside className="col-md-3 col-lg-2 px-4">
          <h4 className="mb-3">Categories</h4>
          <ul className="list-group">
            <li className="list-group-item bg-dark text-white border-0">
              Technology
            </li>
            <li className="list-group-item bg-dark text-white border-0">
              Web Development
            </li>
            <li className="list-group-item bg-dark text-white border-0">
              AI & ML
            </li>
            <li className="list-group-item bg-dark text-white border-0">
              JavaScript
            </li>
          </ul>

          <h4 className="mt-4">Tags</h4>
          <div className="d-flex flex-wrap">
            {["React", "Node.js", "Bootstrap", "Python", "Next.js"].map(
              (tag, index) => (
                <span key={index} className="badge bg-info text-dark m-1 p-2">
                  #{tag}
                </span>
              )
            )}
          </div>
        </aside>

        <main className="col-md-9 col-lg-10">
          <div
            id="carouselExampleAutoplaying"
            className="slidingWindow carousel slide"
            data-bs-ride="carousel"
          >
            <div className="slidingImg carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/public/BlogHome.png"
                  className="d-block w-100"
                  alt="Technology"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/public/SignupImage.png"
                  className="d-block w-100"
                  alt="Web Development"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/public/BlogHome.png"
                  className="d-block w-100"
                  alt="AI & ML"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="row mt-4">
            {blogs.map((blog) => (
              <div key={blog._id} className="col-lg-4 col-md-6 mb-4">
                <div className="card bg-dark text-white border-0 shadow-lg hover-shadow-lg rounded-lg">
                  <img
                    src={blog.imgUrl}
                    className="card-img-top rounded-top"
                    alt={blog.title}
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title fs-4 fw-bold mb-3">
                      {blog.title}
                    </h5>
                    <p className="card-text mb-4">
                      {blog.content.substring(0, 70)}...
                    </p>
                    <button
                      className="btn btn-outline-light shadow-sm hover-shadow"
                      onClick={() => navigate(`/blog/${blog._id}`)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blogs;
