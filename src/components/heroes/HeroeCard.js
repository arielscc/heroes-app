import React from 'react';
import { Link } from 'react-router-dom';
import { DcLogo } from './DcLogo';
import { MarvelLogo } from './MarvelLogo';

import { loadImage } from '../helpers/heroImages';

export const HeroeCard = ({ hero }) => {
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <Link
      to={`hero/${id}`}
      className="relative rounded-xl transform hover:scale-105 cursor-pointer duration-150 overflow-hidden image"
    >
      <img
        src={loadImage(`${id}.jpg`)}
        alt={superhero}
        className="rounded-xl"
      />
      <div className="absolute bg-hero rounded-b-xl left-0 right-0 bottom-0  p-2 border-t-4 border-white flex footer duration-150">
        {publisher === 'DC Comics' ? <DcLogo /> : <MarvelLogo />}
        <div className="self-auto text-gray-200 ml-2 mb-2 title">
          <h2 className="text-xl font-extrabold text-gray-100">{superhero}</h2>
          <p className="uppercase text-xs mb-4 text-gray-400">{alter_ego}</p>
          <p>{publisher}</p>
          <p>{first_appearance}</p>
          <p className="font-thin text-sm text-gray-400">{characters}</p>
        </div>
      </div>
    </Link>
  );
};
