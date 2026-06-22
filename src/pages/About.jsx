import React from 'react';
import { ShieldCheck, Star, Users, Handshake, Zap, Compass, Target } from 'lucide-react';

export default function About({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      num: '01',
      name: 'Integrity',
      icon: ShieldCheck,
      desc: 'We operate with honesty, transparency, and professionalism.',
      solidBadge: false
    },
    {
      num: '02',
      name: 'Excellence',
      icon: Star,
      desc: 'We deliver quality-driven solutions and exceptional service.',
      solidBadge: true
    },
    {
      num: '03',
      name: 'Accountability',
      icon: Users,
      desc: 'We measure performance and focus on meaningful results.',
      solidBadge: false
    },
    {
      num: '04',
      name: 'Collaboration',
      icon: Handshake,
      desc: 'We build strong partnerships based on trust and shared purpose.',
      solidBadge: false
    },
    {
      num: '05',
      name: 'Transformation',
      icon: Zap,
      desc: 'We are committed to creating lasting organizational impact.',
      solidBadge: true
    }
  ];

  return (
    <div className="about-page fade-in">
      {/* Page Header */}
      <section className="approach-hero-advanced">
        <div className="container approach-hero-grid">
          <div className="approach-hero-left">
            <span className="approach-subtitle-gold">WHO WE ARE</span>
            <h1 className="approach-serif-title text-white">
              About <br />
              <span className="italic-light">Yaniv.</span>
            </h1>
          </div>
          <div className="approach-hero-right">
            <p className="approach-hero-intro-text">
              We partner with organizations to unlock internal capacity, align people with organizational goals, and implement practical systems that create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Detail Block */}
      <section className="about-details-section">
        <div className="container grid-2">
          <div>
            <span className="section-subtitle">OUR PHILOSOPHY</span>
            <h2 className="serif-heading-secondary">Building Pillars for Long-term Growth</h2>
            <div className="horizontal-divider"></div>
            <p className="details-para">
              In today&rsquo;s rapidly evolving environment, sustainable success is no longer determined by resources alone. It depends on leadership effectiveness, team cohesion, strategic clarity, emotional intelligence, and exceptional customer experience.
            </p>
            <p className="details-para">
              Our mission is to help organizations intentionally develop these critical pillars for long-term growth and high performance. We partner with organizations to unlock internal capacity, align people with organizational goals, and implement practical systems that create lasting impact.
            </p>
          </div>
          <div className="about-philosophy-cards">
            <div className="vision-card">
              <Compass className="card-graphic-watermark" size={130} />
              <span className="card-subtitle">OUR VISION</span>
              <p className="vision-quote">
                &ldquo;To become a leading consulting firm recognized for transforming organizations through strategic clarity, emotionally intelligent leadership, and high-performance team cultures.&rdquo;
              </p>
            </div>
            <div className="mission-card">
              <Target className="card-graphic-watermark" size={130} />
              <span className="card-subtitle-gold">OUR MISSION</span>
              <p className="mission-text">
                To equip institutions with practical systems, leadership capacity, and strategic tools that produce measurable and sustainable organizational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-header-grid">
            <h2 className="serif-heading-secondary">Core Values</h2>
            <p className="values-header-desc">
              The principles that guide our every intervention and define our commitment to excellence.
            </p>
          </div>
          
          <div className="values-list-vertical">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="value-row-item">
                  <div className="value-title-col">
                    <span className="value-number">{val.num}</span>
                    <h3 className="value-name-serif">{val.name}</h3>
                  </div>
                  <div className="value-desc-col">
                    <p>{val.desc}</p>
                  </div>
                  <div className="value-badge-col">
                    <div className={`value-circle-badge ${val.solidBadge ? 'solid-gold' : 'outline-gray'}`}>
                      <IconComp size={18} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="container text-center-wrapper">
          <span className="section-subtitle">OUR COMMITMENT</span>
          <h2 className="serif-heading-secondary text-white">Dedicated to Sustainable Results</h2>
          <p className="commitment-intro text-slate-300">
            At YANIV Consulting Service, we are committed to helping organizations move:
          </p>
          <div className="commitment-steps">
            <div className="step-box">
              <span className="step-label">FROM</span>
              <span className="step-val">Potential</span>
              <span className="step-arrow">&rarr;</span>
              <span className="step-label">TO</span>
              <span className="step-val gold">Performance</span>
            </div>
            <div className="step-box">
              <span className="step-label">FROM</span>
              <span className="step-val">Intention</span>
              <span className="step-arrow">&rarr;</span>
              <span className="step-label">TO</span>
              <span className="step-val gold">Execution</span>
            </div>
            <div className="step-box">
              <span className="step-label">FROM</span>
              <span className="step-val">Activity</span>
              <span className="step-arrow">&rarr;</span>
              <span className="step-label">TO</span>
              <span className="step-val gold">Measurable Impact</span>
            </div>
          </div>
          <p className="commitment-outro">
            We do not simply offer consultancy services &mdash; we partner with organizations to create sustainable transformation and long-term success.
          </p>
          <button 
            id="about-connect-btn"
            className="btn-connect cta-btn-gold" 
            onClick={() => handleNavClick('contact')}
            style={{ marginTop: '2.5rem' }}
          >
            PARTNER WITH US
          </button>
        </div>
      </section>
    </div>
  );
}
