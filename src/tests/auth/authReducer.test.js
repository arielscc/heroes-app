import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';
types;
describe('Pruebas en authReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = { logged: false };
    const reducer = authReducer(state, {});
    expect(reducer).toEqual(state);
  });

  test('debe de autenticar y colocar el name del usuario', () => {
    const state = { logged: false };
    const reducer = authReducer(state, {
      type: types.login,
      payload: { name: 'Ariel' },
    });
    expect(reducer).toEqual({ logged: true, name: 'Ariel' });
  });

  test('debe de debe de borrar el name del usuario y logge en false', () => {
    const state = { logged: true, name: 'Ariel' };
    const reducer = authReducer(state, { type: types.logout });
    expect(reducer).toEqual({ logged: false });
  });
});
