"use client";

import { Element } from "react-scroll";
import { Presentations } from "./sections/presentations";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";
import { About } from "./sections/about";
import { Experience } from "./sections/experience";

export default function Home() {
  return (
    <div className="h-screen relative">
      <Element
        name="home"
        className="lg:py-10 w-full lg:w-[60%] xl:w-[50%] mx-auto p-6"
      >
        <Presentations />
      </Element>
      <Element
        name="about"
        className="sm:py-5 lg:py-5 w-full lg:w-[60%] xl:w-[50%] mx-auto p-6"
      >
        <About />
        <br />
        <br />
        <Experience />
      </Element>

      {/* <Element
        name="experience"
        className="sm:py-10 lg:py-10 w-full lg:w-[60%] xl:w-[50%] mx-auto p-6"
      >
       
      </Element> */}

      <Element
        name="skills"
        className="sm:py-5 lg:py-10 w-full lg:w-[60%] xl:w-[50%] mx-auto p-6"
      >
        <Skills />
      </Element>

      <Element
        name="projects"
        className="sm:py-5 lg:py-10 w-full lg:w-[60%] xl:w-[50%] mx-auto p-6"
      >
        <Projects />
      </Element>
    </div>
  );
}
