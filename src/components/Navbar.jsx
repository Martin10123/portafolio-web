import React from "react";

export const Navbar = ({ handleOpenSidebar }) => {
  return (
    <header className="py-4 px-2 sticky top-0 z-[8888] border-b border-quaternary bg-tertiary md1:pl-4">
      <nav className="flex items-center justify-between">
        <img
          className="size-14 bg-white rounded-full"
          src="/logo.png"
          alt="Logo"
        />

        <svg
          className="size-12 cursor-pointer text-quaternary md1:hidden"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          onClick={handleOpenSidebar}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 6h-8m8 4H6m12 4h-8m8 4H6"
          />
        </svg>
      </nav>
    </header>
  );
};
