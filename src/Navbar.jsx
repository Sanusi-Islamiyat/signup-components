import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 994);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 994);
      if (window.innerWidth > 994) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          nutri<span className="nup-span">plan.</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-between ${isOpen ? "show" : ""}`}>
          <ul className={`navbar-nav mx-auto ${isMobile ? "mobile-nav" : ""}`}>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials" onClick={toggleMenu}>Testimonials</Link>
            </li>
          </ul>
          <div className="d-flex justify-content-end">
            <Link to="/contact" className="btn ms-3 contact-btn">Contact</Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
