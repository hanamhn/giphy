import React from "react";
import PropTypes from "prop-types";

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
