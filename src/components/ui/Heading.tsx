import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className = "",
}: HeadingProps) {
  return (
    <h1
      className={`text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
}