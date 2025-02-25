import { ReactNode } from "react";
import { Typography } from "./Typography";

interface SelectProps {
  label: string;
  elementRight?: ReactNode;
  className?: string;
}

export function Select({ label, elementRight }: SelectProps) {
  return (
    <div className="flex gap-1 items-center ring ring-border-off rounded-lg p-1.5 pl-3 ">
      {label && <Typography className="text-normal">{label}</Typography>}
      {elementRight && (
        <div className="w-6 h-6 flex justify-center items-center">
          {elementRight}
        </div>
      )}
    </div>
  );
}
