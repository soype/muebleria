'use client'

import React, { useState } from "react";
import Link from "next/link";
import './style.scss';

const Header = ({ menuItems }) => {
  let logo = false;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('right-0');
    menu.classList.toggle('right-[-320px]');
    if (menuOpen) document.querySelector('.header__burger')?.focus();
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="fixed z-9 w-full header border-b-1">
      <div className='header__inner flex justify-between min-h-16 px-8 items-center m-auto max-w-std'>
        <div className="header__logo flex items-center">{logo ? <Image src="/logo.png" alt="logo" width={50} height={50} className="header__logo-image" /> : "Logo"}</div>
        <button type='button' className='header__burger md:hidden' aria-controls="primary-nav" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="white"/>
            </svg>
        </button>
        <nav id='primary-nav' aria-label="Principal" onKeyDown={(e) => {if (e.key === "Escape" && menuOpen) toggleMenu();}} inert={!menuOpen} className="header__menu flex flex-col md:flex-row justify-between md:justify-center absolute md:static top-0 right-[-320px] p-8 md:p-0 h-[100vh] md:h-auto min-w-[300px] md:min-w-[unset] bg-gray-500 md:bg-transparent duration-300 transition-all z-9">
          
          <ul className="flex flex-col md:flex-row md:items-center gap-8">
            <li className="flex flex-col md:hidden">
                <button type='button' tabIndex={menuOpen ? 0 : -1} className='header__burger md:hidden text-right' aria-label="Cerrar menú" onClick={toggleMenu}>X</button>
            </li>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className='header__menu-copyright md:hidden'>
            <p>© 2023 Mueblería<br/>Todos los derechos reservados</p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
