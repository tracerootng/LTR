import React from 'react';
import Hero from '../components/Hero';
import ImpactBanner from '../components/ImpactBanner';
import MediaHubSection from '../components/MediaHubSection';
import LatestPressReleases from '../components/LatestPressReleases';
import Partners from '../components/Partners';
import CommunityFocus from '../components/CommunityFocus';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ImpactBanner />
      <MediaHubSection />
      <LatestPressReleases />
      <Partners />
      <CommunityFocus />
    </>
  );
};

export default Home;
