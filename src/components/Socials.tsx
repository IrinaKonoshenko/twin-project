import { ReactElement } from "react";
import { Typography } from "./Typography";

interface SocialsProps {
  leftElement?: ReactElement;
  label: string;
}

export function Socials({ leftElement, label }: SocialsProps) {
  return (
    <div className="flex gap-1 items-center">
      {leftElement && <div className="p-0.5">{leftElement}</div>}
      <Typography className="text-normal">{label}</Typography>
    </div>
  );
}
