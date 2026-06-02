import React from "react";
import { ChevronRight } from "lucide-react";
import "./PromoBanner.css";
import imageSrc from '../assets/image1.png';

const PromoBanner = ({
  title,
  highlight,
  subtitle,
  actionText,
  titleColor = "#5B32FF",
 
}) => {
  return (
    <div className="promo-banner">
      {/* Content */}
      <div className="promo-content">
        <span className="promo-title-small">{title}</span>

        <h2 className="promo-highlight" style={{ color: titleColor }}>
          {highlight}
        </h2>

        <p className="promo-subtitle">{subtitle}</p>

        <button className="promo-btn">
          {actionText}
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Image */}
      <div className="promo-image">
        <img
          src={imageSrc}
          alt="vault"
          className="vault-img"
        />
      </div>

      {/* Cashback Card */}
      <div className="promo-card">
        <div className="promo-card-price">₹100</div>
        <div className="promo-card-label">Cashback</div>
      </div>
    </div>
  );
};

export default PromoBanner;