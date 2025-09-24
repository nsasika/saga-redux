import Link from "next/link";
import { NavBarTitleProps } from "./navBarTypes";

  const NavBarTitle: React.FC<NavBarTitleProps> = ({ title }) => {
    return (
      <div className="flex items-center p-3">
        <Link href="/" className="text-xl font-bold text-gray-800">
          {title}
        </Link>
      </div>
    );
  };

  export default NavBarTitle;