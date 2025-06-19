import React, { useState, useEffect } from "react";
import "../styles/customer.css";

const companies = [
  "AgroTech Farms",
  "GreenLeaf Co.",
  "HarvestNow",
  "CropSecure Ltd.",
  "Farm Fusion",
  "AgriPulse India",
  "FreshFields",
];

const customerReviews = [
  {
    name: "Suresh Patel",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    review: "CropSecure has transformed the way I sell my produce.",
  },
  {
    name: "Anita Rao",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    review: "Farm Fusion provides the best farmer-to-market tools.",
  },
  {
    name: "Rajiv Bhandari",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    review: "With HarvestNow, I get paid faster and safer.",
  },
  {
    name: "Kavita Sharma",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    review: "GreenLeaf Co. helped me scale my organic farm business.",
  },
];

const CustomerPage = () => {
  const [currentCompany, setCurrentCompany] = useState(0);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompany((prev) => (prev + 1) % companies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="customer-page">
      <div className="company-display">
        {!showCards ? (
          <div className="company-name" onClick={() => setShowCards(true)}>
            {companies[currentCompany]}
            <div className="hover-button">
              Meet the Customer "Please click here"
            </div>
          </div>
        ) : (
          <div className="customer-cards">
            {customerReviews.map((c, idx) => (
              <div className="customer-card" key={idx}>
                <img src={c.image} alt={c.name} />
                <h3>{c.name}</h3>
                <p>{c.review}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerPage;
