import React from 'react';
import { Scan, Send, Repeat, QrCode, Gift, MoreHorizontal } from 'lucide-react';
import './QuickActions.css';

const actions = [
  { id: 1, label: 'Scan QR', icon: <Scan size={24} />, bg: 'linear-gradient(135deg, #7A3CFC, #612EF5)' },
  { id: 2, label: 'Pay ID', icon: <Send size={24} />, bg: '#0A74DA' },
  { id: 3, label: 'Send Money', icon: <Repeat size={24} />, bg: '#0BC15C' },
  { id: 4, label: 'Show QR', icon: <QrCode size={24} />, bg: '#F58220' },
  { id: 5, label: 'Rewards', icon: <Gift size={24} />, bg: '#E32A6D' },
  { id: 6, label: 'More', icon: <MoreHorizontal size={24} />, bg: 'var(--bg-tertiary)', color: 'var(--text-primary)' },
];

const QuickActions = () => {
  return (
    <section className="quick-actions">
      {actions.map(action => (
        <div key={action.id} className="action-item flex-col items-center gap-2">
          <div 
            className="action-icon-wrapper" 
            style={{ 
              background: action.bg,
              color: action.color || 'white'
            }}
          >
            {action.icon}
          </div>
          <span className="action-label text-sm font-semibold">{action.label}</span>
        </div>
      ))}
    </section>
  );
};

export default QuickActions;
