"use client";
import Link from "next/link";
import { navbarOptions } from "./navbarConfig";
import { NavBarOption, NavBarOptionsProps } from "./navBarTypes";

const NavBarOptions: React.FC<NavBarOptionsProps> = ({
  isOpen = false,
  setIsOpen,
}) => {
  return (
    <div
      className={
        isOpen
          ? "px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col"
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
            onClick={() => setIsOpen(false)}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBarOptions;
