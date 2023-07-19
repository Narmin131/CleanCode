import React from "react";

const Home = () => {
  const myFunc = (a: number, b: number) => {
    console.log("hello");
    return a * b;
  };

  myFunc(3, 5);

  return <div>Home</div>;
};

export default Home;
