"use client";

import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  shadow?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  key?: string;
};

export const Button = ({
  shadow = false,
  className,
  children,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg px-2 py-1 text-white 
        ${shadow ? "shadow-xl shadow-indigo-300" : ""}
        ${disabled ? "cursor-not-allowed bg-indigo-300 hover:bg-indigo-300" : ""} 
        ${className}`}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
};