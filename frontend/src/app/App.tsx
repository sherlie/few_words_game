import { useState, type FC } from "react";
import { Word } from "../entities/Word";

const QUESTION = "What is the second planet from the Sun?";

export const App: FC = () => {
  const words = QUESTION.split(" ");
  const [hidden, setHidden] = useState<Record<number, boolean>>({});

  console.log(hidden);
  const toggle = (index: number) => {
    setHidden((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {words.map((word, i) => (
        <Word
          word={word}
          onClick={() => toggle(i)}
          hidden={hidden[i]}
        />
      ))}
    </>
  );
};

export default App;
