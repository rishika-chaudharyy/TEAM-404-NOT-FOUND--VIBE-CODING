import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Make sure this is imported
import "../styles/Home.css";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.jpg";

const AnimatedHome = () => {
  const navigate = useNavigate(); // ✅ INSIDE the function component

  const bgImages = [bg1, bg2, bg3, bg4];

  return (
    <div className="home-container">
      <div className="floating-images">
        <div className="bg-shapes">
          <div className="shape circle red"></div>
          <div className="shape square blue"></div>
          <div className="shape half-circle yellow"></div>
        </div>

        {bgImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`bg-img img-${index}`}
            alt={`Floating ${index}`}
          />
        ))}
      </div>

      <div className="content-wrapper">
        <div className="top-reviews">
          <span>⭐ 4.8 rating on 🧑‍💻 Capterra</span>
          <span>🌕 4.8 rating on 🪐 Moon</span>
          <span>⭐ 359 reviews on Xero</span>
          <span>⭐ 550+ reviews on QuickBooks</span>
        </div>
        <h1 className="main-heading">
          Create Reports, Forecast,
          <br /> Dashboards and Consolidations
        </h1>
        <p className="subtext">
          ✨ Now with <strong>AI Insights</strong>
        </p>
        <div className="buttons">
          <button className="primary-btn" onClick={() => navigate("/loading")}>
            Start 14-day Free Trial
          </button>
          <a href="#how" className="link-btn">
            See what to do
          </a>
        </div>
      </div>

      <img
        src="https://gifdb.com/images/thumbnail/planet-mercury-spinning-4z9etzjke9hlb5b3.gif"
        className="mercury"
        alt="Mercury Floating Blob"
      />

      <div className="comment-bubble">💬</div>
    </div>
  );
};

export default AnimatedHome;
