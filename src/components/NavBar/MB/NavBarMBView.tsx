"use client";
import { HiMenu, HiSearch, HiX } from "react-icons/hi";
import { useState } from "react";
import InputField from "@/components/common/InputField";
import { searchPlaceholder } from "../navbarConfig";
import { NavBarMBViewProps } from "../navBarTypes";
import Button from "@/components/common/Button";
import NavBarOptions from "../NavBarOptions";
import NavBarLoginBtn from "../NavBarLoginBtn";

const NavBarMBView: React.FC<NavBarMBViewProps> = ({
  isOpen,
  toggleMenu,
  handleLogin,
  setIsOpen,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const SearchField: React.FC = () => (
    <div className="relative w-full  justify-center">
      <InputField
        placeholder={searchPlaceholder}
        className="w-full pr-10"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <HiSearch className="h-5 w-5 text-gray-500" />
      </div>
    </div>
  );
  return (
    <div className="md:hidden">
      {isOpen ? (
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <div className="flex items-center mb-1 space-x-1 row-gap-2">
            <SearchField />
            <Button onClick={toggleMenu} icon={<HiX className="h-6 w-6" />} />
          </div>
          <NavBarOptions isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavBarLoginBtn handleLogin={handleLogin} />
        </div>
      ) : (
        <Button onClick={toggleMenu} icon={<HiMenu className="h-6 w-6" />} />
      )}
    </div>
  );
};

export default NavBarMBView;
