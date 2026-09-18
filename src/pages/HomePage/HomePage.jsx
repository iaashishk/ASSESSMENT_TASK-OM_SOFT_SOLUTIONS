import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Footer from '../../components/Footer/Footer';
import '../../index.css';
import '../../responsive.css';
import '../../animation.css';
import { initApexIgnite } from '../../site';

export default function HomePage() {
  useEffect(() => {
    initApexIgnite();
  }, []);

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
