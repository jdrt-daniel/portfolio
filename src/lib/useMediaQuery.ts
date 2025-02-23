import { useEffect, useMemo, useState } from "react";

const useMediaQuery = (query: string) => {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
};

export const useMediaQueries = () => {
  const xs = useMediaQuery("(min-width: 350px) and (max-width: 640px)");
  const sm = useMediaQuery("(min-width: 641px) and (max-width: 768px)");
  const md = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const lg = useMediaQuery("(min-width: 1025px) and (max-width: 1280px)");
  const xl = useMediaQuery("(min-width: 1281px) and (max-width: 1536px)");
  const xxl = useMediaQuery("(min-width: 1537px)");

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  };
};
