import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const SplashScreen = () => {
  return (
    <div className="container text-center vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-3">Nutri<span className="text-success">Plan</span></h1>
      <p>Meal Planning Made <span className="text-success">Simple</span> for Everyone</p>
      <Link to="/signup" className="btn btn-success">Get Started</Link>
      <p className="mt-2">
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default SplashScreen;
