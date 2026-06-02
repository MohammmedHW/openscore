import React from 'react';
import { ArrowRight } from 'lucide-react';
import './SuperSaverZone.css';

const SuperSaverZone = () => {
  return (
    <div className="super-saver-zone">
      <div className="ssz-content">
        <div className="ssz-header">
          <h3 className="ssz-title">Super Saver Zone</h3>
          <span className="ssz-hot-badge">HOT</span>
        </div>
        <p className="ssz-subtitle">Exclusive Offers & Extra Cashback</p>
      </div>
      
      <button className="ssz-btn">
        Explore Offers <ArrowRight size={12} />
      </button>
      
      <div className="ssz-icon-container">
        <svg viewBox="0 0 24 24" fill="none" className="ssz-ticket-icon">
           <defs>
             <linearGradient id="ticketGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8C52FF" />
                <stop offset="100%" stopColor="#5B32FF" />
             </linearGradient>
           </defs>
           <path d="M21 10V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10Z" fill="url(#ticketGrad)"/>
           <circle cx="9.5" cy="9.5" r="1.5" fill="white" />
           <circle cx="14.5" cy="14.5" r="1.5" fill="white" />
           <path d="M14.5 9.5L9.5 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default SuperSaverZone;
