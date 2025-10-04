import React from "react";
import Link from "next/link";
import './style.scss';

const Header = ({ menuItems }) => {
  let logo = false;

  return (
    <header className="fixed z-9 w-full header border-b-1">
      <div className='header__inner flex justify-between min-h-16 px-8 items-center m-auto max-w-std'>
        <div className="header__logo flex items-center">{logo ? <Image src="/logo.png" alt="logo" width={50} height={50} className="header__logo-image" /> : "Logo"}</div>
        <div className="header__menu">
          <ul className="flex items-center gap-8">
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
