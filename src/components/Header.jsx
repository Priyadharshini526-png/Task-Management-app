import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navLinkClasses = (path) =>
    `px-3 py-1 rounded-md transition-colors ${
      location.pathname === path
        ? 'bg-blue-600 text-white'
        : 'hover:bg-blue-500 hover:text-white'
    }`;

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Task Manager</h1>

        <nav className="flex gap-2 sm:gap-4 text-sm sm:text-base">
          <Link to="/" className={navLinkClasses('/')}>
            Home
          </Link>
          <Link to="/create" className={navLinkClasses('/create')}>
            Create Task
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;