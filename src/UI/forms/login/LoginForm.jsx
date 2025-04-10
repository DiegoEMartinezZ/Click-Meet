import React, { useState } from 'react';
import { FaUserPlus } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const LoginForm = ({ onSwitchForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
    // TODO: Autentication logic
  };

  return (
    <section className="flex items-center justify-center px-10 h-[calc(100vh-230px)] md:h-[calc(100vh-350px)]">
      <div className="w-full max-w-md px-10 py-8 rounded-3xl justify-center md:justify-baseline bg-clickmeet-black text-clickmeet-white">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome!</h1>
        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Your email ..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full py-1.5 px-4 text-sm md:text-base bg-clickmeet-white text-gray-800 focus:outline-none"
              required
            />

            <input
              type="password"
              placeholder="Your password ..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full py-1.5 px-4 text-sm md:text-base bg-clickmeet-white text-gray-800 focus:outline-none"
              required
            />
          </div>

          <div className="flex justify-between gap-4 mt-8">
            <button
              type="submit"
              className="flex items-center justify-center text-sm md:text-base gap-2 w-full py-1 md:py-2 md:px-4 bg-orange-400 hover:bg-clickmeet-orange rounded-full text-clickmeet-black font-bold transition-colors"
            >
              <FaSignInAlt size={20} />
              Log In
            </button>

            <button
              type="button"
              onClick={onSwitchForm}
              className="flex items-center justify-center text-sm md:text-base gap-2 w-full py-1 md:py-2 md:px-4 bg-orange-400 hover:bg-clickmeet-orange rounded-full text-clickmeet-black font-bold transition-colors"
            >
              <FaUserPlus size={20} />
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;