"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export const SwitchDarkMode = () => {
  const { theme, setTheme } = useTheme();

  return theme === "dark" ? (
    <Button
      onClick={() => setTheme("light")}
      variant={"ghost"}
      size="icon"
      className="rounded-full"
    >
      <Sun />
    </Button>
  ) : (
    <Button
      onClick={() => setTheme("dark")}
      variant={"ghost"}
      size="icon"
      className="rounded-full"
    >
      <Moon />
    </Button>
  );
};
