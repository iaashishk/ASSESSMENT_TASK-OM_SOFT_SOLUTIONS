import './TalkToExpert.css';
import React from 'react';
import { expertForm } from '../../constants/image';

export default function TalkToExpert() {
  return (
<section className="talk_expert_section ptb" id="talkToExpert">
            <div className="talk_expert_container">

                <div className="onBg_whiete_nrJ whYCHosee_NRJ_label whYCHosee_NRJ_reveal whYCHosee_NRJ_active"
                    data-whychosee-delay="0" style={{ '--whychosee-delay': '0ms' }}>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span className="whYCHosee_NRJ_label_text">TALK TO AN EXPERT</span>
                </div>
                <div className="talk_expert_header">

                    <h2 className="talk_expert_main_title">Let's Build Together<br />Your Next Solution</h2>
                    <div className="talk_expert_ghost_title">OUR EXPERTS WILL GET<br />IN TOUCH WITH YOU</div>
                </div>
                
                <div className="talk_expert_grid">

                    <div className="talk_expert_img_col">
                        <img src={expertForm} className="talk_expert_img"
                            alt="Talk To Expert - Apex Ignite Solutions" loading="lazy" />
                    </div>

                    <div className="talk_expert_form_col">
                        <form className="talk_expert_form" action="#" method="POST"
                            onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our expert will get in touch with you shortly."); }}>

                            <div className="talk_expert_select_row">
                                <span className="talk_expert_select_label">Products / Parts</span>
                                <div className="talk_expert_select_wrap">
                                    <select className="talk_expert_select" name="product" required>
                                        <option value="" disabled defaultValue="">Select a Product / Component Category
                                        </option>
                                        <option value="Automotive Lock Components">Automotive Lock Components</option>
                                        <option value="Auto Electrical Alternator Parts">Auto Electrical Alternator
                                            Parts</option>
                                        <option value="Auto Electrical Starter Parts">Auto Electrical Starter Parts
                                        </option>
                                        <option value="Automotive Steering Components">Automotive Steering Components
                                        </option>
                                        <option value="Washing Machine Parts">Washing Machine Parts</option>
                                        <option value="MCB & Switchgear Parts">MCB & Switchgear Parts</option>
                                        <option value="Speedometer Components">Speedometer Components</option>
                                        <option value="Oil Gauge Meter Components">Oil Gauge Meter Components</option>
                                    </select>
                                </div>
                            </div>

                            <div className="talk_expert_input_row">
                                <div className="talk_expert_field">
                                    <label htmlFor="te_first_name">First Name *</label>
                                    <input type="text" id="te_first_name" name="first_name" className="talk_expert_input"
                                        placeholder="Eg: John" required />
                                </div>
                                <div className="talk_expert_field">
                                    <label htmlFor="te_last_name">Last Name *</label>
                                    <input type="text" id="te_last_name" name="last_name" className="talk_expert_input"
                                        placeholder="Eg: Doe" required />
                                </div>
                            </div>

                            <div className="talk_expert_input_row">
                                <div className="talk_expert_field">
                                    <label htmlFor="te_email">Your E-mail *</label>
                                    <input type="email" id="te_email" name="email" className="talk_expert_input"
                                        placeholder="Eg: johndoe88@gmail.com" required />
                                </div>
                                <div className="talk_expert_field">
                                    <label htmlFor="te_phone">Phone Number *</label>
                                    <input type="tel" id="te_phone" name="phone" className="talk_expert_input"
                                        placeholder="Eg: +91 98765 43210" required />
                                </div>
                            </div>

                            <div className="talk_expert_field">
                                <label htmlFor="te_message">Message</label>
                                <textarea id="te_message" name="message" className="talk_expert_textarea"
                                    placeholder="Detailed Requirement / Component Specifications..."></textarea>
                            </div>

                            <div className="talk_expert_btn_wrap">
                                <button type="submit" className="talk_expert_submit_btn">
                                    SEND MESSAGE <span className="btn_arrow">&#x2197;</span>
                                </button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </section>
  );
}
