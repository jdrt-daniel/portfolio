import React from "react";

export const AppFooter = () => {
  return (
    <footer className="static bottom-0">
      <div className="mx-auto flex h-12 w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 py-10 text-center text-muted-foreground">
        <p className="text-sm">
          Made with ❤️ by{" "}
          <a
            className="font-bold"
            href="https://twitter.com/danielfsousa"
            target="_blank"
            rel="noreferrer"
          >
            Daniel Sousa
          </a>
        </p>
        <p className="text-sm">
          <a
            className="font-bold"
            href="https://github.com/danielfsousa/portfolio-nextjs"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};
