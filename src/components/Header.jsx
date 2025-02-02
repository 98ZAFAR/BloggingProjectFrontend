import { Link } from "react-router-dom";

const Header = () => {
  const scrollToAbout = (event) => {
    event.preventDefault();
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="myBg-dark p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img src="/public/Logo_1.png" className="blogInLogo" alt="Logo" />
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 headerListItem">
            <li>
              <Link to="/" className="text-white nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-white nav-link px-2 link-secondary">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white nav-link px-2 link-secondary">
                Contact
              </Link>
            </li>
            <li>
              <a href="#about-section" onClick={scrollToAbout} className="text-white nav-link px-2 link-secondary">
                About
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
