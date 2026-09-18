import './WhyChooseUs.css';
import React from 'react';
import { whyChooseUs } from '../../constants/image';

export default function WhyChooseUs() {
  return (
<section className="whYCHosee_NRJ_section" id="whYCHosee_NRJ_section">

    <div className="whYCHosee_NRJ_container">

        <div className="whYCHosee_NRJ_top">

            <div className="whYCHosee_NRJ_left">
                <div className="whYCHosee_NRJ_label whYCHosee_NRJ_reveal" data-whychosee-delay="0">
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span className="whYCHosee_NRJ_label_text">WHY CHOOSE US</span>
                </div>

                <h2 className="whYCHosee_NRJ_heading whYCHosee_NRJ_reveal" data-whychosee-delay="100">
                    Advanced Thermoplastic Injection Molding & Precision Plastic Manufacturing
                </h2>
            </div>

            <div className="whYCHosee_NRJ_right whYCHosee_NRJ_reveal" data-whychosee-delay="200">
                <div className="whYCHosee_NRJ_image_wrap">
                    <img src={whyChooseUs} alt="Why Choose Us" loading="lazy" />
                </div>
            </div>

        </div>

        <div className="whYCHosee_NRJ_cards">

            <div className="whYCHosee_NRJ_card whYCHosee_NRJ_reveal" data-whychosee-delay="0">
                <div className="whYCHosee_NRJ_card_num">
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span>01</span>
                </div>
                <h3 className="whYCHosee_NRJ_card_title">Certified <br />Quality</h3>
                <div className="whYCHosee_NRJ_card_line"></div>
                <p className="whYCHosee_NRJ_card_desc">
                   TS-16949:2016 certified manufacturing focused on quality thermoplastic injection molded components.
                </p>
            </div>

            <div className="whYCHosee_NRJ_card whYCHosee_NRJ_reveal" data-whychosee-delay="100">
                <div className="whYCHosee_NRJ_card_num">
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span>02</span>
                </div>
                <h3 className="whYCHosee_NRJ_card_title">In-House Tooling <br />& Design</h3>
                <div className="whYCHosee_NRJ_card_line"></div>
                <p className="whYCHosee_NRJ_card_desc">
                    Own tool making facility with dedicated 2D & 3D mold design capabilities.
                </p>
            </div>

            <div className="whYCHosee_NRJ_card whYCHosee_NRJ_reveal" data-whychosee-delay="200">
                <div className="whYCHosee_NRJ_card_num">
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span>04</span>
                </div>
                <h3 className="whYCHosee_NRJ_card_title">Advanced <br />Machinery</h3>
                <div className="whYCHosee_NRJ_card_line"></div>
                <p className="whYCHosee_NRJ_card_desc">
                    18 horizontal and 2 vertical automatic injection molding machines from 50 to 350 tons.
                </p>
            </div>

            <div className="whYCHosee_NRJ_card whYCHosee_NRJ_reveal" data-whychosee-delay="300">
                <div className="whYCHosee_NRJ_card_num">
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span>03</span>
                </div>
                <h3 className="whYCHosee_NRJ_card_title">Complete Manufacturing <br />Support</h3>
                <div className="whYCHosee_NRJ_card_line"></div>
                <p className="whYCHosee_NRJ_card_desc">
                   Injection molding, a wide range of thermoplastic materials and ultrasonic welding under one roof.
                </p>
            </div>

        </div>

        <div className="whyCAbout mt-5">
            <p className="p-0 text-white text-cnter fs-3">At Apex Ignite Solutions Pvt. Ltd., we combine advanced thermoplastic injection molding technology, in-house tooling expertise and dedicated quality processes to deliver precision-engineered plastic components. Our focus on quality, cost, delivery and service enables us to provide reliable manufacturing solutions tailored to diverse customer requirements.</p>
        </div>

    </div>

</section>
  );
}
