import React from "react";
import { community } from "../assets";
import { clients } from "../constants";
import Button from "./Button";
import ComplexButton from "./ComplexButton";

const Community = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse items-center my-10">
      <div className="flex flex-col items-start justify-between lg:w-1/2">
        <p className="font-Roboto font-normal text-gray-600 text-sm mb-3 max-w-[560px]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <h4 className="text-primary font-bold font-Roboto text-xl mb-2">
          Tim Smith
        </h4>

        <p className="font-Roboto font-normal text-gray-500 text-sm mb-3 max-w-[560px]">
          British Dragon Boat Racing Association
        </p>

        <div className="flex flex-col items-center justify-center lg:flex-row">
          <ul className="w-full flex items-center justify-evenly">
            {clients.slice(0, -1).map((items) => (
              <li key={items.id}>
                <img src={items.icon} alt="clients" className="w-3/4" />
              </li>
            ))}
            <ComplexButton title="Meet all customers" />
          </ul>
        </div>
      </div>

      <div className="mb-5 w-full lg:w-1/2">
        <img
          src={community}
          alt="features icon"
          className="w-[320px] h-[320px] mx-auto object-contain "
        />
      </div>
    </div>
  );
};

export default Community;
