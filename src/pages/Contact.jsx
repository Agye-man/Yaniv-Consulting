import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'general',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'team-building', label: 'Dynamic Team Building' },
    { value: 'strategic-planning', label: 'Strategic Planning & Execution' },
    { value: 'emotional-intelligence', label: 'Emotional Intelligence (EQ) Development' },
    { value: 'customer-care', label: 'Customer Care Excellence' },
    { value: 'child-care', label: 'Nanny & Child Care Programme' },
    { value: 'church-growth', label: 'Church Growth & Leadership' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear errors when typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setIsSubmitted(true);
      // In a real app, you would send this to an API
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div className="contact-page fade-in">
      {/* Page Header */}
      <section className="contact-hero">
        <div className="container text-center-wrapper">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h1 className="serif-heading-secondary">Contact Us</h1>
          <p className="about-hero-desc">
            Partner with us to transform your organization. Reach out today to schedule a consultation with our development team.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="contact-content-section">
        <div className="container grid-2">
          {/* Contact Details Left */}
          <div className="contact-info-col">
            <span className="section-subtitle">PARTNER WITH YANIV</span>
            <h2 className="serif-heading-secondary">Let&rsquo;s Start a Conversation</h2>
            <div className="horizontal-divider"></div>
            <p className="contact-info-para">
              Whether you are looking to build trust in your teams, structure a strategic roadmap, elevate customer care standards, or certify care staff, YANIV has practical systems designed for your organization.
            </p>

            <ul className="contact-details-list">
              <li>
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@yanivconsulting.com</p>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 019-2834</p>
                </div>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Our Office</h4>
                  <p>100 Corporate Parkway, Suite 500, New York, NY</p>
                </div>
              </li>
            </ul>

            <div className="contact-download-box">
              <h4>Download Services Presentation</h4>
              <p>Get a comprehensive, offline overview of YANIV Consulting Service.</p>
              <a 
                href="/yaniv_editorial_brochure.pdf" 
                download 
                className="btn-download-pdf"
                id="contact-download-pdf-btn"
                style={{ marginTop: '1rem' }}
              >
                <Download size={16} />
                <span>DOWNLOAD SERVICES PDF</span>
              </a>
            </div>
          </div>

          {/* Form Right */}
          <div className="contact-form-col">
            <div className="form-card">
              {isSubmitted ? (
                <div className="form-success-message text-center">
                  <div className="success-icon-box">
                    <CheckCircle2 size={48} className="text-green-500" />
                  </div>
                  <h3>Request Submitted Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. We have received your consultation request for <strong>{servicesList.find(s => s.value === formData.service)?.label}</strong>. A YANIV consultant will reach out to you at <strong>{formData.email}</strong> within 1-2 business days.
                  </p>
                  <button 
                    id="contact-new-request-btn"
                    className="btn-connect" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', service: 'general', message: '' });
                    }}
                    style={{ marginTop: '2rem' }}
                  >
                    SEND ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="consultation-form">
                  <h3 className="form-title">Request a Consultation</h3>
                  <p className="form-sub">Provide your details to help us understand your requirements.</p>

                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={formErrors.name ? 'input-error' : ''}
                      placeholder="Jane Doe"
                    />
                    {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? 'input-error' : ''}
                      placeholder="jane@organization.com"
                    />
                    {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">Organization Name</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      {servicesList.map((srv) => (
                        <option key={srv.value} value={srv.value}>
                          {srv.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">How can we help you? *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={formErrors.message ? 'input-error' : ''}
                      placeholder="Tell us about your team, challenges, or goals..."
                    />
                    {formErrors.message && <span className="error-text">{formErrors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    id="contact-submit-btn"
                    className="btn-connect form-submit-btn"
                  >
                    <Send size={14} style={{ marginRight: '0.5rem' }} />
                    <span>SUBMIT REQUEST</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
