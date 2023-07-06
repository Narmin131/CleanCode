import { useSelector, useDispatch } from "react-redux";
import {
  IncrementFunction,
  DecrementFunction,
  ResetFunction,
} from "./redux/Actions";
import TopToBtn from "./TopToBtn";

const App = () => {
  const counter = useSelector((store) => store.CounterReducer);

  const dispatch = useDispatch();

  return (
    <div>
      <span>{counter}</span>
      <button
        onClick={() => dispatch(IncrementFunction())}
        className="m-2 btn btn-primary"
      >
        +
      </button>
      <button
        onClick={() => dispatch(DecrementFunction())}
        className="m-2 btn btn-primary"
      >
        -
      </button>
      <button
        onClick={() => dispatch(ResetFunction())}
        className="m-2 btn btn-primary"
      >
        reset
      </button>
      <TopToBtn/>
      <section style={{height:'30vh', backgroundColor:'black', margin:'40px'}}></section>
      <section style={{height:'30vh', backgroundColor:'black', margin:'40px'}}></section>
      <section style={{height:'30vh', backgroundColor:'black', margin:'40px'}}></section>
      <section style={{height:'30vh', backgroundColor:'black', margin:'40px'}}></section>
      <section style={{height:'30vh', backgroundColor:'black', margin:'40px'}}></section>
      <section style={{height:'30vh', backgroundColor:'black', margin:'40px'}}></section>
      <section style={{height:'30vh', backgroundColor:'black', margin:'40px'}}></section>
      <section style={{height:'30vh', backgroundColor:'black', margin:'40px'}}></section>
    </div>
  );
};

export default App;
