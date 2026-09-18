import './ProcessSection.css';
import React from 'react';

export default function ProcessSection() {
  return (
<section className="process ptb">
    <div className="container">
        <div className="heading mb-lg-4 mb-md-5 md-sm-4 mb-4">
            <div className="onBg_whiete_nrJ whYCHosee_NRJ_label whYCHosee_NRJ_reveal whYCHosee_NRJ_active mb-3" data-whychosee-delay="0" style={{ '--whychosee-delay': '0ms' }}>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span className="whYCHosee_NRJ_label_text">Frequently Asked Questions</span>
            </div>
            <h2 className="faq_nrj_main_title fs-2">Ensuring quality, precision and reliability at every stage.</h2>
        </div>
        <div className="row g-5">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                <div className="flow-item">
                    <div className="number">
                        <span className="d-block">01</span>
                        <label className="text-uppercase">Step</label>
                    </div>
                    <div className="process-text">
                        <h4 className="mb-2">Finished Goods Store</h4>
                        <p className="m-0">Properly organized storage for finished products, ensuring safe handling, quality preservation and efficient dispatch.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                <div className="flow-item">
                    <div className="number">
                        <span className="d-block">02</span>
                        <label className="text-uppercase">Step</label>
                    </div>
                    <div className="process-text">
                        <h4 className="mb-2">Injection Moulding & Die Storage</h4>
                        <p className="m-0">Dedicated facilities for secure storage and systematic management of injection moulding tools, dies and related components.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="750">
                <div className="flow-item">
                    <div className="number">
                        <span className="d-block">03</span>
                        <label className="text-uppercase">Step</label>
                    </div>
                    <div className="process-text">
                        <h4 className="mb-2">Moulding Facilities</h4>
                        <p className="m-0">Well-equipped moulding facilities designed to support precision manufacturing, consistent production and reliable product quality.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="1000">
                <div className="flow-item">
                    <div className="number">
                        <span className="d-block">04</span>
                        <label className="text-uppercase">Step</label>
                    </div>
                    <div className="process-text">
                        <h4 className="mb-2">Tool Room & Die Storage</h4>
                        <p className="m-0">A dedicated tool room with organized die storage facilities for easy access, maintenance and efficient production operations.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
