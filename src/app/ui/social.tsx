import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center gap-3 w-full">
      <Button asChild className="cursor-pointer">
        <Link href="https://github.com/Daniel-Santos-Perez">
          <Github />
        </Link>
      </Button>
      <Button asChild className="cursor-pointer">
        <Link href="https://www.linkedin.com/in/daniel-santos-perez/">
          <Linkedin />
        </Link>
      </Button>
    </div>
  );
};
