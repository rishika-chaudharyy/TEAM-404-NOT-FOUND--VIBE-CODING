// src/pages/Dashboard.jsx
import React, { useEffect, useState, useRef } from "react";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [theme, setTheme] = useState("dark");
  const canvasRef = useRef(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    document.body.classList.toggle("light-mode");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowRipples = [];

    const addRipple = (x, y) => {
      snowRipples.push({ x, y, radius: 0, alpha: 1 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowRipples.forEach((ripple, index) => {
        ripple.radius += 1.5;
        ripple.alpha -= 0.01;
        if (ripple.alpha <= 0) {
          snowRipples.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
          ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha})`;
          ctx.lineWidth = 1.2;
          ctx.shadowColor = `rgba(255, 255, 255, ${ripple.alpha})`;
          ctx.shadowBlur = 10;
          ctx.stroke();
        }
      });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      addRipple(e.clientX, e.clientY);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    animate();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas id="ripple-canvas" ref={canvasRef}></canvas>
      <div className={`dashboard-container ${theme}`}>
        <nav className="dashboard-navbar">
          <div className="logo">DashBoard Page</div>
          <ul className="nav-links">
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li>
              <Link to="/striking">Striking</Link>
            </li>
            <li>
              <Link to="/customer">Customer</Link>
            </li>
          </ul>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>
        <p className="navigate">
          Click on Testimonial to move to testimonial Page
        </p>
        <div className="carousel-container">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <img
                  src="https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg"
                  alt="Front"
                />
              </div>
              <div className="flip-back">
                <img
                  src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg"
                  alt="Back"
                />
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <img
                  src="https://img.freepik.com/free-vector/gradient-brain-background_23-2150511972.jpg"
                  alt="Front"
                />
              </div>
              <div className="flip-back">
                <img
                  src="https://img.freepik.com/free-photo/engineers-brainstorming-ways-use-ai_482257-84889.jpg"
                  alt="Back"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="intro-section">
          <h1 className="intro-heading">Welcome to the Future of AI</h1>
          <p className="intro-subtext">
            Explore cutting-edge intelligence and human collaboration like never
            before.
          </p>
        </div>

        <div className="animated-features">
          <div className="feature-card">
            <h3>Real-time Insights</h3>
            <p>
              Gain instant analytics powered by machine learning algorithms.
            </p>
          </div>
          <div className="feature-card">
            <h3>Human-AI Collaboration</h3>
            <p>
              Unleash the potential of combined intelligence and
              decision-making.
            </p>
          </div>
          <div className="feature-card">
            <h3>Custom Solutions</h3>
            <p>
              Tailored tools for every business powered by smart predictions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
