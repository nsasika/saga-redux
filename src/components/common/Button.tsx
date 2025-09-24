import React from "react";

interface ButtonProps {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label = "",
  onClick,
  disabled = false,
  className = "",
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded bg-white-500 text-black hover:bg-blue-600 disabled:bg-gray-400 ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
