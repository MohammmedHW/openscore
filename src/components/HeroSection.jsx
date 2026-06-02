import React from 'react';
import './HeroSection.css';
import { Info, ArrowRight, Shield } from 'lucide-react';



const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Left Card */}
      <div className="elite-card">
        <div className="elite-content">
          <h4 className="card-label">
            ELITE CREDIT VALUE
            <Info size={12} />
          </h4>

          <div className="value-block">
            <h1>500</h1>
            <span>Total Value</span>
          </div>

          <button className="details-btn">
            View Details
            <ArrowRight size={14} />
          </button>
        </div>

        <img
          src="/elite_shield.png"
          alt="shield"
          className="shield-image"
        />
      </div>

      {/* Right Card */}
      <div className="vault-card">
        <div className="vault-top">
          <div className="vault-title">
            <div className="vault-badge">
              <Shield size={14} />
            </div>
            <span>VAULT CARD</span>
          </div>

          <div className="vault-tabs">
            <button className="active">
              METAL ASSET
            </button>

            <button>
              DIGITAL ASSET
            </button>
          </div>
        </div>

        <div className="vault-content">
          <div className="vault-info">
            <p>ASSET VALUE</p>
            <h2>₹0</h2>
          </div>

          <img
            src="/safe_box.png"
            alt="vault"
            className="vault-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;