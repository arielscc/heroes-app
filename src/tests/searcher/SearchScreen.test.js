import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { SearchScreen } from '../../components/searcher/SearchScreen';

describe('pruebas en componente <SearchScreen/>', () => {
  test('debe de mostrar el componente de forma correcta', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar al pesonaje y cambiar el query', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
  });

  test('debe de mostrar un error si no se encuentra el heroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batmancito']}>
        <SearchScreen />
      </MemoryRouter>
    );

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });

    expect(wrapper.find('HeroeCard').exists()).toBe(false);
  });
});
