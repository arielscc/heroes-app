import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PublicRoute from '../../routers/PublicRoute';

describe('Pruebas en componente <PublicRoute/>', () => {
  const rest = {};

  test('debe de renderizar el componentepublico por defecto', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={false}
          component={() => <a>public</a>}
          {...rest}
        />
      </MemoryRouter>
    );
    expect(wrapper.contains('public') && wrapper.find('a').exists()).toBe(true);
  });
});
