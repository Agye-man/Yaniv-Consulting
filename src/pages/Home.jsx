import React from 'react';
import { ArrowRight, Star, Building2, Landmark, Globe, GraduationCap, Briefcase, Heart, CheckCircle2 } from 'lucide-react';

export default function Home({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const industries = [
    { name: 'Corporate Organizations', icon: Briefcase, desc: 'Enhancing productivity, alignment, and leadership cohesion.' },
    { name: 'Government Institutions', icon: Landmark, desc: 'Building sustainable structures and service excellence.' },
    { name: 'NGOs & Development Agencies', icon: Globe, desc: 'Empowering teams and strategic planning for global impact.' },
    { name: 'Educational Institutions', icon: GraduationCap, desc: 'Strengthening administrative leadership and values.' },
    { name: 'Small & Medium Enterprises (SMEs)', icon: Building2, desc: 'Unlocking capacity for scalable, long-term growth.' },
    { name: 'Faith-Based Organizations', icon: Heart, desc: 'Aligning governance, hospitality, and member care.' }
  ];

  return (
    <div className="home-page fade-in">
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Left Column: Heading and Taglines */}
          <div className="hero-content">
            <span className="section-subtitle">ORGANIZATIONAL PERFORMANCE</span>
            <h1 className="serif-heading hero-title">
              Aligning <span className="italic-text">People.</span><br />
              Advancing <span className="gold-text">Performance.</span>
            </h1>
            <p className="hero-description">
              We help organizations move from potential to performance &mdash; from intention to execution &mdash; from activity to measurable impact.
            </p>
            <div className="btn-explore" onClick={() => handleNavClick('expertise')}>
              <div className="circle-arrow">
                <ArrowRight size={20} />
              </div>
              <span className="explore-text">EXPLORE EXPERTISE</span>
            </div>
          </div>

          {/* Right Column: Hero Image & Quote Card */}
          <div className="hero-media">
            <div className="hero-img-wrapper">
              <img src="/consultancy.png" alt="YANIV Consulting Service Team Collaboration" className="hero-img" />
            </div>
            <div className="hero-quote-card">
              <div className="quote-star-box">
                <Star size={18} fill="white" color="white" />
              </div>
              <p className="hero-quote-text">
                &ldquo;Success is determined by leadership quality, team cohesion, and strategic alignment.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section className="identity-section">
        <div className="container identity-stacked-container">
          <span className="section-subtitle">WHO WE ARE</span>
          <h2 className="serif-heading-secondary">
            Transforming organizations <span className="italic-gold">from within</span>.
          </h2>
          <div className="horizontal-divider"></div>
          
          <div className="identity-text-stacked">
            <p className="identity-paragraph">
              <strong>YANIV Consulting Service</strong> is a professional organizational development and performance consulting firm dedicated to strengthening institutions through strategic planning, emotionally intelligent leadership, dynamic team development, and customer service excellence.
            </p>
            <p className="identity-paragraph">
              We partner with organizations to unlock internal capacity, align people with organizational goals, and implement practical systems that create lasting impact.
            </p>
          </div>

          <button 
            id="identity-read-more-btn"
            className="btn-text-link" 
            onClick={() => handleNavClick('about')}
            style={{ marginTop: '2rem' }}
          >
            <span>READ MORE ABOUT US</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* SECTION 3: INDUSTRIES WE SERVE */}
      <section className="industries-section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="section-subtitle">SECTORS WE PARTNER WITH</span>
            <h2 className="serif-heading-secondary text-center">Industries We Serve</h2>
            <p className="section-description-centered">
              We partner with organizations across multiple sectors to implement customized developmental strategies that create lasting impact.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div key={idx} className="industry-card">
                  <div className="industry-icon-box">
                    <IconComp size={24} className="industry-icon" />
                  </div>
                  <h3 className="industry-name">{ind.name}</h3>
                  <p className="industry-desc">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY YANIV */}
      <section className="why-section">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="section-subtitle">WHY CHOOSE US</span>
            <h2 className="serif-heading-secondary">
              Why YANIV Consulting Service?
            </h2>
            <p className="why-intro-text-centered">
              We integrate leadership, strategy, culture, and performance into one cohesive transformation framework. We understand the critical dependencies that drive organizational health:
            </p>
          </div>

          <div className="why-points-grid">
            <div className="why-point-item">
              <div className="why-point-num">01</div>
              <div className="why-point-detail">
                <h4>Strategy without people fails.</h4>
                <p>No strategy can succeed without the buy-in, alignment, and commitment of the people executing it.</p>
              </div>
            </div>

            <div className="why-point-item">
              <div className="why-point-num">02</div>
              <div className="why-point-detail">
                <h4>People without structure drift.</h4>
                <p>Without clear systems, roles, and accountability, even the most talented teams lose alignment and focus.</p>
              </div>
            </div>

            <div className="why-point-item">
              <div className="why-point-num">03</div>
              <div className="why-point-detail">
                <h4>Structure without emotional intelligence fractures.</h4>
                <p>Processes fail if the culture lack trust, effective communication, and interpersonal cohesion.</p>
              </div>
            </div>

            <div className="why-point-item">
              <div className="why-point-num">04</div>
              <div className="why-point-detail">
                <h4>Service without systems collapses.</h4>
                <p>Exceptional customer experiences are built on repeatable, structured internal standards and delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="cta-section-advanced">
        <div className="container">
          <span className="cta-subtitle-advanced">TAKE THE NEXT STEP</span>
          <h2 className="cta-title-advanced">
            Ready to advance <br className="cta-br-desktop" />
            your <span className="italic-gold">performance?</span>
          </h2>
          <div className="cta-actions-advanced">
            <button 
              id="cta-connect-btn"
              className="btn-connect cta-btn-gold-advanced" 
              onClick={() => handleNavClick('contact')}
            >
              CONNECT WITH US
            </button>
            <a 
              href="/yaniv_editorial_brochure.pdf" 
              download 
              className="btn-brochure-outline"
              id="cta-download-brochure-btn"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
