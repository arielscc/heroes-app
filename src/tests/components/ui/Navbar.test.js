import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('pruebas en <Navbar/>', () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  };

  const contextValue = {
    user: {
      name: 'juanito',
      logged: true,
    },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente si el usuario esta logeado', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains('juanito')).toBe(true);
  });

  test('debe de llamar el logout y usar el history', () => {
    wrapper.find('button').last().simulate('click');

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  });
});
