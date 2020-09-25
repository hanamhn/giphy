import React from "react";

const Add = ({}) => {
  const handleNext = () => {
    console.log("fucking");
  };
  return (
    <div className="gif-add">
      <button onClick={handleNext}>Add</button>
    </div>
  );
};

export default Add;
