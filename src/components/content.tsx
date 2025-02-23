"use client";

import useOrbStore from "@/stores/orbStore";
import React, { useEffect, useState } from "react";
import CursorOrb from "./cursor";
import { AppHeader } from "./header";

export const Content = ({ children }: { children: React.ReactNode }) => {
  const orbVisible = useOrbStore((state) => state.orbVisible);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`flex h-screen flex-col justify-between items-center`}>
      {orbVisible && <CursorOrb />}
      <AppHeader />
      <div className="mx-auto">{children}</div>
    </div>
  );
};
