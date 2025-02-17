"use client";
import React from "react";
import { cn } from "@/lib/utils";

const DarkButton = ({
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
        "cursor-pointer border border-neutral-700 bg-black hover:bg-neutral-800 text-white rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2",
        className
      )}
      {...props}
    >
      <span className="select-none">{icon}</span>
      <span className="select-none">{label}</span>
    </div>
  );
};

export default DarkButton;
