'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

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
      href: '/',
    },
    {
      label: 'Contact Me',
      href: '/',
    },
  ];
  return (
    <nav className="w-full h-16 flex justify-between px-6 shadow-md relative">
      <div className="flex items-center font-bold text-2xl md:text-3xl">
        <Link href="/">Dev-Joao</Link>
      </div>

      <div className="hidden lg:flex gap-4 px-6 items-center">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors 
        cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden">
          <div className="flex flex-col px-6 py-4 gap-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
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
