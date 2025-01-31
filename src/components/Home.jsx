import { useNavigate } from "react-router-dom";

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
              onClick={()=>navigate('/signup')}
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
        <div className="homeImage">
          <img src="/public/BlogHome.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
