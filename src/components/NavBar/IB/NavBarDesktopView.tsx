"use client";
import React, { useState } from "react";
import InputField from "@/components/common/InputField";
import NavBarLoginBtn from "../NavBarLoginBtn";
import NavBarOptions from "../NavBarOptions";
import { NavBarDesktopViewProps } from "../navBarTypes";
import { searchPlaceholder } from "../navbarConfig";

const NavBarDesktopView: React.FC<NavBarDesktopViewProps> = ({
  handleLogin,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="flex justify-between h-16">
      <div className="hidden md:flex items-center space-x-4">
        <NavBarOptions />
        <InputField
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={handleSearchChange}
        />
        <NavBarLoginBtn handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default NavBarDesktopView;
