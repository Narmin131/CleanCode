import React from "react";
import { memo } from "react";
const Test = () => {
  console.log("Test component running");
  return <div>Test</div>;
};

export default memo(Test);
