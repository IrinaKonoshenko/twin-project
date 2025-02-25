import clsx from "clsx";
import { Icon } from "./icon/Icon";
import { Typography } from "./Typography";

interface TagProps {
  textTag: string;
  disabled?: boolean;
  onClickRemove?: () => void;
  onClick?: () => void;
}

export function Tag({ textTag, disabled, onClickRemove, onClick }: TagProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "ring rounded-full px-2 inline-flex justify-center items-center gap-1 group transition ring-border-off ring-inset select-none",
        {
          "hover:ring-secondary hover:ring-2 cursor-pointer active:active:shadow-[inset_0_0_10px_rgba(35,40,56,0.18)] active:ring-0":
            !disabled,
          "cursor-not-allowed": disabled,
        }
      )}
    >
      <Typography
        className={clsx("text-small pt-[3px] pb-[5px] transition", {
          "text-secondary": !!onClick,
          "group-hover:text-secondary active:text-black-text/70": !disabled,
          "text-black-text/20": disabled,
        })}
      >
        {textTag}
      </Typography>
      {onClickRemove && (
        <button
          onClick={onClickRemove}
          className={clsx(
            "w-4 h-4 flex justify-center items-center text-input-label",
            {
              "cursor-not-allowed": disabled,
              "cursor-pointer": !disabled,
            }
          )}
        >
          <Icon icon="cross" size="16" />
        </button>
      )}
    </div>
  );
}
