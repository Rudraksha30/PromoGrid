import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";
import "../../styles/navbar.css";

function PublicNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleExploreAds(event) {
    event.preventDefault();

    if (location.pathname === "/") {
      document.getElementById("categories")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", { state: { scrollToCategories: true } });
    }
  }

  return (
    <header className="public-navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">P</span>
        <span>PromoGrid</span>
      </Link>

      <nav className="public-nav-links" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        <a href="/" onClick={handleExploreAds}>
          Explore Ads
        </a>

        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>

      <div className="navbar-actions">
        <ThemeToggle />

        <Link to="/login" className="navbar-login">
          Login
        </Link>

        <Link to="/register" className="navbar-register">
          Register
        </Link>
      </div>
    </header>
  );
}

export default PublicNavbar;
