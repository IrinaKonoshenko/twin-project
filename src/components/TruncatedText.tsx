import clsx from "clsx";

interface TruncatedTextProps {
  text: string;
  maxWords: number;
  className?: string;
}

export function TruncatedText({
  text,
  maxWords,
  className,
}: TruncatedTextProps) {
  if (!text) return null;

  const words = text.trim().split(/\s+/);

  const isTruncated = words.length > maxWords;
  const truncatedText = isTruncated
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
  return <span className={clsx(className)}>{truncatedText}</span>;
}
