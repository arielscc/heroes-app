import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const MarvelScreen = () => {
  return (
    <div className=" p-10 pattern_a">
      <HeroesList publisher="Marvel Comics" />
    </div>
  );
};
