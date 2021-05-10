import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Pruebas en <PrivateRoute> </PrivateRoute>', () => {
  const props = {
    location: {
      pathname: '/home',
    },
  };

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

    console.log(wrapper.html());
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
