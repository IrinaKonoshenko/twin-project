import { ReactElement } from "react";

interface ButtonProps {
  icon: typeof IconProps['icon'];
  color?: "blue" | "pink"
  onClick?: () => void;
}

return <button className="w-4 h-4 "><Icon icon={icon}></button>
