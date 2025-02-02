import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import BlogProvider from "./store/blogStore";

const App = () => {
  return (
    <BlogProvider>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </BlogProvider>
  );
};

export default App;
