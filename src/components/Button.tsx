import { ReactElement } from "react";

interface ButtonProps {
  text: string;
  color?: "blue" | "green";
  leftElement?: ReactElement;
  fill?: boolean;
  type?: "circle" | "rectangle";
  thin?: boolean;
  onClick?: () => void;
}
