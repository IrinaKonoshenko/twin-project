import clsx from "clsx";
import { Typography } from "./Typography";
import { Icon } from "./icon/Icon";

interface ChipProps {
  value: boolean;
  label: string;
  disabled?: boolean;
  invalid?: boolean;
  onChange: () => void;
}

export function Chip({ value, disabled, label, invalid, onChange }: ChipProps) {
  //box-shadow: 0px 0px 15px 0px rgba(35, 40, 56, 0.2) inset;

  return (
    <div
      className={clsx(
        "flex justify-center items-center gap-1 select-none ring ring-inset rounded-[20px] ring-border-off p-[6px] transition pr-4",
        {
          "cursor-not-allowed bg-[#F8F7FA]": disabled,
          "cursor-pointer bg-[#F8F7FA] active:ring-0 active:shadow-[inset_0_0_15px_rgba(35,40,56,0.2)] active:bg-[#F1EFF5]":
            !disabled,
          "hover:ring-light-green bg-white": value && !disabled && !invalid,
          "hover:ring-[1.5px]": !disabled && !invalid,
          "ring-pink bg-pink/10": invalid,
        }
      )}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="hidden"
      />
      <div className="flex items-center justify-center w-6 h-6">
        <div
          className={clsx(
            "w-[20px] h-[20px] ring ring-inset ring-border-off rounded-full shrink-0 justify-center items-center flex transition",
            {
              "bg-white": !disabled,
              "bg-[#F8F7FA]": disabled,
              "ring-light-green": value && !disabled,
              "ring-1.5": value,
            }
          )}
        >
          {value && (
            <Icon
              size="9"
              icon="check"
              className={clsx({
                "text-light-green": value && !disabled,
                "text-border-off": value && disabled,
              })}
            />
          )}
        </div>
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
