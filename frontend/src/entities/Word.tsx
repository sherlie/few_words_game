import type { FC } from "react";
import "./Word.css";

export type WordProps = {
    word: string;
    hidden?: boolean;
    onClick: () => void;
};

export const Word: FC<WordProps> = ({ word, hidden = false, onClick }) => {
  return (
    <div
        onClick={onClick}
        className={`word ${hidden ? "hidden" : ""}`}
    >
        {word}
    </div>
  );
};
