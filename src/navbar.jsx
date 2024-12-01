import React from 'react';
import logo from './logo.png';
import clsx from 'clsx';

export default function Navbar() {
  const [isActive, setIsActive] = React.useState('Storepage');

  return (
    <header className="fixed w-full h-16 flex items-center justify-between px-4 backdrop-blur-md bg-slate-800 bg-opacity-80">
      <div className="h-full flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-12 w-auto max-w-xs object-contain"
        />
      </div>
      <div className="flex items-center space-x-4">
        <a onClick={() => setIsActive('Storepage')} className={clsx({ 'text-teal-500 border-b-4 border-teal-300': isActive === 'Storepage', 'text-gray-400 font-semibold hover:text-teal-300 transition duration-300': true })}>
          Storepage
        </a>
        <a onClick={() => setIsActive('Shipping')} className={clsx({ 'text-teal-500 border-b-4 border-teal-300': isActive === 'Shipping', 'text-gray-400 font-semibold hover:text-teal-300 transition duration-300': true })}>
          Shipping
        </a>
        <a onClick={() => setIsActive('About')} className={clsx({ 'text-teal-500 border-b-4 border-teal-300': isActive === 'About', 'text-gray-400 font-semibold hover:text-teal-300 transition duration-300': true })}>
          About
        </a>
        <a onClick={() => setIsActive('Contact Us')} className={clsx({ 'text-teal-500 border-b-4 border-teal-300': isActive === 'Contact Us', 'text-gray-400 font-semibold hover:text-teal-300 transition duration-300': true })}>
          Contact Us
        </a>
      </div>
    </header>
  );
}