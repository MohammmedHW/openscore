import React from 'react';
import { ChevronRight } from 'lucide-react';
import './BankOffers.css';
import walletimage from '../assets/wallet.png';
import bankimage from '../assets/bank.png';
const BankOffers = () => {
  return (
    <section className="bank-offers flex gap-4">
      <div className="bank-card setup-card">
        <div className="flex gap-2 items-center mb-2">
          <h3 className="text-sm font-bold text-white z-10 relative">SET UP BANK ACCOUNT</h3>
          <span className="badge-new z-10 relative">NEW</span>
        </div>
        <p className="text-sm text-white opacity-90 mb-4 z-10 relative">Send & Receive Money<br/>Directly from Bank</p>
        <button className="btn-setup z-10 relative">
          Set Up Now <ChevronRight size={14} />
        </button>
        <img src={bankimage} alt="Bank" className="bank-img" />
      </div>

      <div className="bank-card credit-card card">
        <div className="zero-percent-badge">0%</div>
        <p className="text-sm text-secondary z-10 relative">First User Advantage</p>
        <h3 className="text-sm font-bold mb-2 z-10 relative" style={{ color: 'var(--text-primary)' }}>Credit at 0% Interest</h3>
        <p className="text-sm text-secondary z-10 relative">LIMIT UP TO</p>
        <h2 className="text-xl font-bold text-accent mb-3 z-10 relative">₹5,00,000</h2>
        <button className="btn-primary z-10 relative" style={{ background: '#442ceb' }}>
          Apply Now <ChevronRight size={14} />
        </button>
        <img src={walletimage} alt="Wallet" className="wallet-img" />
      </div>
    </section>
  );
};

export default BankOffers;
