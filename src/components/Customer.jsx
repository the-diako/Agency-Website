import React from "react";
import Button from "./Button";

const Customer = () => {
  return (
    <div className="mt-10 py-28 w-full flex flex-col items-center justify-center text-center gap-6">
      <h1
        className="font-bold font-Roboto text-[#4D4D4D] 
        text-[30px] 
        md:text-[45px] 
        lg:text-[55px]
        xl:text-[85px]
      "
      >
        Pellentesque suscipit
        <br />
        fringilla libero eu.
      </h1>
      <Button title="Get a Demo" />
    </div>
  );
};

export default Customer;
