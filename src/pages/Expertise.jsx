import React, { useState } from 'react';
import { Users, Target, Brain, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Expertise({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('team');

  const services = [
    {
      id: 'team',
      name: 'Dynamic Team Building',
      icon: Users,
      tagline: 'We help teams move from simply functional to truly exceptional.',
      desc: 'High-performing organizations are built on strong, collaborative teams. Our experiential team-building programs are designed to break down barriers and establish cohesive workspaces.',
      benefits: [
        'Strengthen trust and collaboration',
        'Improve communication and accountability',
        'Break down organizational silos',
        'Foster shared responsibility',
        'Increase productivity and performance'
      ]
    },
    {
      id: 'strategy',
      name: 'Strategic Planning & Execution',
      icon: Target,
      tagline: 'We ensure strategy becomes action — and action produces measurable results.',
      desc: 'Strategy without execution produces little impact. We guide organizations through practical and results-oriented strategic planning processes.',
      benefits: [
        'Clear vision and mission alignment',
        'SMART organizational goals',
        'Actionable implementation roadmaps',
        'Performance monitoring systems',
        'Accountability and evaluation frameworks'
      ]
    },
    {
      id: 'eq',
      name: 'Emotional Intelligence (EQ)',
      icon: Brain,
      tagline: 'Organizations with emotionally intelligent leadership consistently outperform.',
      desc: 'Emotional intelligence is the foundation of effective leadership and a healthy workplace culture. Our programs help leaders and teams develop empathy and connection.',
      benefits: [
        'Increase self-awareness',
        'Build empathy and relational intelligence',
        'Manage conflict constructively',
        'Improve decision-making',
        'Strengthen workplace culture and morale'
      ]
    },
    {
      id: 'customer',
      name: 'Customer Care Excellence',
      icon: Award,
      tagline: 'We help move from transactional service to transformational experience.',
      desc: 'Customer experience is a powerful competitive advantage. We help organizations create customer-centered systems to drive loyalty and standards.',
      benefits: [
        'Improve service delivery standards',
        'Enhance communication and professionalism',
        'Increase customer satisfaction and retention',
        'Strengthen brand reputation',
        'Build long-term customer loyalty'
      ]
    }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedService = services.find(s => s.id === activeTab);

  return (
    <div className="expertise-page fade-in">
      {/* Page Header */}
      <section className="approach-hero-advanced">
        <div className="container approach-hero-grid">
          <div className="approach-hero-left">
            <span className="approach-subtitle-gold">SPECIALIZED CONSULTING</span>
            <h1 className="approach-serif-title text-white">
              Our <br />
              <span className="italic-light">Expertise.</span>
            </h1>
          </div>
          <div className="approach-hero-right">
            <p className="approach-hero-intro-text">
              We provide strategic interventions that address the core of organizational performance: people, processes, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="expertise-tabs-section">
        <div className="container">
          <div className="tabs-container">
            {/* Tab Headers */}
            <div className="tabs-header-list">
              {services.map((service) => {
                const IconComp = service.icon;
                return (
                  <button
                    key={service.id}
                    id={`expertise-tab-btn-${service.id}`}
                    onClick={() => setActiveTab(service.id)}
                    className={`tab-btn-item ${activeTab === service.id ? 'active' : ''}`}
                  >
                    <IconComp size={18} />
                    <span>{service.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Panel */}
            <div className="tab-content-panel">
              <div className="tab-content-grid">
                <div className="tab-info-col">
                  <div className="tab-icon-badge">
                    {React.createElement(selectedService.icon, { size: 32 })}
                  </div>
                  <h2 className="tab-service-title">{selectedService.name}</h2>
                  <p className="tab-service-tagline">&ldquo;{selectedService.tagline}&rdquo;</p>
                  <p className="tab-service-desc">{selectedService.desc}</p>
                  <button 
                    id="tab-inquire-btn"
                    className="btn-connect"
                    onClick={() => handleNavClick('contact')}
                    style={{ marginTop: '1.5rem' }}
                  >
                    INQUIRE ABOUT THIS SERVICE
                  </button>
                </div>

                <div className="tab-benefits-col">
                  <h3 className="benefits-heading">Key Program Outcomes</h3>
                  <p className="benefits-sub">Our programs are designed to deliver targeted results:</p>
                  <ul className="benefits-list">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="benefit-item">
                        <CheckCircle2 size={18} className="benefit-check-icon" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All Services for Mobile/Scroll alternative */}
      <section className="all-services-summary">
        <div className="container">
          <div className="text-center-wrapper">
            <span className="section-subtitle">AT A GLANCE</span>
            <h2 className="serif-heading-secondary">Corporate Advisory Programs</h2>
          </div>

          <div className="services-summary-grid">
            {services.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div key={idx} className="summary-service-card">
                  <div className="summary-card-header">
                    <div className="summary-icon-box">
                      <IconComp size={20} />
                    </div>
                    <h4>{service.name}</h4>
                  </div>
                  <p className="summary-card-desc">{service.desc}</p>
                  <button 
                    id={`summary-select-${service.id}`}
                    onClick={() => {
                      setActiveTab(service.id);
                      const el = document.querySelector('.tabs-container');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="summary-card-link"
                  >
                    <span>View Outcomes</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
