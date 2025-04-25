import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import mainImg from '/rafiki.png';
import icon1 from '/arcticons_mealient.png';
import icon2 from '/arcticons_recipe-keeper.png';
import icon4 from '/arcticons_emoji-pot-of-food.png';
import './SplashScreen.css';

const SplashScreen = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      img: icon1,
      title: "Balanced Meals",
      description: "Curated meals to support all your nutritional goals."
    },
    {
      img: icon2,
      title: "Easy Recipes",
      description: "Simple step-by-step instructions for stress-free cooking."
    },
    {
      img: icon4,
      title: "Diet-Friendly",
      description: "Plans that fit vegan, keto, gluten-free, and more."
    },
    
    
  ];

  return (
    <div className="splash-wrapper d-flex justify-content-center align-items-center">
      <div className="hero-box container px-4 py-5 rounded-4 " data-aos="fade-up">
        <div className="row align-items-center g-5 flex-lg-row-reverse">
          <div className="col-lg-6 text-center">
            <img src={mainImg} alt="NutriPlan" className="img-fluid main-img" />
          </div>
          <div className="col-lg-6 text-lg-start text-center">
            <h2 className="display-6 fw-bold mb-3 title">
            Smart Meal Planning for a Healthier, Easier Life
            </h2>
            <p className="lead">
            With thoughtfully curated recipes and personalized nutrition support, NutriPlan simplifies your daily meals — so you can eat well, save time, and stay focused on what truly matters.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
              <Link to="/signup" className="btn btn-lg get-started-btn">Get Started</Link>
              <Link to="/signin" className="btn btn-lg sign-btn">Sign In</Link>
            </div>
          </div>
        </div>

        <div className="row flex-nowrap mt-5 pt-3 px-2 gap-4" data-aos="zoom-in-up">
          {features.map((item, i) => (
            <div key={i} className="col-10 col-sm-6 col-md-4 flex-shrink-0 bg-light rounded-4 p-4 text-center position-relative feature-box shadow-sm">
              <img src={item.img} alt={`icon${i}`} className="mb-3 icons" />
              <h6 className="fw-bold">{item.title}</h6>
              <p className="text-muted small">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
