import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext({
  User: {},
  token: "",
  loginUser: () => {},
  registerUser: () => {},
  forgotPassword:() =>{},
  resetPassword:()=>{},
  blogs: [],
  fetchAllPosts: () => {},
});

const BlogProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const defaultBlogs = [
    {
      _id: "",
      userId: "",
      title: "",
      content: "",
      imgUrl: "#",
      tags: [],
      likes: [],
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
  ];

  const [blogs, setBlogs] = useState(defaultBlogs);

  const navigate = useNavigate();

  const registerUser = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/user/signup",
        formData
      );
      if (res) {
        console.log(res.data);
        navigate("/signin");
      }
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  };
  const loginUser = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/user/login",
        formData
      );
      if (res) {
        console.log(res.data);

        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);

        navigate("/");
      }
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  };

  const forgotPassword = async(email)=>{
    try {
      const res = await axios.post(
        "http://localhost:3001/api/user/forget-password",
        {email}
      );
      if (res) {
        console.log(res.data);

        navigate("/");
      }
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  };

  const resetPassword = async(password, resetToken)=>{
    try {
      const res = await axios.post(
        `http://localhost:3001/api/user/reset-password/${resetToken}`,
        {newPassword:password}
      );
      if (res) {
        console.log(res.data);

        navigate("/");
      }
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  };

  const fetchAllPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/posts");
      if (res) {
        console.log(res.data.posts);
        setBlogs(res.data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        loginUser,
        registerUser,
        token,
        User: user,
        blogs,
        fetchAllPosts,
        isLoggedIn,
        setIsLoggedIn,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;