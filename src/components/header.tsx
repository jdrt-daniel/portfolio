"use client";
import { Book, Grid2x2, Home, UserCircle } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Navbutton } from "./navbutton";
import { SwitchDarkMode } from "./switch-darkmode";
import { Typography } from "./typography";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";

import { useMediaQueries } from "@/lib/useMediaQuery";
import useOrbStore from "@/stores/orbStore";
import { useState } from "react";
import { Link } from "react-scroll";
import { Button } from "./ui/button";

export const AppHeader = () => {
  const mobile = useIsMobile();

  const orbVisible = useOrbStore((state) => state.orbVisible);
  const setOrbVisible = useOrbStore((state) => state.setOrbVisible);

  const [currentSection, setCurrentSection] = useState("home");

  const { lg, xl, xxl } = useMediaQueries();

  return (
    <nav
      id="main-header"
      className={`flex h-20 items-center justify-between px-3 fixed lg:w-full 
        z-10
        bg-transparent
        ${mobile ? "bottom-0" : "top-0"}
       `}
    >
      <div className="hidden lg:flex items-center gap-2 min-w-[150px] justify-center">
        <Typography
          variant="p"
          color="primary"
          size="sm"
          weight="extrabold"
          className="hidden lg:block"
        >
          Bolivia
        </Typography>
      </div>
      {/* Center section */}
      <div className="flex items-center mx-auto">
        <div className="flex items-center justify-between space-x-2 p-1 border-1 bg-white dark:border-gray-200/50 dark:bg-black/50 shadow-md rounded-full backdrop-blur-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setCurrentSection("home")}
          >
            <Navbutton isActive={currentSection === "home"} icon={<Home />} />
          </Link>
          <div className="h-6 mr-2">
            <Separator
              orientation="vertical"
              className="dark:bg-gray-100 bg-gray-300"
            />
          </div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setCurrentSection("about")}
          >
            <Navbutton
              isActive={currentSection === "about"}
              icon={<UserCircle />}
              text="about"
            />
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setCurrentSection("skills")}
          >
            <Navbutton
              isActive={currentSection === "skills"}
              icon={<Book />}
              text="skills"
            />
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setCurrentSection("projects")}
          >
            <Navbutton
              isActive={currentSection === "projects"}
              icon={<Grid2x2 />}
              text="projects"
            />
          </Link>
          {!lg && !xl && !xxl && (
            <>
              <div className="h-6 xl:hidden lg:hidden">
                <Separator
                  orientation="vertical"
                  className="dark:bg-gray-100 bg-gray-300"
                />
              </div>
              <Button asChild>
                <SwitchDarkMode />
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Right section */}
      <div className="hidden lg:flex items-center gap-2 min-w-[150px] justify-end">
        <Switch
          onCheckedChange={(value) => setOrbVisible(value)}
          checked={orbVisible}
        />
        <div className="hidden lg:block">
          <SwitchDarkMode />
        </div>
      </div>
    </nav>
  );
};
