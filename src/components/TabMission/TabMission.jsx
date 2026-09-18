import './TabMission.css';
import React from 'react';

export default function TabMission() {
  return (
<section className="NRJ-tabMission-section ptb pt-0">
    <div className="NRJ-tabMission" id="nrj-Tab">
        <div className="NRJ-tabMission-card">

            <div className="NRJ-tabMission-sidebar">
                <ul className="NRJ-tabMission-nav" role="tablist">

                    <li className="NRJ-tabMission-nav-item" role="presentation">
                        <button className="NRJ-tabMission-btn" data-tab-target="nrj-pane-achievements" type="button"
                            role="tab" aria-selected="false">
                            <span className="NRJ-tabMission-btn-text">Achievements</span>
                            <span className="NRJ-tabMission-arrow-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </li>

                    <li className="NRJ-tabMission-nav-item" role="presentation">
                        <button className="NRJ-tabMission-btn" data-tab-target="nrj-pane-mission" type="button" role="tab"
                            aria-selected="false">
                            <span className="NRJ-tabMission-btn-text">Our Mission</span>
                            <span className="NRJ-tabMission-arrow-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </li>

                    <li className="NRJ-tabMission-nav-item" role="presentation">
                        <button className="NRJ-tabMission-btn active" data-tab-target="nrj-pane-vision" type="button"
                            role="tab" aria-selected="true">
                            <span className="NRJ-tabMission-btn-text">Our Vision</span>
                            <span className="NRJ-tabMission-arrow-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </li>

                    <li className="NRJ-tabMission-nav-item" role="presentation">
                        <button className="NRJ-tabMission-btn" data-tab-target="nrj-pane-capabilities" type="button"
                            role="tab" aria-selected="false">
                            <span className="NRJ-tabMission-btn-text">Our Capabilities</span>
                            <span className="NRJ-tabMission-arrow-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </li>

                    <li className="NRJ-tabMission-nav-item" role="presentation">
                        <button className="NRJ-tabMission-btn" data-tab-target="nrj-pane-quality" type="button" role="tab"
                            aria-selected="false">
                            <span className="NRJ-tabMission-btn-text">Quality &amp; Commitment</span>
                            <span className="NRJ-tabMission-arrow-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </li>

                </ul>
            </div>

            <div className="NRJ-tabMission-content-wrap">

                <div className="NRJ-tabMission-pane" id="nrj-pane-achievements" role="tabpanel">
                    <div className="NRJ-tabMission-info">
                        <h3 className="NRJ-tabMission-heading">Quality Awards &amp; Customer Recognition</h3>
                        <p className="NRJ-tabMission-desc">
                            Quality award received from M/S Onida for achieving 100% quality and delivery performance.
                            We have also achieved a 100% vendor quality rating from M/S QH Talbros and serve as
                            direct-on-line suppliers to M/S Minda Corporation Ltd. and M/S Auto Ignition Ltd.
                        </p>
                        <ul className="NRJ-tabMission-checklist">
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Quality award received from M/S Onida for 100% quality and delivery performance
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                100% vendor quality rating certified by M/S QH Talbros
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Direct-on-line tier-1 supplier to M/S Minda Corporation Ltd.
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Strategic manufacturing supplier to M/S Auto Ignition Ltd.
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Rigorous zero-defect benchmark across all injection molding lines
                            </li>
                        </ul>
                        <a href="#contact" className="NRJ-tabMission-link">LEARN MORE</a>
                    </div>

                    <div className="NRJ-tabMission-stat-col">
                        <div className="NRJ-tabMission-stat-card">
                            <div className="NRJ-tabMission-ring">
                                <span className="NRJ-tabMission-ring-val">100%</span>
                                <span className="NRJ-tabMission-ring-arrow"><i className="fa-solid fa-arrow-up"></i></span>
                            </div>
                            <p className="NRJ-tabMission-stat-caption">
                                Quality &amp; Delivery Performance
                            </p>
                        </div>
                    </div>
                </div>

                <div className="NRJ-tabMission-pane" id="nrj-pane-mission" role="tabpanel">
                    <div className="NRJ-tabMission-info">
                        <h3 className="NRJ-tabMission-heading">Reliable Products. Continuous Improvement.</h3>
                        <p className="NRJ-tabMission-desc">
                            Our mission is to be a reliable supplier by delivering technically superior and commercially
                            viable products that meet and exceed customer expectations, while continuously improving our
                            quality management systems.
                        </p>
                        <ul className="NRJ-tabMission-checklist">
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Technically superior and commercially viable component design
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Continuous quality management system (QMS) upgrades
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Customer-first engineering aligning with strict delivery timelines
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Sustainable cost optimization without compromising structural integrity
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Long-term value creation through innovation and precision tooling
                            </li>
                        </ul>
                        <a href="#contact" className="NRJ-tabMission-link">LEARN MORE</a>
                    </div>

                    <div className="NRJ-tabMission-stat-col">
                        <div className="NRJ-tabMission-stat-card">
                            <div className="NRJ-tabMission-ring">
                                <span className="NRJ-tabMission-ring-val">QMS</span>
                                <span className="NRJ-tabMission-ring-arrow"><i className="fa-solid fa-arrow-up"></i></span>
                            </div>
                            <p className="NRJ-tabMission-stat-caption">
                                Continuous Improvement
                            </p>
                        </div>
                    </div>
                </div>

                <div className="NRJ-tabMission-pane active" id="nrj-pane-vision" role="tabpanel">
                    <div className="NRJ-tabMission-info">
                        <h3 className="NRJ-tabMission-heading">A Preferred Partner in Thermoplastic Manufacturing</h3>
                        <p className="NRJ-tabMission-desc">
                            Our vision is to become a preferred company in thermoplastic injection-molded components,
                            consistently meeting expectations for Quality, Cost, Delivery and Service, while expanding
                            across the plastic manufacturing sector.
                        </p>
                        <ul className="NRJ-tabMission-checklist">
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Commitment to QCDS: Quality, Cost, Delivery, and Service
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Strategic expansion across diversified plastic manufacturing sectors
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                High-tonnage automated thermoplastic injection molding systems
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Pioneering energy-efficient and recyclable polymer engineering
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Preferred global partner status for OEM manufacturing solutions
                            </li>
                        </ul>
                        <a href="#contact" className="NRJ-tabMission-link">LEARN MORE</a>
                    </div>

                    <div className="NRJ-tabMission-stat-col">
                        <div className="NRJ-tabMission-stat-card">
                            <div className="NRJ-tabMission-ring">
                                <span className="NRJ-tabMission-ring-val">4</span>
                                <span className="NRJ-tabMission-ring-arrow"><i className="fa-solid fa-award"></i></span>
                            </div>
                            <p className="NRJ-tabMission-stat-caption">
                                QCDS Priorities
                            </p>
                        </div>
                    </div>
                </div>

                <div className="NRJ-tabMission-pane" id="nrj-pane-capabilities" role="tabpanel">
                    <div className="NRJ-tabMission-info">
                        <h3 className="NRJ-tabMission-heading">Integrated Design &amp; Manufacturing</h3>
                        <p className="NRJ-tabMission-desc">
                            Our capabilities include in-house mold design and tool making, 2D &amp; 3D design, injection
                            molding and ultrasonic welding. With a broad range of thermoplastic expertise, we support
                            precision component manufacturing from design through production.
                        </p>
                        <ul className="NRJ-tabMission-checklist">
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                In-house mold design and tool making facilities
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Comprehensive 2D &amp; 3D CAD/CAM design &amp; engineering simulation
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                High-precision microprocessor injection molding
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Advanced ultrasonic welding and component assembly lines
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                End-to-end precision component support from design through production
                            </li>
                        </ul>
                        <a href="#contact" className="NRJ-tabMission-link">LEARN MORE</a>
                    </div>

                    <div className="NRJ-tabMission-stat-col">
                        <div className="NRJ-tabMission-stat-card">
                            <div className="NRJ-tabMission-ring">
                                <span className="NRJ-tabMission-ring-val">20</span>
                                <span className="NRJ-tabMission-ring-arrow"><i className="fa-solid fa-gear"></i></span>
                            </div>
                            <p className="NRJ-tabMission-stat-caption">
                                Molding Machines
                            </p>
                        </div>
                    </div>
                </div>

                <div className="NRJ-tabMission-pane" id="nrj-pane-quality" role="tabpanel">
                    <div className="NRJ-tabMission-info">
                        <h3 className="NRJ-tabMission-heading">Consistent Quality. Reliable Delivery.</h3>
                        <p className="NRJ-tabMission-desc">
                            We are committed to maintaining consistent product quality, reliable delivery and continuous
                            improvement. Our focus on precision, efficiency and customer satisfaction helps us build
                            strong, long-term relationships with our customers.
                        </p>
                        <ul className="NRJ-tabMission-checklist">
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Consistent product quality benchmarked against global standards
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Reliable delivery schedules with real-time dispatch monitoring
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Continuous Kaizen &amp; process optimization across manufacturing cycles
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                High-precision CMM, optical testing and batch traceability
                            </li>
                            <li className="NRJ-tabMission-check-item">
                                <span className="NRJ-tabMission-check-icon"><i className="fa-solid fa-check"></i></span>
                                Building strong, long-term relationships with our valued customers
                            </li>
                        </ul>
                        <a href="#contact" className="NRJ-tabMission-link">LEARN MORE</a>
                    </div>

                    <div className="NRJ-tabMission-stat-col">
                        <div className="NRJ-tabMission-stat-card">
                            <div className="NRJ-tabMission-ring">
                                <span className="NRJ-tabMission-ring-val">100%</span>
                                <span className="NRJ-tabMission-ring-arrow"><i className="fa-solid fa-shield-halved"></i></span>
                            </div>
                            <p className="NRJ-tabMission-stat-caption">
                                Quality &amp; Delivery Performance
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</section>
  );
}
