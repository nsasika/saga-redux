"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navbarOptions, searchPlaceholder } from "./navbarConfig";
import { NavBarOption, NavBarOptionsProps } from "./navBarTypes";
import { NAV_BAR_TITLE_DESKTOP, NAV_BAR_TITLE_MB } from "@/utils/constants";
import InputField from "../common/InputField";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const NavBarOptions = ({ isOpen }: NavBarOptionsProps) => {
    return (
      <div
        className={
          isOpen
            ? "px-2 pt-2 pb-3 space-y-1 sm:px-3"
            : "ml-10 flex items-baseline space-x-4"
        }
      >
        {navbarOptions.map((option: NavBarOption, index: number) => {
          const { name, href } = option;
          return (
            <Link
              key={index}
              href={href}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {name}
            </Link>
          );
        })}
      </div>
    );
  };

  const NavBarTitle = () => (
    <div className="flex items-center p-3">
      <div className="flex-shrink-0">
        <Link href="/" className="text-xl font-bold text-gray-800">
          <span className="hidden md:inline">{NAV_BAR_TITLE_DESKTOP}</span>
          <span className="md:hidden">{NAV_BAR_TITLE_MB}</span>
        </Link>
      </div>
    </div>
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <NavBarTitle />
        <div className="flex justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavBarOptions isOpen={false} />
            <InputField
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={handleSearchChange}
            />
            <Link
              href="/login"
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <NavBarOptions isOpen={true} />
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <InputField
              placeholder={searchPlaceholder}
              className="w-full"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
