import clsx from "clsx";
import { Typography } from "./Typography";
import { ChangeEventHandler, ReactNode } from "react";

interface TextareaProps {
  value: string;
  placeholder: string;
  label?: string;
  error?: boolean | string;
  disabled?: boolean;
  elementLeft?: ReactNode;
  elementRight?: ReactNode;
  className?: string;
  rows?: number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export function Textarea({
  value,
  placeholder,
  label,
  error,
  disabled,
  elementLeft,
  elementRight,
  className,
  rows,
  onChange,
}: TextareaProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 group w-full",
        {
          "cursor-not-allowed": disabled,
        },
        className
      )}
    >
      {label && (
        <Typography className="text-input-label text-small">{label}</Typography>
      )}
      <div className="relative w-full">
        {elementLeft && (
          <div
            className={clsx(
              "absolute left-1.5 top-1.5 flex items-center justify-center w-6 h-6",
              {
                "text-secondary": !disabled && !error,
                "text-border-off": disabled,
                "text-pink": error,
              }
            )}
          >
            {elementLeft}
          </div>
        )}
        <textarea
          disabled={disabled}
          onChange={onChange}
          rows={rows}
          className={clsx(
            "w-full min-h-[72px] ring ring-inset ring-border-off rounded-lg py-1.5 pl-3 pr-2 text-normal placeholder:text-border-off outline-none transition disabled:bg-disabled disabled:cursor-not-allowed",
            {
              "ring-pink bg-pink/10 group-hover:ring-pink focus:ring-pink":
                error,
              "group-hover:ring-secondary focus:ring-secondary focus:ring-2":
                !error && !disabled,
              "pl-[34px]": !!elementLeft,
              "pr-[34px]": !!elementRight,
            }
          )}
          placeholder={placeholder}
          value={value}
        />
        {elementRight && (
          <div
            className={clsx(
              "absolute right-1.5 top-1.5 flex items-center justify-center w-6 h-6",
              {
                "text-secondary": !disabled && !error,
                "text-border-off": disabled,
                "text-pink": error,
              }
            )}
          >
            {elementRight}
          </div>
        )}
      </div>
      {error && typeof error === "string" && (
        <Typography className="text-very-small text-pink">{error}</Typography>
      )}
    </div>
  );
}
