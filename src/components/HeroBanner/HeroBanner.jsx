import './HeroBanner.css';
import React from 'react';
import { videoCompress } from '../../constants/image';

export default function HeroBanner() {
  return (
<section className="banner_sec">
    <div className="container-fluid w-100 p-0 h-100">
        <div className="baner_soderhaNrj-wrapper baner_soderhaNrj-video-only">
            <div className="baner_soderhaNrj-video-wrap">
                <video className="baner_soderhaNrj-video" autoPlay muted loop playsInline poster="">
                    <source src={videoCompress} type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
</section>
  );
}
