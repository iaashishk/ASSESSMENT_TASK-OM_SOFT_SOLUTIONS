import './AboutUsSection.css';
import React from 'react';
import { aboutCompanyImage } from '../../constants/image';

export default function AboutUsSection() {
  return (
<section className="abyt_us_sec d-none">
    <div className="container">
   
        <div className="abouts-dasja">
        
        <div className="abouts-dasja__grid">
        
            <div className="abouts-dasja__images">
        
            <div className="abouts-dasja__img-back aos-animate" data-aos="fade-right" data-delay="100" id="abouts-back-wrap" style={{ transitionDelay: '0.1s' }}>
                <img decoding="async" loading="lazy" id="abouts-parallax-img" src={aboutCompanyImage} alt="Textile factory floor with colorful yarn spools" style={{ transform: 'translate3d(0px, -3.155px, 0px) scale3d(1.02, 1.02, 1)' }} />
            </div>
        
            <div className="abouts-dasja__stat-card aos-animate" data-aos="fade-in" data-delay="350" style={{ transitionDelay: '0.35s' }}>
                <div className="abouts-dasja__stat-star">⭐</div>
                <div className="abouts-dasja__stat-info">
                <div className="abouts-dasja__stat-rating">
                    4.9 <sup>(Ratings)</sup>
                </div>
                <div className="abouts-dasja__stat-reviews">1K+ Reviews On Trustpilot</div>
                </div>
                <div className="abouts-dasja__stat-avatars">
                <span className="av1">A</span>
                <span className="av2">B</span>
                <span className="av3">C</span>
                </div>
            </div>
        
            </div>
        
            <div className="abouts-dasja__content">
        
            <div className="abouts-dasja__label aos-animate" data-aos="fade-up" data-delay="100" style={{ transitionDelay: '0.1s' }}>
                About Our Company
            </div>
        
            <h2 className="abouts-dasja__heading aos-animate" data-aos="fade-up" data-delay="150" style={{ transitionDelay: '0.15s' }}>
            Creating Unforgettable Experiences Since 2001
            </h2>
        
        <p className="abouts-dasja__desc aos-animate mb-1" data-aos="fade-up" data-delay="200" style={{ transitionDelay: '0.2s' }}>
        Established in 2001, The Melody Makers as a parent company has grown into a distinctive name in event management services &amp; introduced <strong>Plan ur Occasion</strong> to provide end to end event management services which includes theme based decorations for weddings &amp; corporate events, entertainment solutions which includes artist management services &amp; their technical requirements pertaining to the event. Over the years, we have created memorable experiences for weddings, anniversaries, personal celebrations, parties, and corporate events.
        </p>
            <p className="abouts-dasja__desc aos-animate mb-1" data-aos="fade-up" data-delay="200" style={{ transitionDelay: '0.2s' }}>
        Our work combines creative décor, thoughtful planning, entertainment, and professional execution to transform every occasion into a memorable celebration. From elegant flower arrangements and customized décor to complete event planning and entertainment solutions, we focus on bringing every client’s vision to life.
        </p>
        <p className="abouts-dasja__desc aos-animate" data-aos="fade-up" data-delay="200" style={{ transitionDelay: '0.2s' }}>
            With years of experience in the event and hospitality industry, The Melody Makers has successfully executed events at some of the well-known venues and hotels across Delhi NCR and surrounding locations.
        </p>
        
            <div className="abouts-dasja__cta-row aos-animate" data-aos="fade-up" data-delay="400" style={{ transitionDelay: '0.4s' }}>
                <a href="https://planuroccasion.omsoftsolution.net.in/about-us" className="hyway-btn-nrj" id="hyway-btn-nrj-1">
                <span className="hyway-btn-nrj-text">Read More</span>
                <span className="hyway-btn-nrj-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4136 4.00537C12.7972 5.62171 9.79027 5.56101 8.10589 3.87663L7.41529 3.18603L6.08933 4.51199L6.77994 5.20259C8.00506 6.42772 9.67003 7.06108 11.3234 7.09551L3.14295 15.276L4.52416 16.6572L12.7047 8.47672C12.7391 10.1301 13.3724 11.7951 14.5976 13.0202L15.2882 13.7108L16.6141 12.3849L15.9235 11.6943C14.2391 10.0099 14.1785 7.00291 15.7948 5.38657L16.4578 4.72359L15.0766 3.34239L14.4136 4.00537Z"></path>
                    </svg>
                </span>
                <span className="hyway-btn-nrj-bubble" style={{ transition: 'width 0.4s, height 0.4s', left: '96.1406px', top: '54.2969px', width: '0px', height: '0px' }}></span>
            </a>
        
                <div className="abouts-dasja__phone">
                <div className="abouts-dasja__phone-icon">
                    <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                    <div className="abouts-dasja__phone-label">Need Any Help?</div>
                <a href="tel:9999923383" className="abouts-dasja__phone-number">
            +91-9999923383
        </a>
                </div>
                </div>
            </div>
        
            </div>
        </div>
        </div>
     
    </div>
</section>
  );
}
