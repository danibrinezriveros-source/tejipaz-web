import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({
  children,
  className = "",
}: TextProps) {
  return (
    <p
      className={`text-lg leading-8 text-stone-600 ${className}`}
    >
      {children}
    </p>
  );
}