"use client";
import { useState, useEffect, useRef } from "react";

const CIRCLE_CONFIG = [
  { size: "w-[30vmin] h-[30vmin]", blur: "blur-3xl", duration: "duration-100" },
  { size: "w-[30vmin] h-[35vmin]", blur: "blur-3xl", duration: "duration-300" },
  { size: "w-[35vmin] h-[35vmin]", blur: "blur-3xl", duration: "duration-500" },
  {
    size: "w-[50vmin] h-[50vmin]",
    blur: "blur-[100px]",
    duration: "duration-700",
  },
  {
    size: "w-[70vmin] h-[70vmin]",
    blur: "blur-[100px]",
    duration: "duration-900",
  },
  {
    size: "w-[100vmin] h-[100vmin]",
    blur: "blur-[100px]",
    duration: "duration-1000",
  },
];

export default function CursorOrb() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offsets, setOffsets] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calcular offsets basados en el tamaño del viewport
  useEffect(() => {
    const calculateOffsets = () => {
      const viewportSize = Math.min(window.innerWidth, window.innerHeight);
      return CIRCLE_CONFIG.map((config) => {
        const sizeValue = parseInt(config.size.split("[")[1].split("vmin]")[0]);
        return ((sizeValue / 100) * viewportSize) / 2;
      });
    };

    setOffsets(calculateOffsets());

    const handleResize = () => setOffsets(calculateOffsets());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="">
      {CIRCLE_CONFIG.map((config, index) => (
        <div
          key={index}
          style={{
            transform: `translate(
              ${position.x - (offsets[index] || 0)}px, 
              ${position.y - (offsets[index] || 0)}px
            )`,
            zIndex: -1,
          }}
          className={`
            fixed rounded-full pointer-events-none
            dark:bg-cyan-800/30 bg-cyan-900/10 transition-all ease-out
            ${config.size}
            ${config.blur}
            ${config.duration}
            left-0 top-0
          `}
        />
      ))}
    </div>
  );
}
