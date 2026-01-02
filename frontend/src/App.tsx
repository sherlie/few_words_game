import type { FC } from "react";

const QUESTION = "What is the second planet from the Sun?"

export const App: FC = () => {
  return (
    <>
      {QUESTION.split(" ").map(word => <p>{word}</p>)}
    </>
  )
}

export default App;
