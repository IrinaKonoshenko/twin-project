import clsx from "clsx";
import { ReactElement } from "react";
import { Typography } from "./Typography";

interface ButtonProps {
  text: string;
  color?: "blue" | "green" | "white";
  borderStyle?: "bold" | "thin" | "no";
  leftElement?: ReactElement;
  rightElement?: ReactElement;
  filled?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  text,
  color,
  borderStyle,
  leftElement,
  rightElement,
  filled,
  rounded,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "ring-inset px-4 py-1.5 flex justify-center items-center transition group",
        {
          "rounded-full": rounded,
          "rounded-lg": !rounded,
        },
        {
          "bg-secondary hover:ring-secondary":
            !disabled && filled && color === "blue",
          "bg-light-green hover:ring-light-green":
            !disabled && filled && color === "green",
          "bg-white hover:ring-white": !disabled && filled && color === "white",
          "cursor-not-allowed bg-disabled": disabled,
          "cursor-pointer": !disabled,
        },
        {
          "ring-secondary":
            !disabled && color === "blue" && borderStyle !== "thin",
          "ring-light-green":
            !disabled && color === "green" && borderStyle !== "thin",
          "ring-white":
            !disabled && color === "white" && borderStyle !== "thin",
          "ring-border-off": disabled,
        },
        {
          "ring-2": borderStyle === "bold",
          "ring ring-border-off": borderStyle === "thin",
          "ring-hidden": borderStyle === "no",
        },
        {
          "flex gap-[11px] items-center": leftElement || rightElement,
        },
        {
          "hover:bg-transparent hover:ring-2": filled && !disabled,
          "hover:bg-secondary": !filled && !disabled && color === "blue",
          "hover:bg-light-green": !filled && !disabled && color === "green",
          "hover:bg-white": !filled && !disabled && color === "white",
        },

        {
          "active:bg-[#F1EFF5] active:ring-0 active:shadow-[inset_0_0_10px_rgba(35,40,56,0.18)]":
            borderStyle === "thin",
          "active:ring-0 active:shadow-[inset_0_0_15px_rgba(35,40,56,0.5)]":
            borderStyle !== "thin" && !disabled,
          "active:bg-secondary":
            borderStyle !== "thin" && color === "blue" && !disabled,
          "active:bg-light-green":
            borderStyle !== "thin" && color === "green" && !disabled,
          "active:bg-white":
            borderStyle !== "thin" && color === "white" && !disabled,
        }
      )}
      onClick={onClick}
    >
      {leftElement && (
        <div
          className={clsx(
            {
              "text-secondary": color === "blue",
              "text-light-green": color === "green",
              "text-white": filled,
              "group-hover:text-secondary":
                color === "blue" && !disabled && filled,
              "group-hover:text-light-green":
                color === "green" && !disabled && filled,

              "group-hover:text-white":
                !disabled && !filled && color !== "white",
              "group-active:text-white":
                borderStyle !== "thin" && !disabled && color !== "white",
              "group-active:text-[#56556E]":
                borderStyle === "thin" && !disabled,
            },
            {
              "text-white": color === "white" && !filled,
              "group-hover:text-secondary":
                !disabled && !filled && color === "white",
              "group-active:text-blue":
                borderStyle !== "thin" && !disabled && color === "white",
            }
          )}
        >
          {leftElement}
        </div>
      )}
      <Typography
        className={clsx(
          "text-header5 transition",
          {
            "text-secondary": color === "blue",
            "text-light-green": color === "green",
            "text-white": filled,
            "group-hover:text-secondary":
              color === "blue" && !disabled && filled,
            "group-hover:text-light-green":
              color === "green" && !disabled && filled,

            "group-hover:text-white": !disabled && !filled && color !== "white",
            "group-active:text-white":
              borderStyle !== "thin" && !disabled && color !== "white",
            "group-active:text-[#56556E]": borderStyle === "thin" && !disabled,
          },
          {
            "text-white": color === "white" && !filled,
            "group-hover:text-secondary":
              !disabled && !filled && color === "white",
            "group-active:text-blue":
              borderStyle !== "thin" && !disabled && color === "white",
          }
        )}
      >
        {text}
      </Typography>
      {rightElement && (
        <div
          className={clsx(
            {
              "text-secondary": color === "blue",
              "text-light-green": color === "green",
              "text-white": filled,
              "group-hover:text-secondary":
                color === "blue" && !disabled && filled,
              "group-hover:text-light-green":
                color === "green" && !disabled && filled,

              "group-hover:text-white":
                !disabled && !filled && color !== "white",
              "group-active:text-white":
                borderStyle !== "thin" && !disabled && color !== "white",
              "group-active:text-[#56556E]":
                borderStyle === "thin" && !disabled,
            },
            {
              "text-white": color === "white" && !filled,
              "group-hover:text-secondary":
                !disabled && !filled && color === "white",
              "group-active:text-blue":
                borderStyle !== "thin" && !disabled && color === "white",
            }
          )}
        >
          {rightElement}
        </div>
      )}
    </button>
  );
}
