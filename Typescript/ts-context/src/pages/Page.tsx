import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalData";
import SingleCard from "../components/SingleCard";

const Page = () => {
  const { data } = useContext(GlobalState);
  return (
    <div>
      {data.map((item, index) => {
        return <SingleCard product={item} key={index}/>;
      })}
    </div>
  );
};

export default Page;
