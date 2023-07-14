import { useCallback, useMemo, useState } from "react";
import Test from "../components/Test";

const Home = () => {
  // useMemo, useCallback, React Memo

  const [price, setPrice] = useState(10);

  const [count, setCount] = useState(1);

  const Total = () => {
    console.log("Total function is running");
    return price * 5;
  };

  const sampleFunction = useCallback(() => {}, []);

  const memoizedFunction = useMemo(() => Total(), [price]);

  return (
    <div>
      <p>Count : {count}</p>
      <p>Price : {price}</p>
      <button onClick={() => setPrice(price + 1)}>ADD PRICE</button>
      <button onClick={() => setCount(count + 1)}>ADD COUNT</button>

      <p>Total price : {memoizedFunction}</p>

      <Test sampleFunction={sampleFunction} />
    </div>
  );
};

export default Home;
