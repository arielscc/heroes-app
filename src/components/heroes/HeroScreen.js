import React, { useMemo } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { loadImage } from '../helpers/heroImages';
import { DcLogo } from './DcLogo';
import { MarvelLogo } from './MarvelLogo';

export const HeroScreen = () => {
  const { heroeId } = useParams();
  // const hero = getHeroById(heroeId);

  const history = useHistory();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  if (!hero) {
    return <Redirect to="/" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="md:flex md:w-2/3 m-auto rounded-2xl overflow-hidden bg-hero">
      <div className="md:w-3/6 xl:w-2/6">
        <img
          src={loadImage(`${heroeId}.jpg`)}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="text-center p-4 bg-hero text-white relative md:w-3/6 md:p-14 xl:w-4/6 xl:p-20 ">
        {publisher === 'DC Comics' ? (
          <div className="md:relative md:-mr-4">
            <DcLogo />
          </div>
        ) : (
          <div className="md:relative md:-mr-4">
            <MarvelLogo />
          </div>
        )}
        <h1 className="font-bold text-4xl mt-4 leading-8 md:text-6xl">
          {superhero}
        </h1>
        <p className="uppercase text-gray-400 text-sm tracking-wide">
          {publisher}
        </p>
        <div className="text-left mt-2 font-light flex flex-col">
          <div className="flex justify-between my-1">
            <p className="font-bold">Name:</p>
            <p> {alter_ego}</p>
          </div>
          <hr className="border-gray-600" />
          <div className="flex justify-between my-1">
            <p className="font-bold">First Apparance:</p>
            <p className="text-right w-1/2"> {first_appearance}</p>
          </div>
          <hr className="border-gray-600" />
          <div className="flex justify-between my-1">
            <p className="font-bold">Characters:</p>
            <p> {characters}</p>
          </div>
          <hr className="border-gray-600" />
          <div className="flex justify-between my-1">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              porro impedit placeat accusamus, beatae dolor maiores reiciendis
              voluptates, obcaecati inventore optio doloremque provident ex
              expedita dolorem aliquam doloribus nemo dignissimos? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Amet ad molestiae
              placeat? Facilis nemo quidem libero repellendus fuga officia,
              repudiandae dignissimos deleniti, recusandae aperiam iure, ducimus
              possimus ipsum atque rerum?
            </p>
          </div>
          <button
            onClick={() => {
              if (history.length <= 2) {
                console.log('push');
                return history.push('/');
              } else {
                console.log('goback');
                return history.goBack();
              }
              // return history.length <= 2 ? history.push('/') : history.goBack();
            }}
            className="self-end py-2 px-4 m-5 rounded bg-blue-600 hover:bg-blue-800 font-bold"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};
