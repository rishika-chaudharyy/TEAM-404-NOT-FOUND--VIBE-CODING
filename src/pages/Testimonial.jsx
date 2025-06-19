import React, { useEffect, useRef, useState } from "react";
import "../styles/testimonial.css";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Priya Mehta",
    comment: "Absolutely loved the experience! Seamless and fast service.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ravi Sharma",
    comment: "A trustworthy platform for all my agricultural needs.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Aarav Singh",
    comment: "Easy to use and helped me connect with buyers instantly!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Kapoor",
    comment: "Customer support is top-notch. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const features = [
  "Instant Seller-Buyer Matchmaking",
  "Verified Profiles and Transactions",
  "Multilingual Chatbot Assistance",
  "Smart Notifications and Reminders",
];

const Testimonial = () => {
  const featuresRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("testimonial-ripple");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ripples = [];

    const addRipple = (x, y) => {
      ripples.push({ x, y, radius: 0, alpha: 1 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripples.forEach((r, i) => {
        r.radius += 1.5;
        r.alpha -= 0.01;
        if (r.alpha <= 0) {
          ripples.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${r.alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });
      requestAnimationFrame(animate);
    };

    canvas.addEventListener("mousemove", (e) => {
      addRipple(e.clientX, e.clientY);
    });

    animate();

    return () => {
      canvas.removeEventListener("mousemove", addRipple);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          featuresRef.current.classList.add("features-visible");
        }
      },
      { threshold: 0.3 }
    );
    if (featuresRef.current) observer.observe(featuresRef.current);
  }, []);

  return (
    <div className="testimonial-container">
      <canvas id="testimonial-ripple"></canvas>

      {showIntro ? (
        <div className="intro-screen">
          <h1 className="intro-heading">Happy Sellers</h1>
        </div>
      ) : (
        <>
          <nav className="dashboard-navbar">
            <div className="logo">Testimonial Page</div>
            <ul className="nav-links">
              <li>
                <Link to="/testimonial">Testimonial</Link>
              </li>
              <li>
                <Link to="/striking">Striking</Link>
              </li>
              <li>
                <a href="#customer">Customer</a>
              </li>
            </ul>
          </nav>

          <section className="testimonial-header">
            <h1>Happy Sellers</h1>
            <p>Hear what our community has to say</p>
          </section>

          <section className="testimonial-carousel-wrapper">
            <div className="testimonial-carousel">
              {reviews.map((review, idx) => (
                <div key={idx} className="testimonial-card">
                  <img
                    className="testimonial-avatar"
                    src={review.image}
                    alt={review.name}
                  />
                  <div className="testimonial-name">{review.name}</div>
                  <div className="testimonial-comment">"{review.comment}"</div>
                </div>
              ))}
            </div>
          </section>

          <section className="features-section" ref={featuresRef}>
            <h2>Why Our Sellers Love Us</h2>
            <div className="feature-cards">
              {features.map((feature, idx) => (
                <div className="feature-card" key={idx}>
                  <h3>{feature}</h3>
                  <p>
                    Discover the benefits of using our platform to enhance your
                    productivity and grow your agricultural reach.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Testimonial;
