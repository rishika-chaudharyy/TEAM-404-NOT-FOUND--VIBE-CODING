// src/pages/LoadingPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loading.css";

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [split, setSplit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setSplit(true);
            setTimeout(() => navigate("/dashboard"), 1000);
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // ~2.5 seconds total

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className={`loading-container ${split ? "split" : ""}`}>
      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-counter">{progress}%</div>

      <p>
        There is no glitch in loading the other page this page is just to show
        how I have animated the loader
      </p>
    </div>
  );
};

export default LoadingPage;
