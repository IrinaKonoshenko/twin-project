import clsx from "clsx";
import { Typography } from "./Typography";

interface RadioProps {
  value: boolean;
  label: string;
  disabled?: boolean;
  invalid?: boolean;
  onChange: () => void;
}

export function Radio({
  value,
  disabled,
  label,
  invalid,
  onChange,
}: RadioProps) {
  return (
    <div
      className={clsx("inline-flex gap-2 group select-none", {
        "cursor-not-allowed": disabled,
        "cursor-pointer": !disabled,
      })}
    >
      <input
        type="radio"
        checked={value}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={clsx(
          "mt-1 border border-border-off rounded-full w-4 h-4 shrink-0 justify-center items-center flex transition",
          {
            "bg-disabled": disabled,
            "group-hover:border-secondary": !disabled && !invalid,
            "bg-white border-secondary border-[5px]": value && !disabled,
            "border-border-off bg-white border-[5px]": disabled && value,
            "border-pink bg-pink/10": invalid,
          }
        )}
      ></div>
      <Typography
        className={clsx("text-normal", {
          "text-border-off": disabled,
        })}
      >
        {label}
      </Typography>
    </div>
  );
}
