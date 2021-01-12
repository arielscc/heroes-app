import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const DcScreen = () => {
  return (
    <div className="p-10 pattern_a">
      <HeroesList publisher="DC Comics" />
    </div>
  );
};
