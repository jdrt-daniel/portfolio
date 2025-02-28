import Image from "next/image";
import React from "react";

interface ExperienceItemProps {
  name: string;
  description: string;
  image: string;
  initialDate?: string;
  endDate?: string;
  location: string;
  technologies: string[];
}

export const ExperienceItems = (experience: ExperienceItemProps) => {
  return (
    <div className="flex items-start gap-4 border-b pb-4">
      <Image
        src={experience.image}
        alt="Atomic Finance"
        width={8}
        height={8}
        className="h-12 w-12 rounded-full object-contain bg-white"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-sm">{experience.name}</h3>
            <p className="text-xs mt-1 dark:text-white/80">
              {experience.description}
            </p>
          </div>
          <span className="text-muted-foreground text-right text-xs  hidden md:block">
            {experience.location}
          </span>
          <span className="text-muted-foreground text-right text-xs">
            {experience.initialDate} - {experience.endDate}
          </span>
        </div>
      </div>
      {/* <div className="flex gap-2 mt-2">
        {experience.technologies.map((technology) => (
          <div
            key={technology}
            className="rounded-full bg-primary-500 px-2 py-1 text-xs text-white"
          >
            {technology}
          </div>
        ))}
      </div> */}
    </div>
  );
};
