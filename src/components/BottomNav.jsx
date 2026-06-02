import React from 'react';
import { Home, Zap, QrCode, ShoppingBag, User } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-item active">
        <Home size={24} />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <Zap size={24} />
        <span>Loans</span>
      </div>
      
      <div className="nav-item center-scan">
        <div className="scan-btn">
          <QrCode size={28} />
        </div>
        <span>Pay / QR</span>
      </div>
      
      <div className="nav-item">
        <ShoppingBag size={24} />
        <span>Marketplace</span>
      </div>
      <div className="nav-item">
        <User size={24} />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default BottomNav;
