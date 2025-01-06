import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-12">
      <div className="text-center">
        <h1 className="font-medium font-Roboto text-[#4D4D4D] text-2xl md:text-4xl mb-4 ">
          Manage your entire community
          <br className="hidden md:block" />
          in a single system
        </h1>
        <p className="font-Roboto font-normal text-gray-600 text-sm md:text-lg">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((cards) => {
          return (
            <div
              key={cards.id}
              className="flex flex-col items-center justify-center gap-2 text-center shadow-xl rounded-lg p-5"
            >
              <img src={cards.icon} alt="services" />
              <h4 className="font-medium font-Roboto text-[#4D4D4D] text-2xl">
                {/* {cards.title} */}

                {cards.title.split("<br />").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < cards.title.split("<br />").length - 1 && <br />}
                  </span>
                ))}
              </h4>
              <p className="max-w-[280px] text-center text-gray-600 text-sm ">
                {cards.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
