"use client";
import React from "react";

interface TimelineContentProps {
  as?: React.ElementType;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: Record<string, unknown>;
  className?: string;
  children?: React.ReactNode;
}

export function TimelineContent({
  as: Component = "div",
  animationNum = 0,
  className = "",
  children,
}: TimelineContentProps) {
  return (
    <Component
      className={`animate-fade-in ${className}`}
      style={{
        animationDelay: `${animationNum * 70}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </Component>
  );
}
