import { ExperienceItems } from "../ui/experienceItems";

export const Experience = () => {
  const workExperience = [
    {
      id: 1,
      name: "Littlehand",
      description: "Fullstack Developer",
      initialDate: "Jan 2018",
      endDate: "Sep 2018",
      location: "Bolivia - Tarija",
      image: "/logos/littlehand_1.webp",
      technologies: ["Boostrap", "Laravel", "Vuejs", "PostgreSQL"],
    },
    {
      id: 2,
      name: "Di Baldi Coworking",
      description: "Fullstack Developer",
      initialDate: "Apr 2019",
      endDate: "Ago 2019",
      location: "Bolivia - Tarija",
      image: "/logos/dibaldi_1.webp",
      technologies: ["Mysql", "Laravel", "Vuejs"],
    },
    {
      id: 3,
      name: "Le Petit K-Boutique",
      description: "Fullstack Developer",
      initialDate: "Apr 2021",
      endDate: "Sep 2021",
      location: "Bolivia - Tarija",
      image: "/logos/lepetit.webp",
      technologies: ["Mysql", "Laravel", "Vuejs", "TailwindCSS"],
    },
    {
      id: 4,
      name: "Wellness Gym & Fitness",
      description: "Fullstack Developer",
      initialDate: "Ago 2021",
      endDate: "Dic 2021",
      location: "Bolivia - Remote",
      image: "/logos/wellness.webp",
      technologies: ["Reactjs", "SpringBoot", "TailwindCSS"],
    },
    {
      id: 5,
      name: "HANSA Automotive",
      description: "Fullstack Developer",
      initialDate: "Feb 2022",
      endDate: "Mar 2023",
      location: "Bolivia - La paz",
      image: "/logos/hansa_automotive.webp",
      technologies: [
        "Microservice",
        "RabbitMQ",
        "Quasar",
        "Vuejs",
        "Scrum",
        "Redis",
        "Docker",
        "MongoDB",
        "JWT",
      ],
    },
    {
      id: 6,
      name: "HANSA Projects & Services",
      description: "Project Manager",
      initialDate: "Apr 2023",
      endDate: "May 2024",
      location: "Bolivia - La paz",
      image: "/logos/hansa_p_s.webp",
      technologies: [
        "Microservice",
        "Scrum",
        "Jira",
        "Confluence",
        "Agile",
        "Kanban",
        "Nestjs",
      ],
    },
    // {
    //   id: 7,
    //   name: "Freelance",
    //   description: "Fullstack Developer",
    //   initialDate: "Oct 2024",
    //   endDate: "Dec 2024",
    //   location: "Bolivia - Remote",
    //   image: "/logos/OPS.webp",
    //   technologies: [
    //     "Microservice",
    //     "Nestjs",
    //     "Python",
    //     "Docker",
    //     "Nextjs",
    //     "Reactjs",
    //     "TailwindCSS",
    //     "Typescript",
    //   ],
    // },
    {
      id: 8,
      name: "OPS (Panamerican Organization of Health)",
      description: "Fullstack Developer",
      initialDate: "Apr 2024",
      endDate: "Feb 2025",
      location: "Bolivia - Remote",
      image: "/logos/ops.webp",
      technologies: [
        "Microservice",
        "Scrum",
        "Jira",
        "CQRS",
        "Docker",
        "Kubernetes",
        "NATS",
        "Nestjs",
        "Nextjs",
        "Reactjs",
        "TailwindCSS",
        "Typescript",
      ],
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
