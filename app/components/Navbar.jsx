import React from 'react';
import AtomicIntegersWebSocket from "./AtomicIntegersWebSocket";

const Navbar = () => {
  const handleClick = (actionType) => {
      // Dispatch a custom browser event based on the button clicked
      window.dispatchEvent(new CustomEvent('navbar-action', { detail: { actionType } }));
  };

  return (
      <nav className="bg-[#121212] px-5 py-3 flex justify-end items-center z-50">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out mr-4" onClick={() => handleClick('increment')}>incrementAndGet()</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out" onClick={() => handleClick('reset')}>reset()</button>
      </nav>
  );
};

export default Navbar;