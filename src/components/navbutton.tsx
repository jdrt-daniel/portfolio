"use client";

import React from "react";
import { Button } from "./ui/button";

interface Props {
  isActive?: boolean;
  icon?: React.ReactNode;
  text?: string;
}

export const Navbutton = ({ icon, text, isActive }: Props) => {
  return (
    <Button
      variant="ghost"
      color="primary"
      size="sm"
      className={`
        flex items-center
        h-10 w-10 lg:h-10 lg:w-full rounded-full cursor-pointer dark:hover:bg-gray-200/10 hover:bg-gray-400/20 transition-all ${
          isActive ? "bg-gray-400/20" : ""
        }`}
    >
      {icon}
      {text && <span className="hidden lg:block">{text}</span>}
    </Button>
  );
};
