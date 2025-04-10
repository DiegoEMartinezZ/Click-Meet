import React, { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";

const SignUpForm = ({ onSwitchForm }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Information submitted:', { email, password, name, lastName });
    // TODO: SignUp logic and validations
  };

  return (
    <section className="flex items-center justify-center px-10 h-[calc(100vh-230px)] md:h-[calc(100vh-350px)]">
      <div className="w-full max-w-md px-10 py-8 rounded-3xl justify-center md:justify-baseline bg-clickmeet-black text-clickmeet-white">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="name"
              placeholder="Your name ..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-full py-1.5 px-4 text-sm md:text-base bg-clickmeet-white text-gray-800 focus:outline-none"
              required
            />
            <input
              type="lastName"
              placeholder="Your lastName..."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-full py-1.5 px-4 text-sm md:text-base bg-clickmeet-white text-gray-800 focus:outline-none"
              required
            />
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

          <div className="flex justify-center gap-4 mt-8">
            <button
              type="submit"
              className="flex items-center justify-center text-sm md:text-base gap-2 w-1/2 py-1 md:py-2 md:px-4 bg-orange-400 hover:bg-clickmeet-orange rounded-full text-clickmeet-black font-bold transition-colors"
            >
              <FaPaperPlane size={20} />
              Send
            </button>
          </div>
        </form>
        <div className='text-center'>
          <button onClick={onSwitchForm} className='text-sm md:text-base font-italic mt-4'>¿Do you have an account? Sign in</button>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;