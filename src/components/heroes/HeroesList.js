import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="w-5/6 mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
      {heroes.map((hero) => {
        return <HeroeCard key={hero.id} hero={hero} />;
      })}
    </div>
  );
};
