import React from 'react';
import { Search, Bell, Maximize, Headset } from 'lucide-react';
import './Header.css';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header flex items-center justify-between">
      <div className="user-profile flex items-center gap-2">
        <button className="avatar" onClick={toggleTheme} aria-label="Toggle Theme">
          <span>F</span>
        </button>
        <div className="user-info">
          <p className="greeting text-xs text-secondary">Welcome back</p>
          <h2 className="name font-bold text-base flex items-center gap-1">
            FAIZ <span>👋</span> <span className="verified-badge">✔</span>
          </h2>
        </div>
      </div>

      <div className="live-status flex items-center gap-1">
        <span className="live-indicator text-xs">↗</span>
        <span className="live-count font-semibold text-xs">12,616 LIVE</span>
      </div>

      <div className="header-actions flex gap-1">
        <button className="icon-btn"><Search size={16} /></button>
        <button className="icon-btn notification">
          <Bell size={16} />
          <span className="dot"></span>
        </button>
        <button className="icon-btn"><Maximize size={16} /></button>
        <button className="icon-btn"><Headset size={16} /></button>
      </div>
    </header>
  );
};

export default Header;
