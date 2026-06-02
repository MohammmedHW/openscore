import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickActions from './components/QuickActions';
import PromoBanner from './components/PromoBanner';
import BankOffers from './components/BankOffers';
import Marketplace from './components/Marketplace';
import MoreWaysToEarn from './components/MoreWaysToEarn';
import BottomNav from './components/BottomNav';
import SuperSaverZone from './components/SuperSaverZone';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-container">
      <Header toggleTheme={toggleTheme} theme={theme} />
      
      <main style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <HeroSection />
        <QuickActions />
        
        <PromoBanner 
          title="Transfer & Get Daily"
          highlight="Cashback"
          subtitle="Upto ₹100 Cashback Everyday"
          actionText="Transfer Now"
          badge="₹ 100 Cashback"
          bgGradient={theme === 'dark' ? 'linear-gradient(90deg, #1A1144 0%, #291569 100%)' : 'linear-gradient(90deg, #F0F3FF 0%, #E3DEFF 100%)'}
          titleColor={theme === 'dark' ? '#A28CF2' : '#5E2BFF'}
          imageSrc="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?w=300&q=80"
        />

        <BankOffers />
        <Marketplace />
        <MoreWaysToEarn />

        <SuperSaverZone />
      </main>
      
      <BottomNav />
    </div>
  );
}

export default App;
