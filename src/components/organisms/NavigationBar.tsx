import React from 'react';

import { NavbarData } from '@/types/services/IFetchData';

import { FetchNavbarData } from '@/lib/services/FetchingData';

const NavigationBar = async () => {
  const navBarData: NavbarData = await FetchNavbarData();

  if (!navBarData) return null;

  return (
    <nav className='relative z-[1]'>
      Navigation Bar
    </nav>
  );
};

export default NavigationBar;