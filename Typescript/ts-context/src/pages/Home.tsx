import React, { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>reset</button>
    </div>
  );
};

export default Home;
