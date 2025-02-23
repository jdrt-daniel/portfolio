import { CardProject } from "@/app/ui/card-projext";
import { Typography } from "@/components";
import React from "react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Microservicio con Neestjs",
      description: "This is a description of the project 1",
      url: "https://github.com/joaopaulo-dev/portfolio-nextjs",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      tags: ["React", "Typescript", "Node.js"],
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Node.js",
      ],
      stack: ["React", "Next.js", "TailwindCSS", "Typescript", "Node.js"],
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is a description of the project 2",
      url: "https://github.com/joaopaulo-dev/portfolio-nextjs",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      tags: ["React", "Typescript", "Node.js"],
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Node.js",
      ],
      stack: ["React", "Typescript", "Node.js"],
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is a description of the project 3",
      url: "https://github.com/joaopaulo-dev/portfolio-nextjs",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      tags: ["React", "TailwindCSS", "Typescript", "Node.js"],
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Node.js",
      ],
      stack: ["React", "Next.js", "TailwindCSS", "Typescript", "Node.js"],
    },
    {
      id: 4,
      name: "Project 65",
      description: "This is a description of the project 2",
      url: "https://github.com/joaopaulo-dev/portfolio-nextjs",
      image: "https://picsum.photos/id/10/400/300",
      tags: ["React", "Next.js", "TailwindCSS"],
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Node.js",
      ],
      stack: ["Next.js", "TailwindCSS", "Typescript", "Node.js"],
    },
    {
      id: 31,
      name: "Project 65",
      description: "This is a description of the project 2",
      url: "https://github.com/joaopaulo-dev/portfolio-nextjs",
      image: "https://picsum.photos/id/10/400/300",
      tags: ["React", "Next.js", "TailwindCSS"],
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Node.js",
      ],
      stack: ["Next.js", "TailwindCSS", "Typescript", "Node.js"],
    },
  ];

  return (
    <div className="pb-20 sm:pb-10 lg:pb-5">
      <Typography variant="h2" className="text-center my-2">
        My Projects
      </Typography>
      <Typography variant="h6" className="text-center mb-6">
        Ive worked on a lot of projects, here are some of them, feel free to
        check them out
      </Typography>
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        {projects.map((project) => (
          <div
            className="col-span-12 xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3"
            key={project.id}
          >
            <CardProject key={project.id} {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};
