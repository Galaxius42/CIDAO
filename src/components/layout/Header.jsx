import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  { path: '/realisations', label: 'Réalisations' },
  { path: '/notre-demarche', label: 'Notre démarche' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex-none bg-white dark:bg-gray-900 shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-extrabold tracking-tight">
          CIDAO
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-5">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                [
                  'transition-colors hover:text-blue-600',
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-600',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t">
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map(({ path, label }) => (
              <li key={path} onClick={() => setOpen(false)}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    [
                      'block py-2 px-3 rounded-lg',
                      isActive ? 'bg-blue-50 dark:bg-gray-800 text-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-800',
                    ].join(' ')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}