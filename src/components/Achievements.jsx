import React from "react";
import { featuers } from "../constants";

const Achievements = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:flex-row my-10">
      <div className="w-full lg:w-1/2">
        <h1 className="text-[#4D4D4D] text-2xl md:text-4xl font-semibold font-Roboto mb-2">
          Helping a local <br />
          <span className="text-primary">business reinvent itself</span>
        </h1>
        <p className="text-gray-600 text-sm font-Roboto font-normal mb-5">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuers.map((items) => {
            return (
              <div
                key={items.id}
                className="flex items-center justify-start gap-2 w-full"
              >
                <div>
                  <img
                    src={items.icon}
                    alt="icon"
                    className="w-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-[#4D4D4D] text-xl font-semibold font-Roboto">
                    {items.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-Roboto font-normal">
                    {items.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
