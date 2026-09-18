import './WelcomeBanner.css';
import React from 'react';
import { teamMeeting, laptop, collaboration, keyboard, notebook } from '../../constants/image';

export default function WelcomeBanner() {
  return (
<section className="BlogBannerDevnexus-wrapper ptb">
    
    <div className="BlogBannerDevnexus-content">
        <h2 className="BlogBannerDevnexus-title animate-fade-up">Welcome to Apex Ignite Solutions Pvt. Ltd.</h2>
        <p className="BlogBannerDevnexus-subtitle animate-fade-up animate-delay-1"> We have an <span className="highlight">in-house tool-making facility</span> and a dedicated design section for precision mold development, with <span className="highlight">2D &amp; 3D design capabilities</span>. Our facility includes <span className="highlight">18 horizontal and 2 vertical automatic injection molding machines</span>, ranging from <span className="highlight">50 to 350 tons</span>. We also offer <span className="highlight">ultrasonic welding of plastic components</span> and work with a wide range of <span className="highlight">thermoplastic materials</span> to manufacture quality precision components.</p>
    </div>

    <div className="BlogBannerDevnexus-gallery">
        <div className="BlogBannerDevnexus-gallery-item BlogBannerDevnexus-item-1 animate-left">
            <div className="BlogBannerDevnexus-img-wrapper BlogBannerDevnexus-img-1">
                <img src={teamMeeting} alt="Team meeting" />
            </div>
        </div>
        <div className="BlogBannerDevnexus-gallery-item BlogBannerDevnexus-item-2 animate-left animate-delay-1">
            <div className="BlogBannerDevnexus-img-wrapper BlogBannerDevnexus-img-2">
                <img src={laptop} alt="Working on laptop" />
            </div>
        </div>
        <div className="BlogBannerDevnexus-gallery-item BlogBannerDevnexus-item-3 animate-zoom">
            <div className="BlogBannerDevnexus-img-wrapper BlogBannerDevnexus-img-3">
                <img src={collaboration} alt="People collaborating" />
            </div>
        </div>
        <div className="BlogBannerDevnexus-gallery-item BlogBannerDevnexus-item-4 animate-right animate-delay-1">
            <div className="BlogBannerDevnexus-img-wrapper BlogBannerDevnexus-img-4">
                <img src={keyboard} alt="Typing on keyboard" />
            </div>
        </div>
        <div className="BlogBannerDevnexus-gallery-item BlogBannerDevnexus-item-5 animate-right animate-delay-2">
            <div className="BlogBannerDevnexus-img-wrapper BlogBannerDevnexus-img-5">
                <img src={notebook} alt="Notebook and pen" />
            </div>
        </div>
    </div>
</section>
  );
}
