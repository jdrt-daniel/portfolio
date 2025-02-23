import Image from "next/image";
import React from "react";

export const Skills = () => {
  const skills = [
    {
      name: "React",
      level: "Advanced",
      description:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page applications, mobile applications, and even non-JavaScript applications.",
      url: "https://www.reactjs.org/",
    },
    {
      name: "Nextjs",
      level: "Advanced",
      description:
        "Next.js is a React framework for server-side rendering, static site generation, and more. It is built on top of React and is designed to be easy to use and highly flexible.",
      url: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      level: "Advanced",
      description:
        "Tailwind CSS is a utility-first CSS framework that allows you to style your HTML elements with classes. It provides a set of predefined classes that you can use to quickly build custom designs without having to write any actual CSS code.",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Typescript",
      level: "Advanced",
      description:
        "TypeScript is a superset of JavaScript that adds optional static typing to the language. It is designed to catch errors in the code before it is executed, making it easier to write large-scale applications.",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Nodejs",
      level: "Advanced",
      description:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, enabling you to build scalable and high-performance web applications.",
      url: "https://nodejs.org/en/",
    },
    {
      name: "Nestjs",
      level: "Advanced",
      description:
        "NestJS is a Node.js framework for building efficient, scalable, and reliable server-side applications. It provides a comprehensive solution for building web applications, including RESTful APIs, microservices, and real-time communication.",
      url: "https://nestjs.com/",
    },
    {
      name: "Vuejs",
      level: "Advanced",
      description:
        "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, with a focus on the view layer. Vue.js is known for its simplicity, ease of use, and flexibility.",
      url: "https://vuejs.org/",
    },
    {
      name: "Mongodb",
      level: "Advanced",
      description:
        "MongoDB is a document-oriented NoSQL database that provides high performance, high availability, and easy scalability. It is a popular choice for building modern web applications and is widely used in the industry.",
      url: "https://www.mongodb.com/",
    },
    {
      name: "Postgresql",
      level: "Advanced",
      description:
        "PostgreSQL is a powerful, open-source relational database management system. It is known for its reliability, scalability, and extensibility. It is widely used in the industry for building modern web applications.",
      url: "https://www.postgresql.org/",
    },
    {
      name: "MySQL",
      level: "Advanced",
      description:
        "MySQL is a widely used open-source relational database management system. It is known for its speed, scalability, and ease of use. It is a popular choice for building modern web applications.",
      url: "https://www.mysql.com/",
    },
    {
      name: "Expressjs",
      level: "Advanced",
      description:
        "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications and APIs. It is designed to be easy to use and to follow the best practices for web development.",
      url: "https://expressjs.com/",
    },
    {
      name: "Socket.io",
      level: "Advanced",
      description:
        "Socket.io is a JavaScript library that enables real-time, bidirectional communication between the server and the client. It is commonly used in web applications to enable features such as chat, live updates, and notifications.",
      url: "https://socket.io/",
    },
    {
      name: "Docker",
      level: "Advanced",
      description:
        "Docker is a platform for building, shipping, and running applications. It provides a set of tools and services that allow you to package and distribute your applications with minimal effort.",
      url: "https://www.docker.com/",
    },
    {
      name: "Git",
      level: "Advanced",
      description:
        "Git is a distributed version control system that allows you to track changes in your code and collaborate with others. It is widely used in the industry for managing and sharing code.",
      url: "https://git-scm.com/",
    },
    {
      name: "Github",
      level: "Advanced",
      description:
        "GitHub is a web-based platform for hosting and collaborating on software projects. It provides a centralized location for developers to store and manage their code, as well as to collaborate on projects.",
      url: "https://github.com/",
    },
    {
      name: "Figma",
      level: "Advanced",
      description:
        "Figma is a web-based design tool that allows you to create, prototype, and share designs. It is widely used in the industry for designing and prototyping user interfaces.",
      url: "https://www.figma.com/",
    },
    {
      name: "laravel",
      level: "Advanced",
      description:
        "Laravel is a PHP web application framework that provides a set of tools and libraries for building web applications. It is designed to be easy to use and to follow the best practices for web development.",
      url: "https://laravel.com/",
    },
    {
      name: "Graphql",
      level: "Advanced",
      description:
        "GraphQL is a query language for APIs that allows clients to request exactly the data they need, reducing the amount of data transferred over the network. It is widely used in the industry for building modern web applications.",
    },
    {
      name: "Quasar",
      level: "Advanced",
      description:
        "Quasar is a free and open-source framework for building high-performance, cross-platform mobile apps. It provides a set of tools and libraries for building native mobile applications using web technologies.",
      url: "https://quasar.dev/",
    },
    {
      name: "Astro",
      level: "Advanced",
      description:
        "Astro is a free and open-source framework for building high-performance, cross-platform web apps. It provides a set of tools and libraries for building modern web applications using web technologies.",
      url: "https://astro.build/",
    },
  ];

  return (
    <div>
      <div className="">
        <h5 className="text-2xl font-bold text-left">Skills</h5>
        <p className="mt-2">Entre mis habilidades más destacadas están:</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-2 mt-10 ">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center rounded-md border-1 p-2 shadow-sm"
          >
            <div className="flex items-center justify-center">
              <Image
                src={`https://img.icons8.com/color/100/${skill.name.toLowerCase()}`}
                alt={skill.name}
                width={10}
                height={10}
                className="w-10 h-10 rounded-full"
              />
            </div>
            <h2 className="text-sm font-bold mt-2">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
