import React from 'react';
import { ChevronRight, Tag, Lock, RefreshCcw, Coins } from 'lucide-react';
import './Marketplace.css';

const categories = [
  { id: 1, name: 'Mobiles', offer: 'Upto 10% Off', imageSrc: '/mobiles_img.png' },
  { id: 2, name: 'Electronics', offer: 'Upto 12% Off', imageSrc: '/electronics_img.png' },
  { id: 3, name: 'Fashion', offer: 'Upto 15% Off', imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=120&q=80' },
  { id: 4, name: 'Home & Kitchen', offer: 'Upto 10% Off', imageSrc: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=120&q=80' },
  { id: 5, name: 'Beauty', offer: 'Upto 8% Off', imageSrc: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&q=80' },
];

const features = [
  { id: 1, title: 'Top Brands', desc: 'Best Deals', icon: <Tag size={16} className="text-success" /> },
  { id: 2, title: 'Secure Shopping', desc: '100% Safe', icon: <Lock size={16} className="text-accent" /> },
  { id: 3, title: 'Easy Returns', desc: 'Hassle Free', icon: <RefreshCcw size={16} className="text-secondary" /> },
 
];

const Marketplace = () => {
  return (
    <section className="marketplace">
      <div className="section-header">
        <h2 className="section-title">Marketplace</h2>
        <a href="#" className="section-link">View All <ChevronRight size={16} /></a>
      </div>
      
      <div className="categories-scroll flex gap-3">
        {categories.map(cat => (
          <div key={cat.id} className="category-card card">
            <div className="category-icon">
              <img src={cat.imageSrc} alt={cat.name} className="category-img" />
            </div>
            <h4 className="category-title">{cat.name}</h4>
            <p className="category-offer">{cat.offer}</p>
          </div>
        ))}
      </div>

      <div className="features-row card">
        {features.map((feat, idx) => (
          <React.Fragment key={feat.id}>
            <div className="feature-item flex items-center gap-2">
              <div className="feature-icon-wrapper">{feat.icon}</div>
              <div className="feature-text-block">
                <h5 className="feature-title">{feat.title}</h5>
                <p className="feature-desc">{feat.desc}</p>
              </div>
            </div>
            {idx < features.length - 1 && <div className="feature-divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;
