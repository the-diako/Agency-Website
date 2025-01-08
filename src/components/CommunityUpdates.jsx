import React from "react";
import { communityUpdatesData } from "../constants";

const CommunityUpdates = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-12">
      <div className="text-center">
        <h1 className="font-medium font-Roboto text-[#4D4D4D] text-2xl md:text-4xl mb-4 ">
          Caring is the new marketing
        </h1>
        <p className="font-Roboto font-normal text-gray-600 text-sm md:text-[17px] max-w-[610px]">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-28 xl:gap-10">
        {communityUpdatesData.map((cards) => {
          return (
            <div className="relative w-[300px]">
              <img src={cards.image} alt="User" />
              <div
                key={cards.id}
                className="
                absolute 
                bottoml-1/2
                left-1/2
                transform
                -translate-x-1/2
                -translate-y-1/2
                flex 
                flex-col 
                items-center 
                justify-center 
                text-center 
                gap-1 
                shadow-xl 
                rounded-lg 
                p-4
                bg-white
                w-[260px]
                h-[160px]
                "
              >
                <p className="font-Roboto font-normal text-gray-600 text-sm md:text-[17px] max-w-[610px]">
                  {cards.text}
                </p>
                <div>{cards.button}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityUpdates;
