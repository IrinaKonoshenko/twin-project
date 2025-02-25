import clsx from "clsx";
import { Icon } from "./icon/Icon";
import { Typography } from "./Typography";

interface CheckboxProps {
  value: boolean;
  label: string;
  disabled?: boolean;
  invalid?: boolean;
  onChange: () => void;
}

export function Checkbox({
  value,
  disabled,
  label,
  invalid,
  onChange,
}: CheckboxProps) {
  return (
    <div
      className={clsx("inline-flex gap-2 group select-none", {
        "cursor-not-allowed": disabled,
        "cursor-pointer": !disabled,
      })}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={clsx(
          "mt-1 border border-border-off rounded-[3px] w-4 h-4 shrink-0 justify-center items-center flex transition",
          {
            "bg-disabled": disabled && !value,
            "bg-border-off": disabled && value,
            "group-hover:border-secondary": !disabled && !invalid,
            "bg-secondary border-secondary": value && !disabled,
            "border-pink bg-pink/10": invalid,
          }
        )}
      >
        {value && <Icon size="9" icon="check" className="text-white" />}
      </div>
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
