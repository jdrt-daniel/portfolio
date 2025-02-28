import { Typography } from "@/components";
import { Button } from "@/components/ui/button";
import { useMediaQueries } from "@/lib/useMediaQuery";
import Image from "next/image";

export const Presentations = () => {
  const { sm, xs } = useMediaQueries();

  return (
    <div className="h-full md:flex lg:flex mt:mt-10 sm:mt-10">
      <div className="flex items-center mt-10 justify-center">
        <Image
          src="https://avatars.githubusercontent.com/u/10197331?v=4"
          alt="Daniel"
          width={sm || xs ? 150 : 200}
          height={sm || xs ? 150 : 200}
          className="rounded-full"
        />
      </div>
      <div className="mt-10 md:ml-10 lg:ml-10 xl:ml-20">
        <Typography
          variant="h1"
          color="primary"
          size="lg"
          weight="normal"
          className="animate-fade-left animate-once mb-5 lg:text-5xl text-center lg:text-left"
        >
          Full-Stack Developer
        </Typography>

        <Typography
          variant="h4"
          color="primary"
          size="lg"
          weight="normal"
          className="flex-col animate-fade-left animate-once text-normal  text-center lg:text-left"
        >
          I&rsquo;m Daniel, a Full-Stack Developer with over 3 years of
          experience
        </Typography>
        <div className="flex gap-2 mt-4 justify-center lg:justify-start">
          <Button>Get in touch</Button>
          <Button className="bg-emerald-800 hover:bg-emerald-700 dark:text-white">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};
