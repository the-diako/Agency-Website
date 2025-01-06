import React from "react";

const SimpleButton = ({ title }) => {
  return (
    <button
      className={`bg-green-500 text-white font-Roboto font-noraml flex items-center justify-between py-2 px-2  rounded-md`}
    >
      {title}
    </button>
  );
};

export default SimpleButton;
