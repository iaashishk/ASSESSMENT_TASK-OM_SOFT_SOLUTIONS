import './ProductsSection.css';
import React from 'react';
import { lockComponent, alternatorProduct, starterProduct, steeringProduct, washingMachineProduct, mcbProduct, speedometerProduct, oilGauge } from '../../constants/image';

export default function ProductsSection() {
  return (
<section className="NRJ_prdicuts_section__spacer" id="NRJProduTT_Call">
    <div className="NRJ_prdicuts_section">

        <div className="NRJ_prdicuts_section__left">
            <div className="abouts-dasja__content">
                
                <div className="onBg_whiete_nrJ whYCHosee_NRJ_label whYCHosee_NRJ_reveal whYCHosee_NRJ_active" data-whychosee-delay="0" style={{ '--whychosee-delay': '0ms' }}>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span className="whYCHosee_NRJ_label_text">Our Products</span>
                </div>
            </div>

            <h2>Precision Plastic <em>Components</em> & Engineered Solutions </h2>
            <p>Explore our range of precision-engineered plastic components, manufactured using advanced injection
                molding technology and supported by in-house tool making, 2D & 3D mold design, and ultrasonic welding
                capabilities. We deliver reliable, high-quality components tailored to meet diverse industrial and
                application-specific requirements.</p>
            <a href="#" className="NRJ_btn_view_all open-popup-btn d-none" id="NRJopuporm_openBtn">
                Product Enquiry
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
        </div>

        <div className="NRJ_prdicuts_section__right">
            <div className="NRJ_right__bg_slide"></div>
            <div className="NRJ_products_track" id="NRJ_products_track">
                <div className="NRJ_products_grid">

                    <div className="NRJ_product_card" id="automotive-lock-components" data-tag="Compression Type"
                        data-product="Automotive Lock Components">
                        <div className="NRJ_card_img_wrap">
                            <img src={lockComponent} alt="Automotive Lock Components" />
                        </div>
                        <div className="NRJ_card_body">
                            <h3>Automotive Lock Components</h3>
                            <p>We provide a wide range of plastic injection moulded automotive lock components, designed
                                for reliable performance and consistent quality. These components are manufactured to
                                meet specific application requirements and deliver durability in demanding automotive
                                environments.</p>
                            <button className="NRJ_btn_read_more" data-target="automotive-lock-components">Read More <svg
                                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                        </div>
                    </div>

                    <div className="NRJ_product_card" id="auto-electrical-alternator-parts" data-tag="Conical Type"
                        data-product="Auto Electrical Alternator Parts">
                        <div className="NRJ_card_img_wrap">
                            <img src={alternatorProduct} alt="Auto Electrical Alternator Parts" />
                        </div>
                        <div className="NRJ_card_body">
                            <h3>Auto Electrical Alternator Parts</h3>
                            <p>We provide a wide range of plastic auto electrical components designed for effective
                                functioning and reliable performance. Our Auto Electrical Alternator Parts are
                                manufactured with a focus on durability, precise finishing, and consistent quality for
                                automotive applications.</p>
                            <button className="NRJ_btn_read_more" data-target="auto-electrical-alternator-parts">Read More
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                        </div>
                    </div>

                    <div className="NRJ_product_card" id="auto-electrical-starter-parts" data-tag="Extension Type"
                        data-product="Auto Electrical Starter Parts">
                        <div className="NRJ_card_img_wrap">
                            <img src={starterProduct} alt="Auto Electrical Starter Parts" />
                        </div>
                        <div className="NRJ_card_body">
                            <h3>Auto Electrical Starter Parts</h3>
                            <p>We offer a wide range of Auto Electrical Starter Parts manufactured as per standard
                                specifications and customized requirements. These components are produced to meet
                                specific customer needs while maintaining consistent quality, dimensional accuracy, and
                                reliable performance.</p>
                            <button className="NRJ_btn_read_more" data-target="auto-electrical-starter-parts">Read More <svg
                                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                        </div>
                    </div>

                    <div className="NRJ_product_card" id="automotive-steering-components" data-tag="Torsion Type"
                        data-product="Automotive Steering Components">
                        <div className="NRJ_card_img_wrap">
                            <img src={steeringProduct} alt="Automotive Steering Components" />
                        </div>
                        <div className="NRJ_card_body">
                            <h3>Automotive Steering Components</h3>
                            <p>We offer a wide range of Automotive Steering Components manufactured as per standard
                                specifications and specific application requirements. Our components are designed to
                                provide reliable performance, dimensional consistency, and durability for automotive
                                applications.</p>
                            <button className="NRJ_btn_read_more" data-target="automotive-steering-components">Read More
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                        </div>
                    </div>

                    <div className="NRJ_product_card" id="washing-machine-parts" data-tag="Disc / Belleville"
                        data-product="Washing Machine Parts">
                        <div className="NRJ_card_img_wrap">
                            <img src={washingMachineProduct} alt="Washing Machine Parts" />
                        </div>
                        <div className="NRJ_card_body">
                            <h3>Washing Machine Parts</h3>
                            <p>We manufacture precision plastic components for washing machines, designed to meet
                                specific application requirements. Our parts offer reliable performance, dimensional
                                accuracy, durability, and consistent quality for modern washing machine assemblies.</p>
                            <button className="NRJ_btn_read_more" data-target="washing-machine-parts">Read More <svg
                                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                        </div>
                    </div>

                    <div className="NRJ_product_card" id="mcb-switch-gear-parts" data-tag="Custom Wire Form"
                        data-product="MCB & Switch Gear Parts">
                        <div className="NRJ_card_img_wrap">
                            <img src={mcbProduct} alt="MCB & Switch Gear Parts" />
                        </div>
                        <div className="NRJ_card_body">
                            <h3>MCB & Switch Gear Parts</h3>
                            <p>We manufacture precision plastic components for MCB and switchgear applications,
                                engineered for reliable performance and consistent dimensional accuracy. Our components
                                are suitable for electrical assemblies and are produced to meet specific application
                                requirements.</p>
                            <button className="NRJ_btn_read_more" data-target="mcb-switch-gear-parts">Read More <svg
                                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                        </div>
                    </div>

                    <div className="NRJ_product_card" id="speedometer" data-tag="Custom Wire Form"
                        data-product="Speedometer">
                        <div className="NRJ_card_img_wrap">
                            <img src={speedometerProduct} alt="Speedometer" />
                        </div>
                        <div className="NRJ_card_body">
                            <h3>Speedometer</h3>
                            <p>We manufacture precision plastic components for speedometer applications, designed for
                                accurate fitment, reliable performance, and long-term durability. Our components are
                                produced with consistent quality to meet the requirements of automotive applications.
                            </p>
                            <button className="NRJ_btn_read_more" data-target="speedometer">Read More <svg width="12"
                                    height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                                    strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                        </div>
                    </div>

                    <div className="NRJ_product_card d-none" id="oil-gauge-meter" data-tag="Custom Wire Form"
                        data-product="Oil Gauge Meter">
                        <div className="NRJ_card_img_wrap">
                            <img src={oilGauge} alt="Oil Gauge Meter" />
                        </div>
                        <div className="NRJ_card_body">
                            <h3>Oil Gauge Meter</h3>
                            <p>Precision-engineered oil gauge meter components designed for accurate fitment and
                                reliable performance in automotive applications. Manufactured with durable plastic
                                materials and consistent dimensional accuracy to meet specific application requirements.
                            </p>
                            <button className="NRJ_btn_read_more" data-target="oil-gauge-meter">Read More <svg width="12"
                                    height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                                    strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

    <div className="NRJ_overlay" id="NRJ_overlay"></div>

    <div className="NRJ_slide_panel" id="NRJ_slide_panel">
        <button className="NRJ_panel_close_btn" id="NRJ_panel_close_btn" title="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        <div className="NRJ_panel_scroll" id="NRJ_panel_scroll">
            <div className="NRJ_panel_img_wrap">
                <img alt="" id="NRJ_panel_img" />
            </div>
            <div className="NRJ_panel_body">
                <div className="NRJ_panel__tag" id="NRJ_panel__tag"></div>
                <h2 className="NRJ_panel_heading" id="NRJ_panel_heading"></h2>
                <p className="NRJ_panel_desc" id="NRJ_panel_desc"></p>
                <div className="dfghjklwertyuicvbnm_related_section">

                    <div className="dfghjklwertyuicvbnm_related_header">

                        <div className="dfghjklwertyuicvbnm_related_title">
                            <span className="dfghjklwertyuicvbnm_title_line"></span>

                            <h3>Related Components</h3>
                        </div>

                        <div className="ytrekjhgfxcvbnm_component_count" id="ytrekjhgfxcvbnm_component_count">
                            0 Components
                        </div>

                    </div>

                    <div className="ytrekjhgfxcvbnm_related_grid" id="ytrekjhgfxcvbnm_related_grid">

                    </div>

                </div>

            </div>
        </div>

        <div className="NRJ_panel_footer">
            <button className="NRJ_btn_send_query" id="NRJ_btn_send_query" type="button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" /></svg>
                Send Query
            </button>
        </div>
    </div>

    <div className="NRJ_query_popup_wrap" id="NRJ_query_popup_wrap">
        <div className="NRJ_query_popup">
            <div className="NRJ_popup_header">
                <h3>Send a Query</h3>
                <p>Our team will get back to you within 24 hours</p>
                <button className="NRJ_popup_close" id="NRJ_popup_close" type="button">
                    ✕
                </button>
            </div>

            <div className="NRJ_popup_body">
                <form id="NRJ_popup_form" method="POST" action="send-mail.php">
                    <div id="NRJ_popup_form_content">
                        <div className="NRJ_form_row">
                            <div className="NRJ_form_group">
                                <label>Full Name *</label>
                                <input type="text" id="NRJ_f_name" name="full_name" placeholder="Your name" required />
                            </div>
                            <div className="NRJ_form_group">
                                <label>Phone Number *</label>
                                <input type="tel" id="NRJ_f_phone" name="phone" placeholder="+91 00000 00000" required />
                            </div>
                        </div>

                        <div className="NRJ_form_group">
                            <label>Email Address *</label>
                            <input type="email" id="NRJ_f_email" name="email" placeholder="email@company.com" required />
                        </div>

                        <div className="NRJ_form_group">
                            <label>Select Product *</label>
                            <select id="NRJ_popup_product" name="product" required>
                                <option value="">-- Select a Product --</option>
                                <option value="Automotive Lock Components">Automotive Lock Components</option>
                                <option value="Auto Electrical Alternator Parts">Auto Electrical Alternator Parts
                                </option>
                                <option value="Auto Electrical Starter Parts">Auto Electrical Starter Parts</option>
                                <option value="Automotive Steering Components">Automotive Steering Components</option>
                                <option value="Washing Machine Parts">Washing Machine Parts</option>
                                <option value="MCB & Switch Gear Parts">MCB & Switch Gear Parts</option>
                                <option value="Speedometer">Speedometer</option>
                                <option value="Oil Gauge Meter">Oil Gauge Meter</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div className="NRJ_form_group">
                            <label>Company / Organization</label>
                            <input type="text" id="NRJ_f_company" name="company" placeholder="Your company name" />
                        </div>

                        <div className="NRJ_form_group">
                            <label>Requirements / Message</label>
                            <textarea id="NRJ_f_msg" name="message" placeholder="Describe your requirements"></textarea>
                        </div>

                        <div className="NRJ_form_group">
                            <div className="g-recaptcha" data-sitekey="6Lehn4YsAAAAAPtIuSFkLRaT6c-fCTKTqQS33qre"></div>
                        </div>

                        <button type="submit" className="NRJ_popup_submit" id="NRJ_popup_submit">Submit Query</button>
                    </div>

                    <div className="NRJ_success_msg" id="NRJ_success_msg" style={{ display: 'none' }}>
                        <div className="NRJ_success_icon">✓</div>
                        <h4>Query Sent Successfully!</h4>
                        <p>Thank you for your interest. Our team will contact you within 24 hours.</p>
                    </div>

                </form>
            </div>
        </div>
    </div>
</section>
  );
}
