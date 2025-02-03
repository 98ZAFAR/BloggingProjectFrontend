import React, { useContext, useState } from "react";
import axios from "axios";
import { BlogContext } from "../store/blogStore";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { User, token } = useContext(BlogContext);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("content", content);
    // formData.append("tags", tags.split(" "));
    // formData.append("imgUrl", image);
    // console.log(title, image, content, tags);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/post/create",
        {title, content, tags:tags.split(" "), imgUrl:image.name},
        { headers: {
                    "Authorization":`Bearer ${token}`
         } }
      );

      console.log("Post created:", response.data);
      alert("Blog post created successfully!");
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
          maxWidth: "600px",
          background: "linear-gradient(135deg, #2c2c2c 0%, #3a3a3a 100%)",
          borderRadius: "12px",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#f8f9fa" }}>
          Create a Blog
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-3">
            <label
              className="form-label"
              style={{ fontWeight: "bold", color: "#ddd" }}
            >
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
            <label
              className="form-label"
              style={{ fontWeight: "bold", color: "#ddd" }}
            >
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
              rows="4"
              placeholder="Enter content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label
              className="form-label"
              style={{ fontWeight: "bold", color: "#ddd" }}
            >
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

          <div className="mb-3">
            <label
              className="form-label"
              style={{ fontWeight: "bold", color: "#ddd" }}
            >
              Upload Image
            </label>
            <div className="d-flex align-items-center">
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
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                {image ? image.name : "Choose File"}
              </label>
            </div>
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
  );
};

export default CreateBlog;
