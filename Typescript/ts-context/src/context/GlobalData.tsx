import { createContext, useState, useEffect } from "react";
import { myProps } from "../config/Types";
import axios from "axios";

interface TypesChildrenProps {
  children: JSX.Element;
}

interface TypesContext {
  data: myProps[];
  setData: React.Dispatch<React.SetStateAction<myProps[]>>;
}

export const GlobalState = createContext<TypesContext>({
  data: [],
  setData: () => {},
});

export const Provider = ({ children }: TypesChildrenProps) => {
  const [data, setData] = useState<myProps[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <GlobalState.Provider value={{ data, setData }}>
      {children}
    </GlobalState.Provider>
  );
};
