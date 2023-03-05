import React from "react";

const Button = ({
  children,
  primary,
  disabled,
  primaryLight,
  primaryDark,
  secondary,
  onClick,
}) => {
  // Primary
  //  1.Light
  //  2.Dark
  // Secondary
  let dynamicClass;
  if (primaryLight) {
    dynamicClass =
      "bg-transparent border-2 border-white hover:bg-white text-white hover:text-[var(--dark-green)] disabled:opacity-[0.25] disabled:mix-blend-normal";
  }
  if (primaryDark) {
    dynamicClass =
      "border-2 border-[var(--sacramento-state-green)] text-[var(--sacramento-state-green)] hover:bg-[var(--sacramento-state-green)] hover:text-white disabled:border-white disabled:opacity-[.25] disabled:mix-blend-normal";
  }
  if (secondary) {
    dynamicClass =
      "bg-white text-[var(--dark-green)] border-2  hover:bg-[var(--rapture-blue)] hover:text-[var(--dark-green)] hover:border-[var(--rapture-blue)] disabled:opacity-[.25] disabled:mix-blend-normal";
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` ${dynamicClass}  border-solid  cursor-pointer font-bold  border-[2px] py-3 px-8 rounded-full whitespace-nowrap `}
    >
      {children}
    </button>
  );
};

export default Button;
