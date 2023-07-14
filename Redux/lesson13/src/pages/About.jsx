import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const About = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.AppReducer);
  return (
    <div>
      <span>{counter}</span>
      <button
        onClick={() => dispatch(increment())}
        className=" m-2 btn btn-success"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className=" m-2 btn btn-primary"
      >
        -
      </button>
      <button
        onClick={() => dispatch(reset())}
        className=" m-2 btn btn-warning"
      >
        reset
      </button>
    </div>
  );
};

export default About;
