import { Typography } from "@/components";
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
          width={sm || xs ? 150 : 300}
          height={sm || xs ? 150 : 300}
          className="rounded-full"
        />
      </div>
      <div className="mt-10 md:ml-10 lg:ml-10 xl:ml-20">
        <Typography
          variant="h1"
          color="primary"
          size="lg"
          weight="normal"
          className="
        
        animate-fade-left animate-once mb-5"
        >
          Hi, I&rsquo;m Daniel
        </Typography>

        <Typography
          variant="p"
          color="primary"
          size="md"
          weight="normal"
          className="
        flex-col
        animate-fade-left animate-once"
        >
          I&rsquo;m a Full-Stack Software Engineer passionate about building
          innovative, scalable, and user-friendly applications. With a strong
          background in computer science and a self-taught mindset, I thrive on
          solving complex problems and continuously learning new technologies.
        </Typography>
      </div>
    </div>
  );
};
