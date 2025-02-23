import Image from "next/image";
import React from "react";

interface ExperienceItemProps {
  name: string;
  description: string;
  url: string;
  image: string;
}

export const ExperienceItems = (experience: ExperienceItemProps) => {
  return (
    <div className="flex items-start gap-4 border-b pb-4">
      <Image
        src={"https://avatars.githubusercontent.com/u/10197331?v=4"}
        alt="Atomic Finance"
        width={8}
        height={8}
        className="h-12 w-12 rounded-full object-contain"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-sm">{experience.name}</h3>
            <p className="text-xs mt-1 dark:text-white/80">
              {experience.description}
            </p>
          </div>
          <span className="text-muted-foreground text-right text-xs">
            May 2021 - Oct 2022
          </span>
        </div>
      </div>
    </div>
  );
};
