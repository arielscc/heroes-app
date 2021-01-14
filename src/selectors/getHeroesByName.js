import { heroes } from '../data/heroes';

export const getHeroesByName = (nameHero = '') => {
  if (nameHero === '') {
    return heroes;
  }
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(nameHero.toLowerCase())
  );
};
