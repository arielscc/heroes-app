import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const user = {
      name: 'Ariel',
    };
    const action = {
      type: types.login,
      payload: user,
    };
    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/';

    history.replace(lastPath);
  };

  return (
    <div className="flex justify-between m-10">
      <h1>LoginScreen</h1>

      <button
        onClick={handleLogin}
        className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none"
      >
        Login
      </button>
    </div>
  );
};
