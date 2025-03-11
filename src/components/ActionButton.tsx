import { Icon, IconProps } from "./icon/Icon";
import clsx from "clsx";

interface ActionButtonProps {
  icon: IconProps["icon"];
  color?: "blue" | "pink" | "grey";
  onClick?: () => void;
}

export function ActionButton({ icon, color, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-9 h-9 flex justify-center items-center cursor-pointer hover:bg-[#F1EFF5] rounded-lg",
        {
          "text-secondary": color === "blue",
          "text-pink": color === "pink",
          "text-[#F1EFF5] hover:text-pink": color === "grey",
        }
      )}
    >
      <Icon icon={icon} size="24" />
    </button>
  );
}
