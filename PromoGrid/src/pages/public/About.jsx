import { Link } from "react-router-dom";
import "../../styles/info.css";

function About() {
  return (
    <main className="info-page">
      <section className="info-hero">
        <span className="home-eyebrow">ABOUT PROMOGRID</span>
        <h1>Every promotion has a place.</h1>
        <p>
          PromoGrid is a marketplace concept designed to bring advertisements
          for products, services, events, and opportunities together in one
          convenient place.
        </p>
      </section>

      <section className="info-content">
        <article className="info-card">
          <h2>Our purpose</h2>
          <p>
            We want to make it easier for people and businesses to share what
            they offer, while helping visitors discover things that match their
            interests.
          </p>
        </article>

        <article className="info-card">
          <h2>What you can do</h2>
          <p>
            Visitors can explore listings. Registered users will be able to
            publish and manage advertisements, save favourites, and review
            available engagement information.
          </p>
        </article>

        <article className="info-card">
          <h2>Built for discovery</h2>
          <p>
            From local services and educational opportunities to events and
            technology, PromoGrid aims to give different kinds of promotions a
            shared space.
          </p>
        </article>
      </section>

      <section className="info-cta">
        <h2>Have something to share?</h2>
        <p>Create an account to get started with PromoGrid.</p>
        <Link to="/register" className="home-primary-button">
          Join PromoGrid →
        </Link>
      </section>
    </main>
  );
}

export default About;
