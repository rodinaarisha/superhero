import React from 'react';
import HeroCard from './HeroCard';

import { heroesData } from './dataCard';

const HeroGallery = () => {
  return (
    <div className="hero-gallery">
      {heroesData.map((hero, index) => (
        <HeroCard key={index} hero={hero} />
      ))}
    </div>
  );
};

export default HeroGallery;