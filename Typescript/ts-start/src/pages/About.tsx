import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
import { myProps } from "../config/Types";

const About = () => {
  const [data, setData] = useState<myProps[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data.products);
      })
      .catch((err) => console.log(err));
  });

  let a: "qirmizi" | "goy";
  a = "s";

  type myType = {
    role: "admin" | "guest";
  };

  return (
    <>
      {data.map((item: myProps, index: number) => {
        return <SingleCard product={item} />;
      })}
    </>
  );
};

export default About;
