import './ClientsSection.css';
import React from 'react';
import { groz, havels, mirc, sanden, sebros, sparkMinda, talbros, vidocon, autoLake } from '../../constants/image';

export default function ClientsSection() {
  return (
<section className="clientLOjk_section ptb">

    <div className="clientLOjk_container">

        <div className="clientLOjk_content">

            <div className="onBg_whiete_nrJ whYCHosee_NRJ_label whYCHosee_NRJ_reveal whYCHosee_NRJ_active" data-whychosee-delay="0" style={{ '--whychosee-delay': '0ms' }}>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_white"></span>
                    <span className="whYCHosee_NRJ_dot whYCHosee_NRJ_dot_orange"></span>
                    <span className="whYCHosee_NRJ_label_text">OUR ESTEEMED CUSTOMERS</span>
                </div>

            <h2>
                Trusted by Leading  <span>Brands</span>
            </h2>

            <p>
              Building lasting relationships with leading organizations through quality, reliability, and solutions that deliver measurable value.
            </p>

        </div>

        <div className="clientLOjk_logos">

            <div className="clientLOjk_logo_box">
                <img
                    src={groz}
                    alt="Technology Partner"
                    loading="lazy"
                 />
            </div>

            <div className="clientLOjk_logo_box">
                <img
                    src={havels}
                    alt="Technology Partner"
                    loading="lazy"
                 />
            </div>

            <div className="clientLOjk_logo_box">
                <img
                    src={mirc}
                    alt="Technology Partner"
                    loading="lazy"
                 />
            </div>

            <div className="clientLOjk_logo_box">
                <img
                    src={sanden}
                    alt="Technology Partner"
                    loading="lazy"
                 />
            </div>

            <div className="clientLOjk_logo_box">
                <img
                    src={sebros}
                    alt="Technology Partner"
                    loading="lazy"
                 />
            </div>

            <div className="clientLOjk_logo_box">
                <img
                    src={sparkMinda}
                    alt="Technology Partner"
                    loading="lazy"
                 />
            </div>

            <div className="clientLOjk_logo_box">
                <img
                    src={talbros}
                    alt="Technology Partner"
                    loading="lazy"
                 />
            </div>

            <div className="clientLOjk_logo_box">
                <img
                    src={vidocon}
                    alt="Technology Partner"
                    loading="lazy"
                 />
            </div>

            <div className="clientLOjk_logo_box">
                <img
                    src={autoLake}
                    alt="Technology Partner"
                    loading="lazy"
                 />
            </div>

        </div>

    </div>

</section>
  );
}
