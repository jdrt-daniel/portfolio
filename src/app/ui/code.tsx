import React from "react";

export const CodeSection = () => {
  const coder = {
    name: "Daniel",
    company: "Coder",
    location: "Bolivia",
    followers: 100,
    following: 100,
    repositories: 100,
    skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "Node.js"],
    hireable: true,
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-6 font-mono shadow-2xl">
      {/* Window Controls */}
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Code Content */}
      <div className="text-gray-300 text-sm relative">
        <div
          className="absolute left-0 top-0 text-gray-500 pr-4 text-right select-none"
          style={{ width: "40px" }}
        >
          {Array.from({ length: 13 }, (_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <div className="pl-12 pb-5">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">coder</span>{" "}
          <span className="text-purple-400">=</span>{" "}
          <span className="text-yellow-400">{"{"}</span>
          <div className="ml-4">
            <div>
              <span className="text-green-400">name</span>:{" "}
              <span className="text-red-300">&apos;{coder.name}&apos;</span>,
            </div>
            <div>
              <span className="text-green-400">company</span>:{" "}
              <span className="text-red-300">&apos;{coder.company}&apos;</span>,
            </div>
            <div>
              <span className="text-green-400">location</span>:{" "}
              <span className="text-red-300">&apos;{coder.location}&apos;</span>
              ,
            </div>
            <div>
              <span className="text-green-400">followers</span>:{" "}
              <span className="text-cyan-400">147</span>,
            </div>
            <div>
              <span className="text-green-400">following</span>:{" "}
              <span className="text-cyan-400">8</span>,
            </div>
            <div>
              <span className="text-green-400">repositories</span>:{" "}
              <span className="text-cyan-400">86</span>,
            </div>

            <div>
              <span className="text-green-400">skills</span>:
              <span className="text-yellow-400">[</span>
            </div>
            <div className="ml-4">
              <span className="text-red-300">&apos;React&apos;</span>,{" "}
              <span className="text-red-300">&apos;NextJS&apos;</span>,
              <span className="text-red-300">&apos;Redux&apos;</span>,{" "}
              <span className="text-red-300">&apos;Express&apos;</span>,
              <br />
              <span className="text-red-300">&apos;NestJS&apos;</span>,{" "}
              <span className="text-red-300">&apos;MySql&apos;</span>,
              <span className="text-red-300">&apos;MongoDB&apos;</span>,{" "}
              <span className="text-red-300">&apos;Postgres&apos;</span>,
              <br />
              <span className="text-red-300">&apos;Docker&apos;</span>,{" "}
              <span className="text-red-300">&apos;AMS&apos;</span>
            </div>
            <div>
              <span className="text-yellow-400">]</span>,
            </div>

            <div>
              <span className="text-green-400">hireable</span>:{" "}
              <span className="text-purple-400">true</span>
            </div>
          </div>
          <span className="text-yellow-400">{"}"}</span>
          <span className="text-purple-400">;</span>
        </div>
      </div>
    </div>
  );
};
