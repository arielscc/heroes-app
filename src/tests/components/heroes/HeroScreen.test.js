// import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Router, useHistory } from 'react-router';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Probando el componente <HeroScreen/>', () => {
  test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains('Hulk')).toBe(true);
  });
  test('debe de regresar a la pantalla anteior con push', () => {
    // TODO: -Esta prueba queda inconclusa debido a que no se encuentra forma de pasar los metodos del useHistory al componente <HeroScreen/>

    const mockHistoryPush = jest.fn();
    const mockHistoryGoBack = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        length: 1,
        push: mockHistoryPush,
        goBack: mockHistoryGoBack,
      }),
    }));

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );
    // wrapper.find('button').prop('onClick')();
    // expect(mockHistoryGoBack).toHaveBeenCalled();
  });
});
