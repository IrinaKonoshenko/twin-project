import clsx from "clsx";
import { Typography } from "./Typography";

interface StatusProps {
  text: string;
  color?: "green" | "red";
}

export function Status({ text, color = "green" }: StatusProps) {
  return (
    <div
      className={clsx("rounded-[30px] px-2 py-1", {
        "bg-[#71CA00]": color === "green",
        "bg-[#F23F3F]": color === "red",
      })}
    >
      <Typography className="text-small text-white font-medium">
        {text}
      </Typography>
    </div>
  );
}
