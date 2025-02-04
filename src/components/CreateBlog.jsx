import React, { useContext, useState } from "react";
import axios from "axios";
import { BlogContext } from "../store/blogStore";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token } = useContext(BlogContext);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tags);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/post/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Post created:", response.data);
      window.location.href = '/blogs';
      setTitle("");
      setContent("");
      setTags("");
      setImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create blog post");
    }
    setLoading(false);
  };

  return (
    <div className="createBlog bg-dark min-vh-100 d-flex justify-content-center align-items-center px-3">
      <div
        className="p-4 w-100 shadow-lg"
        style={{
          maxWidth: "800px",
          background: "linear-gradient(135deg, #2c2c2c 0%, #3a3a3a 100%)",
          borderRadius: "12px",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#f8f9fa" }}>
          Create a Blog
        </h2>
        
        {/* Two-Column Layout */}
        <div className="row">
          {/* Left Column (Image Section) */}
          <div className="col-md-5 d-flex flex-column align-items-center">
            <div
              className="mb-3"
              style={{
                width: "100%",
                height: "250px",
                border: "2px dashed rgba(255, 255, 255, 0.5)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
              }}
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <p style={{ color: "#bbb", textAlign: "center" }}>No Image Selected</p>
              )}
            </div>
            <input
              type="file"
              id="fileInput"
              className="d-none"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="fileInput"
              className="btn btn-outline-light w-100"
              style={{
                borderRadius: "8px",
                padding: "10px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
              }
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              {image ? "Change Image" : "Upload Image"}
            </label>
          </div>

          {/* Right Column (Form Fields) */}
          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold", color: "#ddd" }}>
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold", color: "#ddd" }}>
                  Content
                </label>
                <textarea
                  className="form-control"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                  rows="3"
                  placeholder="Enter content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold", color: "#ddd" }}>
                  Tags
                </label>
                <input
                  type="text"
                  className="form-control"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                  placeholder="Enter tags (comma separated)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                disabled={loading}
                style={{
                  backgroundColor: "#ff6600",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "12px",
                  borderRadius: "8px",
                  transition: "0.3s",
                  border: "none",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#e65c00")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6600")}
              >
                {loading ? "Uploading..." : "Create Blog"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;