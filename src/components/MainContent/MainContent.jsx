import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import AboutUsSection from '../AboutUsSection/AboutUsSection';
import WelcomeBanner from '../WelcomeBanner/WelcomeBanner';
import TabMission from '../TabMission/TabMission';
import ProductsSection from '../ProductsSection/ProductsSection';
import ProcessSection from '../ProcessSection/ProcessSection';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import FAQSection from '../FAQSection/FAQSection';
import IndustriesSection from '../IndustriesSection/IndustriesSection';
import TalkToExpert from '../TalkToExpert/TalkToExpert';
import ClientsSection from '../ClientsSection/ClientsSection';

export default function MainContent() {
  return (
    <main>
      <HeroBanner />
      <AboutUsSection />
      <WelcomeBanner />
      <TabMission />
      <ProductsSection />
      <ProcessSection />
      <WhyChooseUs />
      <FAQSection />
      <IndustriesSection />
      <TalkToExpert />
      <ClientsSection />
    </main>
  );
}
