import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="myBg-dark py-3">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link to="#" className="nav-link px-2 text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link px-2 text-white">
            Blogs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link px-2 text-white">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link px-2 text-white">
            FAQs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link px-2 text-white">
            About
          </Link>
        </li>
      </ul>
      <p className="text-center text-white">© 2024 Company, Inc</p>
    </footer>
  );
};

export default Footer;