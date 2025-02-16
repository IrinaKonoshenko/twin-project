interface BotCardProps {
  id: number;
  title: string;
  price?: number;
  rating: number;
  countReviews: number;
  description: string;
  tags: Array<string>;
  socials: Array<string>;
  type: "voice" | "text" | "template";
  isFavorite?: boolean;
  onClickBuy: () => void;
  onClickPlay: () => void;
  onClickReplace: () => void;
  onClickFavorite: () => void;
}
