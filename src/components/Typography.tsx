import clsx from "clsx";
import { ReactNode } from "react";

interface TypographyProps {
  className?: string;
  children: ReactNode;
}

export function Typography({ className, children }: TypographyProps) {
  return <div className={clsx(className, "-translate-y-px")}>{children}</div>;
}
