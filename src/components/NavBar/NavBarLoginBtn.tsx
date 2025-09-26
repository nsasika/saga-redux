"use client";
import { LOGIN_TEXT } from "@/utils/constants";
import { NavBarLoginBtnProps } from "./navBarTypes";
import Button from "../common/Button";

const NavBarLoginBtn = ({ handleLogin }: NavBarLoginBtnProps) => (
  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    <Button
      label={LOGIN_TEXT}
      onClick={handleLogin}
      className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 text-center"
    />
  </div>
);

export default NavBarLoginBtn;
