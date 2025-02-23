import { ExperienceItems } from "../ui/experienceItems";

export const Experience = () => {
  const workExperience = [
    {
      id: 1,
      name: "Atomic Finance",
      description: "Bitcoin Protocol Engineer",
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
      name: "Shopify",
      description: "Software Engineer",
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
      id: 3,
      name: "Nvidia",
      description: "Software Engineer",
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
      id: 4,
      name: "Shopify",
      description: "Software Engineer",
      url: "https://github.com/joaopaulo-dev/portfolio-nextjs",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      tags: ["React", "Typescript", "Node.js"],
      stack: ["React", "Next.js", "TailwindCSS", "Typescript", "Node.js"],
    },
  ];

  return (
    <div className="">
      <h5 className="text-2xl font-bold text-left">Work Experience</h5>
      <div className="space-y-6 mt-5">
        {workExperience.map((experience) => (
          <ExperienceItems key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
};
