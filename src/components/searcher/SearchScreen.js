import React, { useState } from 'react';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';

export const SearchScreen = () => {
  const [values, handleInputChange] = useForm({
    searchText: '',
  });
  const { searchText } = values;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  const heroesFiltered = heroes;
  return (
    <>
      <form onSubmit={handleSearch} className="w-2/3 m-auto mb-10">
        <label htmlFor="idform">Buscar</label>
        <input
          type="text"
          value={searchText}
          name="searchText"
          onChange={handleInputChange}
          id="idform"
          className="w-full border-gray-500 border-2 rounded-lg px-5 py-2 focus:outline-none"
        />
      </form>
      <div className="w-10/12 mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {heroesFiltered.map((hero) => {
          return <HeroeCard key={hero.id} hero={hero} />;
        })}
      </div>
    </>
  );
};
