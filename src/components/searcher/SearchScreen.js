import { useHistory, useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useMemo, useState } from 'react';

export const SearchScreen = () => {
  const { search } = useLocation();
  const history = useHistory();

  const { q = '' } = queryString.parse(search);

  const initialState = {
    searchText: q,
  };

  const [values, handleInputChange, resetValues] = useForm(initialState);
  const { searchText } = values;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText !== '') {
      history.push(`?q=${searchText}`);
    } else {
      history.replace('/search');
    }
  };

  const handleClose = () => {
    if (searchText !== '' || heroesFiltered.length < heroes.length) {
      history.replace('/search');
      resetValues();
    }
  };

  return (
    <>
      <div className="w-2/3 m-auto mb-10">
        <form onSubmit={handleSearch}>
          <label htmlFor="idform">Buscar</label>
          <input
            type="text"
            value={searchText}
            name="searchText"
            onChange={handleInputChange}
            autoComplete="off"
            id="idform"
            className="w-full border-gray-500 border-2 rounded-lg px-5 py-2 focus:outline-none"
          />
        </form>
        <button
          onClick={handleSearch}
          className="py-2 px-4 rounded bg-gray-800 mt-4 text-white"
        >
          Buscar
        </button>
        <button
          onClick={handleClose}
          className="py-2 px-4 rounded border inset-10 border-gray-800 mt-4  ml-2"
        >
          Limpiar
        </button>
      </div>

      <div className="w-10/12 mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {heroesFiltered.map((hero) => {
          return <HeroeCard key={hero.id} hero={hero} />;
        })}
      </div>
    </>
  );
};
