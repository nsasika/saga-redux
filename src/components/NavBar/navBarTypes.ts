export interface NavBarOption {
  name: string;
  href: string;
}

export type NavBarOptionsProps = {
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
};

export interface NavBarTitleProps {
  title: string;
}

export interface NavBarMBViewProps {
  isOpen: boolean;
  toggleMenu: () => void;
  handleLogin: () => void;
  setIsOpen: (value: boolean) => void;
}

export interface NavBarLoginBtnProps {
  handleLogin: () => void;
}

export interface NavBarDesktopViewProps {
  handleLogin: () => void;
}
