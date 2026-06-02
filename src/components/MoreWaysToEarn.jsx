import React from 'react';
import { ChevronRight, Gift, FileText, Zap, QrCode } from 'lucide-react';
import './MoreWaysToEarn.css';

const ways = [
  { id: 1, title: 'Refer & Earn', sub: 'Earn upto', value: '₹500', icon: <Gift size={32} className="text-accent" /> },
  { id: 2, title: 'Pay Bills', sub: 'Get upto', value: '₹50', icon: <FileText size={32} className="text-secondary" /> },
  { id: 3, title: 'Recharge', sub: 'Get upto', value: '₹30', icon: <Zap size={32} color="#0BC15C" /> },
  { id: 4, title: 'Scan & Pay', sub: 'Get upto', value: '₹20', icon: <QrCode size={32} className="text-accent" /> },
];

const MoreWaysToEarn = () => {
  return (
    <section className="more-ways">
      <div className="section-header">
        <h2 className="section-title">More Ways to Earn</h2>
        <a href="#" className="section-link">View All <ChevronRight size={16} /></a>
      </div>
      
      <div className="ways-grid">
        {ways.map(way => (
          <div key={way.id} className="way-card card flex justify-between items-center">
            <div>
              <h4 className="text-xs font-bold">{way.title}</h4>
              <p className="text-[10px] text-secondary mt-1">{way.sub}</p>
              <h3 className="text-sm font-bold text-accent">{way.value}</h3>
            </div>
            <div className="way-icon">{way.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreWaysToEarn;
