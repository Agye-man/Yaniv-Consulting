import React from 'react';
import { Search, Target, Users, Wrench, RefreshCw } from 'lucide-react';

export default function Approach() {
  const phases = [
    {
      num: '01',
      title: 'Diagnostic',
      slogan: 'We assess organizational realities before prescribing solutions.',
      desc: 'Our process begins with deep listening and data collection. We identify the root causes of performance gaps rather than just treating symptoms.',
      icon: Search
    },
    {
      num: '02',
      title: 'Strategic',
      slogan: 'Every intervention aligns with institutional goals and objectives.',
      desc: 'We ensure that every consulting hour and every proposed change directly supports your long-term goals and mission.',
      icon: Target
    },
    {
      num: '03',
      title: 'Participatory',
      slogan: 'We engage leadership and staff throughout the process.',
      desc: "Transformation isn't something done *to* an organization; it's something done *with* it. We actively collaborate with your team to foster ownership.",
      icon: Users
    },
    {
      num: '04',
      title: 'Practical',
      slogan: 'Our solutions are actionable, measurable, and results-driven.',
      desc: "We avoid academic jargon and complex theories that don't translate to the real world. Our solutions are designed for immediate application.",
      icon: Wrench
    },
    {
      num: '05',
      title: 'Sustainable',
      slogan: 'We focus on long-term systems and lasting transformation.',
      desc: "Our goal is to leave your organization stronger and more capable than we found it, with systems that endure long after we're gone.",
      icon: RefreshCw
    }
  ];

  const dependencies = [
    {
      title: 'Strategy without people fails.',
      desc: 'Even the most brilliant strategy is inert without aligned, empowered, and engaged individuals to bring it to life.'
    },
    {
      title: 'People without structure drift.',
      desc: 'Intelligent and motivated people require clear channels, defined roles, and robust systems to channel their energy productively.'
    },
    {
      title: 'Structure without emotional intelligence fractures.',
      desc: 'Without empathy, self-awareness, and constructive conflict resolution, even the perfect processes break under pressure.'
    },
    {
      title: 'Service without systems collapses.',
      desc: 'Exceptional service delivery cannot depend on individual heroism alone; it must be backed by reproducible, customer-centered systems.'
    }
  ];

  return (
    <div className="approach-page fade-in">
      {/* SECTION 1: HERO (Dark Navy Philosophy Banner) */}
      <section className="approach-hero-advanced">
        <div className="container approach-hero-grid">
          <div className="approach-hero-left">
            <span className="approach-subtitle-gold">OUR PHILOSOPHY</span>
            <h1 className="approach-serif-title text-white">
              No <span className="italic-light">Generic</span><br />
              Solutions.
            </h1>
          </div>
          <div className="approach-hero-right">
            <p className="approach-hero-intro-text">
              At Yaniv Consulting Service, we believe transformation happens when people, processes, and purpose are aligned.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: METHODOLOGY TIMELINE ("How We Deliver Excellence") */}
      <section className="methodology-timeline-section">
        <div className="container methodology-timeline-grid">
          {/* Left Column: Heading and intro */}
          <div className="methodology-intro-col">
            <span className="section-subtitle">THE METHODOLOGY</span>
            <h2 className="serif-heading-secondary">
              How We <br />
              Deliver <br />
              <span className="italic-gold">Excellence.</span>
            </h2>
            <div className="horizontal-divider"></div>
            <p className="methodology-intro-desc">
              Our structured approach ensures that every project is handled with precision, from initial assessment to final implementation.
            </p>
          </div>

          {/* Right Column: Timeline items */}
          <div className="timeline-container">
            {phases.map((phase, idx) => {
              const IconComp = phase.icon;
              return (
                <div key={idx} className="timeline-item">
                  {/* Badge & Line */}
                  <div className="timeline-badge-col">
                    <div className="timeline-badge">
                      <IconComp size={24} />
                    </div>
                    {idx < phases.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  
                  {/* Phase Details */}
                  <div className="timeline-content-col">
                    <span className="phase-tag">PHASE {phase.num}</span>
                    <h3 className="phase-title">{phase.title}</h3>
                    <p className="phase-slogan">&ldquo;{phase.slogan}&rdquo;</p>
                    <p className="phase-desc">{phase.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEMS CONNECT ("Because we understand how systems connect") */}
      <section className="systems-connect-section">
        <div className="container systems-connect-grid">
          {/* Left Column: Heading */}
          <div className="systems-connect-left">
            <span className="section-subtitle">WHY CHOOSE YANIV</span>
            <h2 className="serif-heading-secondary">
              Because we <br />
              understand <br />
              how systems <br />
              <span className="italic-gold">connect.</span>
            </h2>
            <p className="systems-connect-intro">
              We integrate leadership, strategy, culture, and performance into one cohesive transformation framework.
            </p>
          </div>

          {/* Right Column: Dependencies vertical list */}
          <div className="systems-connect-right">
            {dependencies.map((dep, idx) => (
              <div key={idx} className="dependency-item">
                <h3 className="dependency-title">{dep.title}</h3>
                <p className="dependency-desc">{dep.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
