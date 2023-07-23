import React, { useReducer } from "react";
import { AppReducer } from "../features/AppReducer";
import axios from "axios";

const MyTest = () => {
  const initialState = {
    data: "",
    loading: "",
    error: "",
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const fetchRandomImage = () => {
    dispatch({ type: "FETCH_START" });
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.data.message);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data.message });
        console.log(state);
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR", payload: "Problem var" });
      });
  };

  return (
    <>
     {state.loading && <p>wait</p>}
      <img src={state.data} alt="" style={{width:'200px'}} />
      <button style={{position:'fixed', top:'40px', left:"200px"}} onClick={fetchRandomImage} disabled={state.loading}>Get Random Image</button>
      {state.error && <p>{state.error}</p>}
    </>
  );
};

export default MyTest;
