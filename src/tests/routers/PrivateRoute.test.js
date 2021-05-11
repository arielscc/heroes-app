import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Pruebas en <PrivateRoute> </PrivateRoute>', () => {
  const props = {
    location: {
      pathname: '/marvel',
      search: '/hulk',
    },
  };

  Storage.prototype.setItem = jest.fn();

  test('debe de mostrar el componente si esta autenticado y guardar local storage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <a>link</a>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('a').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/marvel/hulk'
    );
  });
  test('Debe de bloquear el componente si no esta autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <a>private</a>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('a').exists()).toBe(false);
  });
});
