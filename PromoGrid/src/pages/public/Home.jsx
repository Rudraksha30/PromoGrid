import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../../styles/home.css";

const categories = [
  {
    icon: "🛍️",
    title: "Products",
    description: "Showcase products people may love.",
  },
  {
    icon: "🧰",
    title: "Services",
    description: "Help customers discover your expertise.",
  },
  {
    icon: "🎉",
    title: "Events",
    description: "Promote events, workshops, and meetups.",
  },
  {
    icon: "📚",
    title: "Education",
    description: "Share courses, classes, and learning opportunities.",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    description: "Discover property listings and opportunities.",
  },
  {
    icon: "💻",
    title: "Technology",
    description: "Highlight digital tools and tech solutions.",
  },
];

const benefits = [
  {
    icon: "🔎",
    title: "Discover more",
    description:
      "Explore advertisements across different categories and find products, services, and opportunities that interest you.",
  },
  {
    icon: "📣",
    title: "Promote your ideas",
    description:
      "Create a listing for your product, service, event, or business and share the details with potential customers.",
  },
  {
    icon: "🗂️",
    title: "Manage your listings",
    description:
      "Keep your advertisements organized and manage their details from your personal dashboard.",
  },
  {
    icon: "📈",
    title: "Understand engagement",
    description:
      "View available interaction data, such as listing views and favourites, as the platform records them.",
  },
];

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToCategories) {
      document.getElementById("categories")?.scrollIntoView({
        behavior: "smooth",
      });

      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname + window.location.search,
      );
    }
  }, [location.state]);

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <span className="home-eyebrow">YOUR IDEAS DESERVE THE SPOTLIGHT</span>

        <h1>
          Every promotion
          <br />
          <span>has a place.</span>
        </h1>

        <p className="home-hero-description">
          One marketplace for products, services, events, and opportunities.
          Discover something new or introduce the world to what you offer.
        </p>

        <div className="home-actions">
          <Link to="/register" className="home-primary-button">
            Explore Ads <span aria-hidden="true">→</span>
          </Link>

          <Link to="/register" className="home-secondary-button">
            Start Promoting
          </Link>
        </div>

        <div className="home-preview-card">
          <span className="home-preview-icon" aria-hidden="true">
            ✳
          </span>
          <div>
            <h2>Welcome to PromoGrid</h2>
            <p>Discover. Publish. Get noticed.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="home-section home-categories" id="categories">
        <div className="home-section-heading">
          <span className="home-eyebrow">ONE PLACE, MANY POSSIBILITIES</span>
          <h2>What can you discover?</h2>
          <p>
            Explore different kinds of advertisements, all brought together in
            one place.
          </p>
        </div>

        <div className="home-category-grid">
          {categories.map((category) => (
            <Link
              to="/register"
              className="home-category-card"
              key={category.title}
            >
              <span className="home-category-icon" aria-hidden="true">
                {category.icon}
              </span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="home-card-link">
                Explore category <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="home-section home-benefits">
        <div className="home-section-heading">
          <span className="home-eyebrow">MADE FOR DISCOVERY AND GROWTH</span>
          <h2>More than just an ad listing</h2>
          <p>
            PromoGrid brings useful tools together to make promoting and
            discovering opportunities simpler.
          </p>
        </div>

        <div className="home-benefit-grid">
          {benefits.map((benefit) => (
            <article className="home-benefit-card" key={benefit.title}>
              <span className="home-benefit-icon" aria-hidden="true">
                {benefit.icon}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="home-section home-how-it-works">
        <div className="home-section-heading">
          <span className="home-eyebrow">GET STARTED IN THREE STEPS</span>
          <h2>How PromoGrid works</h2>
          <p>Getting started is designed to be simple.</p>
        </div>

        <div className="home-steps">
          <article className="home-step">
            <span className="home-step-number">01</span>
            <h3>Create your account</h3>
            <p>Register to access your personal PromoGrid experience.</p>
          </article>

          <article className="home-step">
            <span className="home-step-number">02</span>
            <h3>Publish an advertisement</h3>
            <p>Add a title, description, category, and relevant details.</p>
          </article>

          <article className="home-step">
            <span className="home-step-number">03</span>
            <h3>Connect through discovery</h3>
            <p>Help interested visitors find your listing and learn more.</p>
          </article>
        </div>
      </section>

      {/* Final call to action */}
      <section className="home-final-cta">
        <span className="home-eyebrow">YOUR NEXT OPPORTUNITY STARTS HERE</span>
        <h2>Ready to get noticed?</h2>
        <p>
          Whether you're sharing something new or searching for your next
          opportunity, there's a place for you on PromoGrid.
        </p>
        <div className="home-actions">
          <Link to="/register" className="home-cta-button">
            Join PromoGrid <span aria-hidden="true">→</span>
          </Link>
          <Link to="/register" className="home-cta-link">
            Browse advertisements
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
