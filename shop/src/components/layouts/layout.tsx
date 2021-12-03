import React, { useState, useEffect } from 'react'
import useLayout from '@framework/utils/use-layout';
import Header from './header';
import Body from './body';
import Footer from './footer'
import HeaderMinimal from './header-minimal';
import MobileNavigation from './mobile-navigation';
import Carousel from 'react-elastic-carousel';


const SiteLayout: React.FC = ({ children }) => {
  const { layout } = useLayout();

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150 bg-gray-100">
      {layout === 'minimal' ? <HeaderMinimal /> : <Header />}
      {children}
      <MobileNavigation />
      <Footer />
    </div>
  );
};
export const getLayout = (page: React.ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
