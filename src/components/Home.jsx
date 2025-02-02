import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaUsers, FaBookOpen } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Welcome to Blog-In</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              onClick={() => navigate('/signup')}
            >
              Signup
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-lg px-4"
              onClick={() => navigate('/signin')}
            >
              Signin
            </button>
          </div>
        </div>
        <div className="homeImage mt-4">
          <img src="/public/BlogHome.png" alt="Blog Home" className="img-fluid" />
        </div>
      </div>

      {/* About Section */}
      <div className="container mt-5" id="about-section">
        <h2 className="text-white fw-bold">About Blog-In</h2>
        <div className="row text-white mt-4">
          <div className="col-md-4 text-center">
            <FaUserGraduate size={50} className="text-info mb-3" />
            <h4>For Learners</h4>
            <p>
              Access a wide range of insightful blogs and resources to enhance
              your knowledge and skills.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <FaUsers size={50} className="text-info mb-3" />
            <h4>Community Driven</h4>
            <p>
              Engage with a vibrant community of writers, readers, and tech enthusiasts.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <FaBookOpen size={50} className="text-info mb-3" />
            <h4>Knowledge Hub</h4>
            <p>
              Discover and share valuable insights across various topics and domains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
