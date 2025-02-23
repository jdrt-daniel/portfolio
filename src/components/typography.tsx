import React from "react";

interface Props {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  children: React.ReactNode;
  color?: "primary" | "secondary" | "muted" | "accent" | "base";
  size?: "sm" | "md" | "lg";
  weight?: "normal" | "bold" | "extrabold" | "black";
  transform?: "none" | "uppercase" | "lowercase" | "capitalize";
}

export const Typography = ({
  variant,
  className,
  children,
  color = "base",
  size,
  weight,
  transform,
}: Props) => {
  return (
    (variant === "h1" && (
      <h1
        className={`${className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
      >
        {children}
      </h1>
    )) ||
    (variant === "h2" && (
      <h2
        className={`${className}  scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl`}
      >
        {children}
      </h2>
    )) ||
    (variant === "h3" && (
      <h3
        className={`${className} scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl`}
      >
        {children}
      </h3>
    )) ||
    (variant === "h4" && (
      <h4
        className={`${className} scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl`}
      >
        {children}
      </h4>
    )) ||
    (variant === "h5" && (
      <h5
        className={`${className} scroll-m-20 text-2xl font-semibold tracking-tight lg:text-1xl`}
      >
        {children}
      </h5>
    )) ||
    (variant === "h6" && (
      <h6
        className={`${className} ${color ? `text-${color}` : ""} ${
          size ? `text-${size}` : ""
        } ${weight ? `font-${weight}` : ""} ${
          transform ? `text-${transform}` : ""
        }`}
      >
        {children}
      </h6>
    )) ||
    (variant === "p" && (
      <p
        className={`${className} ${color ? `text-${color}` : ""} ${
          size ? `text-${size}` : ""
        } ${weight ? `font-${weight}` : ""} ${
          transform ? `text-${transform}` : ""
        }`}
      >
        {children}
      </p>
    )) ||
    (variant === "span" && (
      <span
        className={`${className} ${color ? `text-${color}` : ""} ${
          size ? `text-${size}` : ""
        } ${weight ? `font-${weight}` : ""} ${
          transform ? `text-${transform}` : ""
        }`}
      >
        {children}
      </span>
    ))
  );
};
