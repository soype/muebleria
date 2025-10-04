import React from "react";
import Link from "next/link";
import './style.scss';

const Header = ({ menuItems }) => {
  let logo = false;

  return (
    <header className="fixed z-9 w-full header border-b-1">
      <div className='header__inner flex justify-between min-h-16 px-8 items-center m-auto max-w-std'>
        <div className="header__logo flex items-center">{logo ? <Image src="/logo.png" alt="logo" width={50} height={50} className="header__logo-image" /> : "Logo"}</div>
        <button className='header__burger md:hidden'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="white"/>
            </svg>
        </button>
        <div className="header__menu absolute md:static top-0 right-0 p-8 md:p-0 h-[100vh] md:h-auto bg-gray-500 md:bg-transparent duration-300 transition-all lg:right-[-150px] z-9">
          <ul className="flex flex-col md:flex-row items-center gap-8">
            <button id='menuClose' className='md:hidden self-end'>x</button>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
