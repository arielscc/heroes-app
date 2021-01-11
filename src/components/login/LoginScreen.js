import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  return (
    <div className="flex justify-between m-10">
      <h1>LoginScreen</h1>

      <Link
        to="/"
        className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none"
      >
        Login
      </Link>
    </div>
  );
};
