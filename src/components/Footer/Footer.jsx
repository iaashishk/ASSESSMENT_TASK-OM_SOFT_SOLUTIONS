import './Footer.css';
import React from 'react';
import { apexLogo, destination, emailMarketing, phone, workSchedule, ossLogo, emailIcon, whatsappIcon, callIcon } from '../../constants/image';

export default function Footer() {
  return (
    <>
<footer className="Fotter_nrj" id="NRJ-footer">

    <div className="Fotter_nrj-watermark-wrap" aria-hidden="true">
      <div className="Fotter_nrj-watermark" id="Fotter_nrj-watermark">APEX IGNITE</div>
    </div>

    <div className="Fotter_nrj-container">

      <div className="Fotter_nrj-talk-banner">
        
        <div className="Fotter_nrj-talk-left">
          <div className="Fotter_nrj-talk-kicker">
            Get's Started a Projects? <span className="Fotter_nrj-talk-kicker-arrow"></span>
          </div>
          <h2 className="Fotter_nrj-talk-title">LET'S TALK</h2>
          
      <div className="Fotter_nrj-talk-pills">
    <a href="#" target="_blank" rel="noopener" className="Fotter_nrj-pill-item">
        <i className="fa-brands fa-facebook-f"></i> Facebook
    </a>
    <a href="#" target="_blank" rel="noopener" className="Fotter_nrj-pill-item">
        <i className="fa-brands fa-google-plus-g"></i> Google+
    </a>
    <a href="#" target="_blank" rel="noopener" className="Fotter_nrj-pill-item">
        <i className="fa-brands fa-instagram"></i> Instagram
    </a>
    <a href="#" target="_blank" rel="noopener" className="Fotter_nrj-pill-item">
        <i className="fa-brands fa-linkedin-in"></i> LinkedIn
    </a>
</div>
        </div>

        <div className="Fotter_nrj-circle-wrap">
          <a href="#contact" className="Fotter_nrj-circle-btn" id="Fotter_nrj-circle-btn" aria-label="Start The Journey">
            <span className="Fotter_nrj-circle-btn-fill"></span>
            <div className="Fotter_nrj-circle-content">
              <span className="Fotter_nrj-circle-arrow">
                <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '1.3rem' }}></i>
              </span>
              <span className="Fotter_nrj-circle-text">START THE<br />JOURNEY</span>
            </div>
          </a>
        </div>

      </div>

      <div className="Fotter_nrj-contact-strip">
        <div className="Fotter_nrj-contact-grid">

<div className="Fotter_nrj-contact-card">
    <div className="Fotter_nrj-contact-icon-badge">
        <img src={destination} alt="Corporate & Plant" />
    </div>
    <div className="Fotter_nrj-contact-info">
        <div className="Fotter_nrj-contact-label">Corporate &amp; Plant</div>
        <div className="Fotter_nrj-contact-main">
            Plot No. 42-B, Industrial Tech Zone IV, Greater Noida, Uttar Pradesh 201306, India
        </div>
    </div>
</div>

<div className="Fotter_nrj-contact-card">
    <div className="Fotter_nrj-contact-icon-badge">
        <img src={emailMarketing} alt="Mail Us" />
    </div>
    <div className="Fotter_nrj-contact-info">
        <div className="Fotter_nrj-contact-label">Mail Us</div>
        <div className="Fotter_nrj-contact-main">
          <a href="mailto:info@apexignite.com" className="Fotter_nrj-contact-link">info@apexignite.com</a>,
          <a href="mailto:info@apexignite.com" className="Fotter_nrj-contact-link">info@apexignite.com</a>
            <div style={{ fontSize: '0.84rem', color: '#f3f3f3', marginTop: '4px' }}>24/7 Dedicated Client Desk</div>
        </div>
    </div>
</div>

<div className="Fotter_nrj-contact-card">
    <div className="Fotter_nrj-contact-icon-badge">
        <img src={phone} alt="Call Us" />
    </div>
    <div className="Fotter_nrj-contact-info">
        <div className="Fotter_nrj-contact-label">Call Us Directly</div>
        <div className="Fotter_nrj-phone-numbers">
            <a href="tel:+01294056250">+0129-4056250</a>
            <a href="tel:+919313019779">+91-9313019779</a>
            <a href="tel:+919811142144">+91-9811142144</a>
            <a href="tel:+917290036516">+91-7290036516</a>
        </div>
    </div>
</div>

<div className="Fotter_nrj-contact-card">
    <div className="Fotter_nrj-contact-icon-badge">
        <img src={workSchedule} alt="Working Hours" />
    </div>
    <div className="Fotter_nrj-contact-info">
        <div className="Fotter_nrj-contact-label">Working Hours</div>
        <div className="Fotter_nrj-contact-main">
            Monday - Saturday
            <div style={{ fontSize: '0.84rem', color: '#f3f3f3', marginTop: '4px' }}>
                9:00 AM - 6:00 PM
            </div>
        </div>
    </div>
</div>

        </div>
      </div>

      <div className="Fotter_nrj-main-grid">

        <div className="Fotter_nrj-col Fotter_nrj-col-brand">
          <div className="Fotter_nrj-logo-card">
                <a href="./" className="Fotter_nrj-logo-link">
              <img src={apexLogo}
         
         alt="Apex Ignite"
         className="Fotter_nrj-logo-img" />
</a>
          </div>
          <p className="Fotter_nrj-about-text">
            <strong>Apex Ignite Solutions Pvt. Ltd.</strong> is a leading manufacturer of precision plastic components, offering in-house mold design and tool-making facilities. With 2D & 3D design capabilities, advanced injection molding machines from 50 to 350 tons, ultrasonic welding, and expertise in a wide range of thermoplastic materials, we deliver quality solutions for automotive, electrical, and industrial applications.
          </p>

          <div className="Fotter_nrj-follow-title">Follow Us On</div>
          <div className="Fotter_nrj-social-row">
            <a href="#" className="Fotter_nrj-social-btn" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="Fotter_nrj-social-btn" aria-label="X Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="Fotter_nrj-social-btn" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="Fotter_nrj-social-btn" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="Fotter_nrj-col">
          <h3 className="Fotter_nrj-col-heading">Quick Links</h3>
          <ul className="Fotter_nrj-nav-list">
            <li><a href="./" className="Fotter_nrj-nav-link">Home</a></li>
            <li><a href="#whYCHosee_NRJ_section" className="Fotter_nrj-nav-link">About us</a></li>
            <li><a href="#" className="Fotter_nrj-nav-link">Our Customers</a></li>
            <li><a href="#" className="Fotter_nrj-nav-link">Indusries</a></li>
            <li><a href="#" className="Fotter_nrj-nav-link">Gallery</a></li>
            <li><a href="#" className="Fotter_nrj-nav-link">Career</a></li>
            <li><a href="#talkToExpert" className="Fotter_nrj-nav-link">Contact us</a></li>
          </ul>
        </div>

        <div className="Fotter_nrj-col">
          <h3 className="Fotter_nrj-col-heading">Know More About</h3>
          <ul className="Fotter_nrj-nav-list">
    <li><a href="#" className="Fotter_nrj-nav-link">Overview</a></li>
    <li><a href="#" className="Fotter_nrj-nav-link">Director's Message</a></li>
    <li><a href="#" className="Fotter_nrj-nav-link">Mission &amp; Vision</a></li>
    <li><a href="#" className="Fotter_nrj-nav-link">Our Team</a></li>
    <li><a href="#" className="Fotter_nrj-nav-link">Awards &amp; Achievements</a></li>
    <li><a href="#" className="Fotter_nrj-nav-link">Quality &amp; Certifications</a></li>
    <li><a href="#" className="Fotter_nrj-nav-link">Our Infrastructure</a></li>
</ul>
        </div>

        <div className="Fotter_nrj-col">
          <h3 className="Fotter_nrj-col-heading">Products</h3>
          <ul className="Fotter_nrj-products-list">
    <li className="Fotter_nrj-prod-item">
        <a href="#automotive-lock-components" className="Fotter_nrj-prod-title">Automotive Lock Components</a>
        <span className="Fotter_nrj-prod-sub">Precision components for automotive locking systems</span>
    </li>
    <li className="Fotter_nrj-prod-item">
        <a href="#auto-electrical-alternator-parts" className="Fotter_nrj-prod-title">Auto Electrical Alternator Parts</a>
        <span className="Fotter_nrj-prod-sub">Reliable components for automotive alternator systems</span>
    </li>
    <li className="Fotter_nrj-prod-item">
        <a href="#auto-electrical-starter-parts" className="Fotter_nrj-prod-title">Auto Electrical Starter Parts</a>
        <span className="Fotter_nrj-prod-sub">High-performance parts for automotive starter systems</span>
    </li>
    <li className="Fotter_nrj-prod-item">
        <a href="#automotive-steering-components" className="Fotter_nrj-prod-title">Automotive Steering Components</a>
        <span className="Fotter_nrj-prod-sub">Precision parts for safe and reliable steering systems</span>
    </li>
    <li className="Fotter_nrj-prod-item">
        <a href="#washing-machine-parts" className="Fotter_nrj-prod-title">Washing Machine Parts</a>
        <span className="Fotter_nrj-prod-sub">Durable components for washing machine applications</span>
    </li>
    <li className="Fotter_nrj-prod-item">
        <a href="#mcb-switch-gear-parts" className="Fotter_nrj-prod-title">MCB &amp; Switchgear Parts</a>
        <span className="Fotter_nrj-prod-sub">Precision parts for electrical protection systems</span>
    </li>
    <li className="Fotter_nrj-prod-item">
        <a href="#speedometer" className="Fotter_nrj-prod-title">Speedometer Components</a>
        <span className="Fotter_nrj-prod-sub">Precision components for accurate speed measurement</span>
    </li>
    <li className="Fotter_nrj-prod-item">
        <a href="#" className="Fotter_nrj-prod-title">Oil Gauge Meter Components</a>
        <span className="Fotter_nrj-prod-sub">Reliable parts for oil level measurement systems</span>
    </li>
</ul>
        </div>

      </div>

      <div className="Fotter_nrj-bottom-bar">
        <p className="Fotter_nrj-copyright">
    &copy; 2026 <strong>Apex Ignite Solution Pvt. Ltd.</strong>. All Rights Reserved. Designed By 
    <a href="https://omsoftsolution.com/" aria-label="Designed By" className="designLogo"> Om Soft Solution
        <img src={ossLogo} alt="Designed By OSS" />
    </a>
    | Assessment Task - Aashish
</p>

        <div className="Fotter_nrj-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>

    </div>
  </footer>

  <a href="#" className="Fotter_nrj-back-to-top" id="Fotter_nrj-back-to-top" title="Back to top" aria-label="Back to top">
    <i className="fa-solid fa-arrow-up"></i>
  </a>

<div className="sticky-social">
    <a href="mailto:info@apexignite.com" className="social-icon email">
        <div className="icon-base"></div>
        <div className="icon-face"><img decoding="async" src={emailIcon} alt="Email" className="icon-image" /></div>
        <div className="number-display">info@apexignite.com</div>
    </a>
    <a href="https://wa.me/9313019779?text=Hello!%20I%20would%20like%20to%20get%20in%20touch." target="_blank" className="social-icon whatsapp">
        <div className="icon-base"></div>
        <div className="icon-face"><img decoding="async" src={whatsappIcon} alt="WhatsApp" className="icon-image" /></div>
        <div className="number-display">+91-9313019779</div>
    </a>
    <a href="tel:+91-9457437879" className="social-icon call">
        <div className="icon-base"></div>
        <div className="icon-face"><img decoding="async" src={callIcon} alt="Call" className="icon-image" /></div>
        <div className="number-display">+91-9313019779</div>
    </a>
</div>

    </>
  );
}
