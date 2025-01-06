import React from "react";
import SimpleButton from "./SimpleButton";
import { features } from "../assets";

const Unlock = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse items-center ">
      <div className="flex flex-col items-start mb-5 w-full lg:w-1/2">
        <h1 className="text-[#4D4D4D] font-semibold font-Roboto text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3">
          The unseen of spending three <br />
          years at Pixelgrade
        </h1>
        <p className="font-Roboto font-normal text-gray-600 text-sm mb-3 max-w-[560px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <SimpleButton title="Learn More" />
      </div>

      <div className="mb-5 w-full lg:w-1/2">
        <img
          src={features}
          alt="features icon"
          className="w-full mx-auto object-contain lg:w-[80%]"
        />
      </div>
    </div>
  );
};

export default Unlock;
