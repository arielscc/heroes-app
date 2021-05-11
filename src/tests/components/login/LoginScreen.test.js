import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en el compoenente <LoginScreen/>', () => {
  const mockHistory = {
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={mockHistory} />
    </AuthContext.Provider>
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de realizar el dispatch y la navegacion y guardar en localStorage', () => {
    // wrapper.find('button').simulate('click');
    const handleClick = wrapper.find('button').prop('onClick');

    handleClick();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      payload: { name: 'Ariel' },
      type: types.login,
    });

    expect(mockHistory.replace).toHaveBeenCalledWith('/');

    localStorage.setItem('lastPath', '/marvel');
    // wrapper.find('button').simulate('click');
    handleClick();

    expect(localStorage.getItem('lastPath')).toBe('/marvel');
    expect(mockHistory.replace).toHaveBeenCalledWith('/marvel');
  });
});
