import React from 'react';
import Hero from '../components/Hero';
import ImpactBanner from '../components/ImpactBanner';
import Partners from '../components/Partners';
import CommunityFocus from '../components/CommunityFocus';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ImpactBanner />
      <Partners />
      <CommunityFocus />
    </>
  );
};

export default Home;
