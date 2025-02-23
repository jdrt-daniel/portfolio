import { Typography } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { LogoGithub } from "react-ionicons";

interface Props {
  id: number;
  name: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  technologies: string[];
  stack: string[];
}

export const CardProject = ({ name, description, image, tags, url }: Props) => {
  const { theme } = useTheme();

  return (
    <Card className="hover:shadow-md border-1 rounded-lg hover:scale-102 transition-all h-full flex flex-col">
      <CardHeader className="p-0 relative aspect-video flex-shrink-0">
        <Image
          src={image}
          alt="project-image"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover max-h-[200px] rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-3 flex flex-col flex-1">
        <div className="flex-1">
          {" "}
          {/* Contenedor principal que crece */}
          <Typography variant="h5" className="text-[1rem] font-bold">
            {name}
          </Typography>
          <Typography variant="p" className="mt-1 text-[0.75rem]">
            Jan 2024 - Feb 2024
          </Typography>
          <div className="mt-2 min-h-[30px]">
            {" "}
            {/* Altura mínima para descripción */}
            <Typography
              variant="p"
              color="secondary"
              className="text-slate-600 text-sm text-[0.8rem] font-[500] dark:text-white/80"
            >
              {description}
            </Typography>
          </div>
          <div className="text-pretty font-sans text-sm text-muted-foreground">
            <div className="flex flex-wrap gap-1 mt-3">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="rounded-md">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Contenedor fijo para botones */}
        <div className="mt-1 pt-1 ">
          {" "}
          {/* Borde separador */}
          <div className="flex gap-2">
            <Button
              size="sm"
              className="h-6 text-[10px] cursor-pointer px-2 shadow-md"
              asChild
            >
              <Link href={url}>
                <LogoGithub
                  color={theme == "dark" ? "black" : "#fff"}
                  title={"Source"}
                  height="15px"
                  width="15px"
                />
                Source
              </Link>
            </Button>
            <Button
              size="sm"
              className="h-6 text-[10px] cursor-pointer px-2 shadow-md"
              asChild
            >
              <Link href={url}>Website</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
