import { Link } from "react-router-dom";
import { Icon } from "./icon/Icon";
import { Typography } from "./Typography";

interface BackLinkProps {
  link: string;
  text: string;
}

export function BackLink({ link, text }: BackLinkProps) {
  return (
    <div className="flex">
      <Link
        to={link}
        className="flex gap-2 items-center ring ring-transparent rounded-full p-2 hover:ring-secondary"
      >
        <div className="text-secondary">
          <Icon icon="arrowLeft" />
        </div>
        <Typography className="text-header5 text-secondary">{text}</Typography>
      </Link>
    </div>
  );
}
