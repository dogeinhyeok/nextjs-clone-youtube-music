"use client";
import React from "react";
import { cn } from "@/lib/utils";

const WhiteButton = ({
  icon,
  label,
  className,
  ...props
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer bg-white hover:bg-neutral-400 text-black rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span className="select-none">{label}</span>
    </div>
  );
};

export default WhiteButton;
