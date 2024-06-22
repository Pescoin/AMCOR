import React from 'react';
import Materials from '../components/Materials';
import Banner from '../components/Banner';
import Copyrights from '../components/Copyrights';
import Aside from '../components/ui/Aside';

export default function Home() {
  return (
    <>
      <Banner />
      <Materials />
      <Aside />
    </>
  );
}
