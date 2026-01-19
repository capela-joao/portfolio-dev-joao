'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ChangeTheme from './utils/ChangeTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About Me',
      href: '/about',
    },
    {
      label: 'Contact Me',
      href: '/contact',
    },
  ];
  return (
    <nav
      className="w-full h-16 flex justify-between px-6 shadow-md relative
    bg-background text-foreground"
    >
      <div className="flex items-center font-bold text-2xl md:text-3xl">
        <Link href="/">Dev-Joao</Link>
      </div>

      <div className="hidden lg:flex gap-4 px-6 items-center">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <ChangeTheme />
      </div>

      <div className="lg:hidden flex items-center gap-2">
        <ChangeTheme />
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors 
        cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-16 left-0 w-full shadow-lg lg:hidden
          bg-background text-foreground"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-900 dark:text-gray-100 hover:text-blue-600 
                transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
