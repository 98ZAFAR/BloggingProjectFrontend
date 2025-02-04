import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BlogContext } from "../store/blogStore";

const BlogDetail = () => {
  const { id } = useParams();
  const { token, User } = useContext(BlogContext);

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/post/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const post = response.data.post;
        setBlog(post);
        setLikeCount(post.likes.length);
        setIsLiked(post.likes.includes(User._id));

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog details");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, token]);

  const handleLike = async () => {
    try {
      await axios.put(
        `http://localhost:3001/api/post/${id}/likes`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setIsLiked(!isLiked);
      setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    } catch (err) {
      alert("Failed to like/unlike the post");
    }
  };

  if (loading) return <div className="text-center text-light">Loading...</div>;
  if (error) return <div className="text-danger text-center">{error}</div>;

  return (
    <div className="min-vh-100 bg-dark d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card shadow-lg bg-gradient text-light p-4 rounded-4" style={{ background: "#2b2b2b" }}>
              {/* Blog Title */}
              <h2 className="mb-3 text-warning">{blog.title}</h2>

              {/* Blog Image */}
              {blog.imgUrl && (
                <img
                  src={blog.imgUrl}
                  alt={blog.title}
                  className="w-100 rounded mb-3 shadow"
                  style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "12px" }}
                />
              )}

              {/* Blog Content */}
              <p className="lead text-light">{blog.content}</p>

              {/* Like Button */}
              <button
                className={`btn ${isLiked ? "btn-danger" : "btn-outline-warning"} fw-bold px-4`}
                onClick={handleLike}
                disabled={!token}
              >
                {isLiked ? "❤️" : "👍"} {likeCount} Likes
              </button>
            </div>

            {/* Comments Section (No API Call) */}
            <div className="text-white mt-4 card bg-secondary p-3 rounded-3 shadow-sm">
              <h4 className="text-light">Comments</h4>
              <p className="text-muted">Comments section</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;