import './IndustriesSection.css';
import React from 'react';
import { motorbike, atv, steeringWheel, backhoeLoader, circuitBreaker, apexLogo, washingMachineIcon, starter, electricMotor, battery, engineeringComponent } from '../../constants/image';

export default function IndustriesSection() {
  return (
<section className="indstry-Srv_sec ptb">
    <div className="container w-100">
        <div className="secHeadrNrjbdf-wrapper mb-4">
            <div className="secHeadrNrjbdf-container">
                <div className="secHeadrNrjbdf-row">

                    <div className="secHeadrNrjbdf-left">
                        <div className="whYCHosee_NRJ_label whYCHosee_NRJ_reveal whYCHosee_NRJ_active" data-whychosee-delay="0" style={{ '--whychosee-delay': '0ms' }}>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span className="whYCHosee_NRJ_label_text">Industries We Serve</span>
                </div>
                        <h2 className="secHeadrNrjbdf-title text-white">Precision Plastic Solutions Across Diverse
                            Industries</h2>
                    </div>

                    <div className="secHeadrNrjbdf-right">
                        <p className="secHeadrNrjbdf-desc text-white">From concept and mold design to precision injection
                            molding and component finishing, we provide reliable manufacturing solutions that meet the
                            demanding requirements of diverse industries with quality, flexibility, and advanced
                            in-house capabilities.</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="chitkara-hex-section">
            <div className="chitkara-hex-container">
                <div className="chitkara-hex-grid" id="chitkara-hex-grid">

                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0s' }}>
                        <div className="chitkara-hex-item">
                            <img decoding="async" className="chitkara-hex-icon" src={motorbike}
                                alt="Automotive" />

                            <span className="chitkara-hex-title">Automotive</span>
                        </div>
                    </div>

                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0.1s' }}>
                        <div className="chitkara-hex-item">
                            <img decoding="async" className="chitkara-hex-icon" src={atv}
                                alt="Two Wheeler" />

                            <span className="chitkara-hex-title">ATV - Automotive</span>
                        </div>
                    </div>

                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0.2s' }}>
                        <div className="chitkara-hex-item">
                            <img decoding="async" className="chitkara-hex-icon" src={steeringWheel}
                                alt="4 Wheeler Steering Parts" />

                            <span className="chitkara-hex-title">4 Wheeler Steering Parts</span>
                        </div>
                    </div>

                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0.3s' }}>
                        <div className="chitkara-hex-item">
                            <img decoding="async" className="chitkara-hex-icon" src={backhoeLoader} alt="JCB Crane" />

                            <span className="chitkara-hex-title">JCB Crane</span>
                        </div>
                    </div>

                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0.4s' }}>
                        <div className="chitkara-hex-item">
                            <img decoding="async" className="chitkara-hex-icon" src={circuitBreaker}
                                alt="MCB Parts" />

                            <span className="chitkara-hex-title">MCB Parts</span>
                        </div>
                    </div>
                    
                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0.5s' }}>
                        <div className="chitkara-hex-item chitkara-hex-item--logo">
                            <img decoding="async" className="chitkara-hex-icon"
                                src={apexLogo} alt="Apex Ignite" />
                        </div>
                    </div>
                    
                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0s' }}>
                        <div className="chitkara-hex-item">

                            <img decoding="async" className="chitkara-hex-icon" src={washingMachineIcon}
                                alt="Washing Machine Parts" />

                            <span className="chitkara-hex-title">
                                Washing Machine Parts
                            </span>

                        </div>
                    </div>

                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0.1s' }}>
                        <div className="chitkara-hex-item">

                            <img decoding="async" className="chitkara-hex-icon" src={starter}
                                alt="Starter Motors" />

                            <span className="chitkara-hex-title">
                                Starter Motors
                            </span>

                        </div>
                    </div>

                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0.2s' }}>
                        <div className="chitkara-hex-item">

                            <img decoding="async" className="chitkara-hex-icon" src={electricMotor}
                                alt="Alternator Motors" />

                            <span className="chitkara-hex-title">
                                Alternator Motors
                            </span>

                        </div>
                    </div>

                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0.3s' }}>
                        <div className="chitkara-hex-item">

                            <img decoding="async" className="chitkara-hex-icon" src={battery}
                                alt="Electrical Components" />

                            <span className="chitkara-hex-title">
                                Electrical Components
                            </span>

                        </div>
                    </div>

                    <div className="chitkara-hex-wrap is-visible" style={{ transitionDelay: '0.4s' }}>
                        <div className="chitkara-hex-item">

                            <img decoding="async" className="chitkara-hex-icon" src={engineeringComponent}
                                alt="Engineering Components" />

                            <span className="chitkara-hex-title">
                                Engineering Components
                            </span>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
  );
}
