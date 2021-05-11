import { mount } from 'enzyme';
import { useReducer } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { authReducer } from '../../auth/authReducer';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
  const valueContext = {
    user: {
      logged: false,
    },
    dispatch: jest.fn(),
  };

  test('debe de mostrar el login si no esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={valueContext}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el componente marvel, si está autenticado', () => {
    const valueContext = {
      user: {
        logged: true,
        name: 'Ariel',
      },
      dispatch: jest.fn(),
    };
    const wrapper = mount(
      <AuthContext.Provider value={valueContext}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.contains('Ariel')).toBe(true);
  });
});
