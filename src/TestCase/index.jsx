import React, { useState } from "react";
import Button from "./Button";

const TestCase = () => {
  const [count, setCount] = useState(0);

  const incrementCount = (increment) => {
    setCount(count + increment);
  };

  return (
    <>
      <Button increment={1} Azar={incrementCount} />
      <Button increment={10} Azar={incrementCount} />
      <Button increment={100} Azar={incrementCount} />
      <Button increment={1000} Azar={incrementCount} />
      <p>{count}</p>
    </>
  );
};

export default TestCase;
