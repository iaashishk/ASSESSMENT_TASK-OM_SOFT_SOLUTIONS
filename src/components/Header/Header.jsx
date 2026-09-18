import './Header.css';
import React from 'react';
import { apexLogo, overview, directorImage, missionVision, footerBackground, awards, qualityTools, infrastructure, lockComponent, alternatorParts, starterParts, steeringImage, washingMachine, mcbHeader, speedometerHeader, oilGauge } from '../../constants/image';

export default function Header() {
  return (
    <>
<div className="nrj_Header-topbar" id="nrj_Header-topbar">
  <div className="nrj_Header-container nrj_Header-topbar-inner">
    <div className="nrj_Header-topbar-left">
      <span className="nrj_Header-topbar-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg> ISO/TS 16949:2016 Certified</span>
      <span className="nrj_Header-sep">|</span>
      <span className="nrj_Header-topbar-item">Quality &bull; Cost &bull; Delivery &bull; Service</span>
    </div>
    <div className="nrj_Header-topbar-right">
      <a href="mailto:info@apexignite.com" className="nrj_Header-link">info@apexignite.com</a>
      <span className="nrj_Header-sep">|</span>
      <a href="tel:+911204567890" className="nrj_Header-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
          </path>
        </svg> +91 120 456 7890</a>
      <span className="nrj_Header-sep">|</span>
   <div className=" nrj_Header-topbar-socials">
        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="#" aria-label="Google Plus"><i className="fa-brands fa-google-plus-g"></i></a>
        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
    </div>
  </div>
</div>
</div>

<header className="nrj_Header" id="headeriD-NRJ">
  <div className="nrj_Header-container nrj_Header-main-inner" style={{ position: 'relative' }}>

    <a href="./" className="nrj_Header-logo">
      <img src={apexLogo} alt="Apex Ignite" className="nrj_Header-logo-img" />
    </a>

    <nav className="nrj_Header-nav">
      <ul className="nrj_Header-nav-list">
        <li><a href="./" className="nrj_Header-nav-link">Home</a></li>

        <li className="nrj_Header-has-mega">
          <a href="#whYCHosee_NRJ_section" className="nrj_Header-nav-link active">About <span className="nrj_Header-arrow">&#9662;</span></a>

          <div className="nrj_Header-mega-menu nrj_Header-mega-about">
            <div className="nrj_Header-mega-about-inner">

              <div className="nrj_Header-about-left">
                <span className="nrj_Header-eyebrow">KNOW MORE ABOUT</span>
                <h2>Apex Ignite<br />Solutions Pvt. Ltd.</h2>
                <div className="nrj_Header-line"></div>
                <p>Driven by innovation, committed<br />to quality, and built on trust.</p>
                <div className="nrj_Header-badges">
                  <div className="nrj_Header-badge">
                    <div className="nrj_Header-badge-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#0284c7" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg></div><span>Experienced<br />Team</span>
                  </div>
                  <div className="nrj_Header-badge">
                    <div className="nrj_Header-badge-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#0284c7" strokeWidth="2">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg></div><span>Quality<br />Driven</span>
                  </div>
                  <div className="nrj_Header-badge">
                    <div className="nrj_Header-badge-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#0284c7" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                        <polyline points="2 6 8 6 12 10 22 10"></polyline>
                      </svg></div><span>Customer<br />Focused</span>
                  </div>
                </div>
              </div>

              <div className="nrj_Header-about-middle">
                <ul className="nrj_Header-mega-links">
                  <li className="nrj_Header-mega-link-item" data-img={overview}>
                    <div className="nrj_Header-link-content">
                      <div className="nrj_Header-link-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                          stroke="#0284c7" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg></div>
                      <div className="nrj_Header-link-text">
                        <strong>Overview</strong>
                        <span>Our journey, values and what we do</span>
                      </div>
                    </div>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-mega-link-item" data-img={directorImage}>
                    <div className="nrj_Header-link-content">
                      <div className="nrj_Header-link-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                          stroke="#0284c7" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg></div>
                      <div className="nrj_Header-link-text">
                        <strong>Director's Message</strong>
                        <span>Leadership insights and vision</span>
                      </div>
                    </div>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-mega-link-item" data-img={missionVision}>
                    <div className="nrj_Header-link-content">
                      <div className="nrj_Header-link-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                          stroke="#0284c7" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg></div>
                      <div className="nrj_Header-link-text">
                        <strong>Mission & Vision</strong>
                        <span>Our purpose and future goals</span>
                      </div>
                    </div>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-mega-link-item" data-img={footerBackground}>
                    <div className="nrj_Header-link-content">
                      <div className="nrj_Header-link-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                          stroke="#0284c7" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg></div>
                      <div className="nrj_Header-link-text">
                        <strong>Our Team</strong>
                        <span>Meet the people behind our success</span>
                      </div>
                    </div>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-mega-link-item" data-img={awards}>
                    <div className="nrj_Header-link-content">
                      <div className="nrj_Header-link-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                          stroke="#0284c7" strokeWidth="2">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
                        </svg></div>
                      <div className="nrj_Header-link-text">
                        <strong>Awards & Achievements</strong>
                        <span>Recognition of our excellence</span>
                      </div>
                    </div>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-mega-link-item" data-img={qualityTools}>
                    <div className="nrj_Header-link-content">
                      <div className="nrj_Header-link-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                          stroke="#0284c7" strokeWidth="2">
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg></div>
                      <div className="nrj_Header-link-text">
                        <strong>Quality & Certifications</strong>
                        <span>Our commitment to global standards</span>
                      </div>
                    </div>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-mega-link-item" data-img={infrastructure}>
                    <div className="nrj_Header-link-content">
                      <div className="nrj_Header-link-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                          stroke="#0284c7" strokeWidth="2">
                          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                          <line x1="9" y1="22" x2="15" y2="22"></line>
                          <line x1="12" y1="6" x2="12" y2="6.01"></line>
                          <line x1="12" y1="10" x2="12" y2="10.01"></line>
                          <line x1="12" y1="14" x2="12" y2="14.01"></line>
                          <line x1="12" y1="18" x2="12" y2="18.01"></line>
                        </svg></div>
                      <div className="nrj_Header-link-text">
                        <strong>Our Infrastructure</strong>
                        <span>World-class facilities and capabilities</span>
                      </div>
                    </div>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                </ul>
              </div>

              <div className="nrj_Header-about-right">
                <div className="nrj_Header-image-preview">
                  <img
                    src={overview}
                    alt="Preview" id="nrj_Header-about-img" loading="lazy" />
                  <div className="nrj_Header-image-overlay">
                    <p className="nrj_Header-img-text-top">BUILDING<br />A STRONGER<br />TOMORROW</p>
                    <div className="nrj_Header-image-bottom">
                      <div className="nrj_Header-line-small"></div>
                      <p id="nrj_Header-about-caption">Advanced Manufacturing<br />for a Better Tomorrow</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </li>

        <li className="nrj_Header-has-mega">
          <a href="#NRJProduTT_Call" className="nrj_Header-nav-link">Products <span className="nrj_Header-arrow">&#9662;</span></a>

          <div className="nrj_Header-mega-menu nrj_Header-mega-products">
            <div className="nrj_Header-mega-products-inner">

              <div className="nrj_Header-prod-col nrj_Header-prod-col-1">
                <h4>Products</h4>
                <ul className="nrj_Header-prod-list">
                  <li className="nrj_Header-prod-item" data-img={lockComponent}>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg> Automotive Lock Components
                    </a>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-prod-item" data-img={alternatorParts}>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                      </svg> Auto Electrical Alternator Parts
                    </a>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-prod-item" data-img={starterParts}>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                      </svg> Auto Electrical Starter Parts
                    </a>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-prod-item" data-img={steeringImage}>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                        <line x1="12" y1="2" x2="12" y2="8"></line>
                        <line x1="12" y1="16" x2="12" y2="22"></line>
                        <line x1="2" y1="12" x2="8" y2="12"></line>
                        <line x1="16" y1="12" x2="22" y2="12"></line>
                      </svg> Automotive Steering Components
                    </a>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-prod-item" data-img={washingMachine}>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <circle cx="12" cy="14" r="4"></circle>
                        <line x1="8" y1="6" x2="16" y2="6"></line>
                      </svg> Washing Machine Parts
                    </a>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-prod-item" data-img={mcbHeader}>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg> MCB & Switchgear Parts
                    </a>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-prod-item" data-img={speedometerHeader}>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg> Speedometer Components
                    </a>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                  <li className="nrj_Header-prod-item" data-img={oilGauge}>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg> Oil Gauge Meter Components
                    </a>
                    <span className="nrj_Header-chevron">&rsaquo;</span>
                  </li>
                </ul>
              </div>

              <div className="nrj_Header-prod-col nrj_Header-prod-col-2">
                <h4>Business Challenges</h4>
                <div className="nrj_Header-challenges">
                  <div className="nrj_Header-challenge-item">
                    <div className="nrj_Header-ch-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#0284c7" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                      </svg></div>
                    <div>
                      <strong>Improving Product Durability</strong>
                      <p>Meeting higher performance standards in demanding conditions.</p>
                    </div>
                  </div>
                  <div className="nrj_Header-challenge-item">
                    <div className="nrj_Header-ch-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#0284c7" strokeWidth="2">
                        <path d="M12 20V10"></path>
                        <path d="M18 20V4"></path>
                        <path d="M6 20v-4"></path>
                      </svg></div>
                    <div>
                      <strong>Cost Optimization</strong>
                      <p>Delivering quality while maintaining competitive pricing.</p>
                    </div>
                  </div>
                  <div className="nrj_Header-challenge-item">
                    <div className="nrj_Header-ch-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#0284c7" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg></div>
                    <div>
                      <strong>Faster Time-to-Market</strong>
                      <p>Supporting quick product development and delivery cycles.</p>
                    </div>
                  </div>
                  <div className="nrj_Header-challenge-item">
                    <div className="nrj_Header-ch-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#0284c7" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <polyline points="9 12 11 14 15 10"></polyline>
                      </svg></div>
                    <div>
                      <strong>Meeting Regulatory Standards</strong>
                      <p>Ensuring compliance with global automotive and industrial norms.</p>
                    </div>
                  </div>
                  <div className="nrj_Header-challenge-item">
                    <div className="nrj_Header-ch-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#0284c7" strokeWidth="2">
                        <path
                          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                        </path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg></div>
                    <div>
                      <strong>Reliable Supply Chain</strong>
                      <p>Consistent availability and on-time deliveries.</p>
                    </div>
                  </div>
                  <div className="nrj_Header-challenge-item">
                    <div className="nrj_Header-ch-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#0284c7" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg></div>
                    <div>
                      <strong>Innovation & Customization</strong>
                      <p>Developing specialized solutions for evolving industry needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nrj_Header-prod-col nrj_Header-prod-col-3">
                <h4>Industry Focus</h4>
                <div className="nrj_Header-industry-grid">
                  <div className="nrj_Header-ind-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>Automotive</span>
                  </div>
                  <div className="nrj_Header-ind-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                      <circle cx="12" cy="14" r="4"></circle>
                      <line x1="8" y1="6" x2="16" y2="6"></line>
                    </svg>
                    <span>Home<br />Appliances</span>
                  </div>
                  <div className="nrj_Header-ind-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                    <span>Electrical &<br />Switchgear</span>
                  </div>
                  <div className="nrj_Header-ind-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                      <circle cx="7" cy="17" r="3"></circle>
                      <circle cx="17" cy="17" r="3"></circle>
                      <line x1="14" y1="17" x2="10" y2="17"></line>
                      <path d="M7 14v-2.5C7 9.57 8.57 8 10.5 8h3C15.43 8 17 9.57 17 11.5V14"></path>
                    </svg>
                    <span>Two Wheeler</span>
                  </div>
                  <div className="nrj_Header-ind-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Instrumentation</span>
                  </div>
                  <div className="nrj_Header-ind-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                      <line x1="20" y1="9" x2="23" y2="9"></line>
                      <line x1="20" y1="14" x2="23" y2="14"></line>
                      <line x1="1" y1="9" x2="4" y2="9"></line>
                      <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                    <span>Industrial<br />Applications</span>
                  </div>
                  <div className="nrj_Header-ind-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    <span>Consumer<br />Durables</span>
                  </div>
                  <div className="nrj_Header-ind-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>Safety &<br />Security</span>
                  </div>
                  <div className="nrj_Header-ind-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                      </path>
                    </svg>
                    <span>Custom<br />Solutions</span>
                  </div>
                </div>
                <a href="#" className="nrj_Header-view-all">View All Industries</a>
              </div>

              <div className="nrj_Header-prod-col nrj_Header-prod-col-4">
                <div className="nrj_Header-image-preview">
                  <img
                    src={lockComponent}
                    alt="Preview" id="nrj_Header-prod-img" loading="lazy" />
                  <div className="nrj_Header-image-overlay"
                    style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.3) 40%)' }}>
                    <div className="nrj_Header-image-bottom">
                      <div className="nrj_Header-line-small" style={{ background: '#fff' }}></div>
                      <h3 id="nrj_Header-prod-caption"
                        style={{ color: '#fff', fontSize: '30px', fontWeight: '500', margin: '10px 0' }}>Precision<br />Plastic
                        Components<br />for a Better<br />Tomorrow</h3>
                      <a href="#" className="nrj_Header-explore-btn"><span className="nrj_Header-explore-icon"><i
                            className="fa-solid fa-arrow-right-long"></i></span>
                        Explore Our Products</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </li>

        <li><a href="#" className="nrj_Header-nav-link">Our Customers</a></li>
        <li><a href="#" className="nrj_Header-nav-link">Industries</a></li>
        <li><a href="#" className="nrj_Header-nav-link">Careers</a></li>
        <li><a href="#talkToExpert" className="nrj_Header-nav-link">Contact</a></li>
      </ul>
    </nav>

    <div className="nrj_Header-actions">
      
      <button className="nrj_Header-action-btn" id="nrj_Header-search-trigger" aria-label="Search">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

      <button className="nrj_Header-hamburger" id="nrj_Header-hamburger-trigger">
        <span></span><span></span><span></span>
      </button>

      <a href="#talkToExpert" className="nrj_Header-quote-btn">Get a Quote &rarr;</a>
    </div>
  </div>
</header>

<div className="nrj_Header-search-overlay" id="nrj_Header-search-overlay">
  <div className="nrj_Header-search-close-zone" id="nrj_Header-search-close-zone"></div>
  <div className="nrj_Header-search-container">
    <div className="nrj_Header-search-bar">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input type="text" placeholder="Type to search..." id="nrj_Header-search-input" />
      <button className="nrj_Header-search-close-btn" id="nrj_Header-search-close-btn">&times;</button>
    </div>
    <div className="nrj_Header-search-results" id="nrj_Header-search-results">
      <p style={{ color: '#475569', fontSize: '18px', marginTop: '20px', textAlign: 'center' }}>Start typing to see results...</p>
    </div>
  </div>
</div>

<div className="nrj_Header-drawer" id="nrj_Header-drawer">
  <div className="nrj_Header-drawer-backdrop" id="nrj_Header-drawer-backdrop"></div>
  <div className="nrj_Header-drawer-panel">
    <div className="nrj_Header-drawer-header">
      <img src={apexLogo} alt="Apex Ignite" style={{ height: '36px', width: 'auto' }} />
      <button className="nrj_Header-drawer-close" id="nrj_Header-drawer-close">&times;</button>
    </div>
    <div className="nrj_Header-drawer-body">

      <div className="nrj_Header-drawer-info-box"
        style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', border: '1px solid #bae6fd', padding: '20px', marginBottom: '25px' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--nrj-primary)', fontWeight: '500', fontSize: '16px', letterSpacing: '0.5px' }}>
          
          IATF & ISO/TS 16949 CERTIFIED
        </div>
        <p style={{ fontSize: '15px', color: 'var(--nrj-text)', lineHeight: '1.6', marginBottom: '10px' }}>
          Apex Ignite Solutions Pvt. Ltd. is a premier engineering solutions provider specializing in precision
          thermoplastic injection molding for automotive, switchgear, and consumer durable applications worldwide.
        </p>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '600', color: 'var(--nrj-muted)' }}>
          <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
          30+ Years of Manufacturing Reliability
        </div>
      </div>

      <div className="nrj_Header-drawer-contact" style={{ marginBottom: '30px' }}>
        <h5 style={{ fontSize: '18px', color: 'var(--nrj-primary)', fontWeight: '500', marginBottom: '15px', letterSpacing: '1px' }}>
          CORPORATE &
          PLANT OFFICE</h5>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--nrj-primary)" strokeWidth="2"
              style={{ flexShrink: '0', marginTop: '2px' }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span style={{ fontSize: '15px', color: 'var(--nrj-text)', lineHeight: '1.5' }}>Plot No. 42-B, Industrial Tech Zone
              IV, Greater Noida, Uttar Pradesh 201306, India</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--nrj-primary)" strokeWidth="2">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
              </path>
            </svg>
            <span style={{ fontSize: '15px', color: 'var(--nrj-text)' }}>
              <a href="tel:+01294056250" style={{ color: 'inherit', textDecoration: 'none' }}>+0129 -4056250</a><br />
              <a href="tel:+919313019779" style={{ color: 'inherit', textDecoration: 'none' }}>+91-9313019779</a><br />
              <a href="tel:+919811142144" style={{ color: 'inherit', textDecoration: 'none' }}>+91-9811142144</a><br />
              <a href="tel:+917290036516" style={{ color: 'inherit', textDecoration: 'none' }}>+91-7290036516</a>
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--nrj-primary)" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span style={{ fontSize: '15px', color: 'var(--nrj-text)' }}>
              <a href="mailto:info@apexignite.com" className="nrj_Header-link">info@apexignite.com</a>,
              <a href="mailto:info@apexignite.com" className="nrj_Header-link">info@apexignite.com</a>
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--nrj-primary)" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span style={{ fontSize: '15px', color: 'var(--nrj-text)' }}>Monday &ndash; Saturday: 08:30 AM &ndash; 06:30 PM
              (IST)</span>
          </div>
        </div>
      </div>

      <div className="nrj_Header-drawer-section">
        <h5 style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700', marginBottom: '15px', letterSpacing: '1px' }}>NAVIGATION
        </h5>
        <div className="nrj_Header-accordion-menu">
          <a href="#" className="nrj_Header-acc-link">Home</a>

          <div className="nrj_Header-acc-item">
            <button className="nrj_Header-acc-trigger">About <span>&#9662;</span></button>
            <div className="nrj_Header-acc-content">
              <a href="#">Overview</a>
              <a href="#">Director's Message</a>
              <a href="#">Mission & Vision</a>
              <a href="#">Our Team</a>
              <a href="#">Awards & Achievements</a>
              <a href="#">Quality & Certifications</a>
              <a href="#">Our Infrastructure</a>
            </div>
          </div>

          <div className="nrj_Header-acc-item">
            <button className="nrj_Header-acc-trigger">Products <span>&#9662;</span></button>
            <div className="nrj_Header-acc-content">
              <a href="#">Automotive Lock Components</a>
              <a href="#">Auto Electrical Alternator Parts</a>
              <a href="#">Auto Electrical Starter Parts</a>
              <a href="#">Automotive Steering Components</a>
              <a href="#">Washing Machine Parts</a>
              <a href="#">MCB & Switchgear Parts</a>
              <a href="#">Speedometer Components</a>
              <a href="#">Oil Gauge Meter Components</a>
            </div>
          </div>

          <a href="#" className="nrj_Header-acc-link">Our Customers</a>
          <a href="#" className="nrj_Header-acc-link">Industries</a>
          <a href="#" className="nrj_Header-acc-link">Careers</a>
          <a href="#" className="nrj_Header-acc-link">Contact</a>
        </div>
      </div>

      <div className="nrj_Header-drawer-form">
        <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#0f172a', marginBottom: '5px' }}>Request an Instant Quote /
          Inquiry</h4>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '20px' }}>Send your CAD drawings or component specifications
          directly to our engineering desk.</p>
        <form>
          <div className="nrj_Header-form-group">
            <label>FULL NAME *</label>
            <input type="text" placeholder="Your Name / Engineer" />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className="nrj_Header-form-group" style={{ flex: '1' }}>
              <label>WORK EMAIL *</label>
              <input type="email" placeholder="name@company.com" />
            </div>
            <div className="nrj_Header-form-group" style={{ flex: '1' }}>
              <label>PHONE NUMBER *</label>
              <input type="tel" placeholder="+91..." />
            </div>
          </div>
          <div className="nrj_Header-form-group">
            <label>COMPANY NAME</label>
            <input type="text" placeholder="Organization / OEM Name" />
          </div>
          <div className="nrj_Header-form-group">
            <label>COMPONENT REQUIREMENT & QUANTITY</label>
            <textarea
              placeholder="Specify part name, polymer material (PA66, ABS, PC), mold cavities, and annual volume..."
              rows="3"></textarea>
          </div>
          <button type="submit" className="nrj_Header-submit-btn"><svg width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg> Submit Engineering Inquiry</button>
        </form>
      </div>

    </div>
  </div>
</div>

    </>
  );
}
