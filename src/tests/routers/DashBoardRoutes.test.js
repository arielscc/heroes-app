import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { DashBoardRoutes } from '../../routers/DashBoardRoutes';

describe('Pruebas en <DashBoardRoutes/>', () => {
  test('debe hacer match con el snapshot', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'Ariel',
      },
      dispatch: jest.fn(),
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashBoardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains('Ariel')).toBe(true);
  });
});
