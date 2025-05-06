
import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function GradientButton({
  children,
  onClick,
  type = "button",
  className = "",
}: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-primary ${className}`}
    >
      {children}
    </button>
  );
}
