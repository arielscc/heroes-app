import React from 'react';

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    // history.push('/');
    history.replace('/');
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
