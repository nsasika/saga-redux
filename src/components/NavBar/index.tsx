"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { NAV_BAR_TITLE_DESKTOP, NAV_BAR_TITLE_MB } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NavBarDesktopView from "./IB/NavBarDesktopView";
import NavBarMBView from "./MB/NavBarMBView";
import NavBarTitle from "./NavBarTitle";

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)"); // Tailwind's `md` breakpoint
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    setIsOpen(false);
  }, [isMobile]);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <NavBarTitle
          title={isMobile ? NAV_BAR_TITLE_MB : NAV_BAR_TITLE_DESKTOP}
        />
        {isMobile ? (
          <NavBarMBView
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            handleLogin={handleLogin}
          />
        ) : (
          <NavBarDesktopView handleLogin={handleLogin} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
