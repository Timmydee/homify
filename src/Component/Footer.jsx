import React from "react";
import homifys from "../assets/bestcriblogo.webp";
import { BiPhoneCall } from "react-icons/bi";
import {CiMail  } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#ede1e1]">
      <div className="lg:mx-[5rem] mx-6 py-8 flex lg:flex-row flex-col justify-evenly items-start">
        <div>
          <div className="lg:mt-0">
            <img
              src={homifys}
              className="h-17 cursor-pointer lg:w-[180px] w-[100px]"
            />
          </div>
          <p className="text-1xl md:text-1.5xl font-display md:w-[70%] text-[#808080] font-md md:text-start pt-4 lg:pt-8 pb-3 lg:pb-6">
            2728 Hickory StreetSalt Lake City, UT 84104
          </p>
          <div className="flex space-x-2 items-center pb-2">
            <div>
              <BiPhoneCall size={20} color="red" />
            </div>
            <div>
              <p className="text-[13px] md:text-[13px] font-display text-[#808080] font-sm md:text-start">
              +1 206-214-2298
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div>
              <CiMail size={20} color="red" />
            </div>
            <div>
              <p className="text-[13px] md:text-[13px] font-display text-[#808080] font-sm md:text-start">
              support@rezilla.com
              </p>
            </div>
          </div>
        </div>

        <div>
        <h4 className="font-bold font-display text-xl md:text-start md:text-xl text-[#091638] pb-2 lg:pb-4 lg:pt-0 pt-5">
        Quick Links
          </h4>
          <p className="text-1xl md:text-[16px] font-display lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3">
            Home
          </p>
          <p className="text-1xl md:text-[16px] font-display lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3">
            About
          </p>
          <p className="text-1xl md:text-[16px] font-display lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3">
            Listing
          </p>
          <p className="text-1xl md:text-[16px] font-display lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3">
            Blog
          </p>
          <p className="text-1xl md:text-[16px] font-display lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3">
            Services
          </p>
          <p className="text-1xl md:text-[16px] font-display lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3">
            Become an Agent
          </p>
        </div>
        <div>
        <h4 className="font-bold font-display text-xl md:text-start md:text-xl text-[#091638] pb-2 lg:pb-4 lg:pt-0 pt-3">
        Discovery
          </h4>
          <p className="text-1xl cursor-pointer md:text-[16px] font-display lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3">
            Lagos
          </p>
          <p className="text-1xl md:text-[16px]cursor-pointer   font-display lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3 ">
            Abuja
          </p>
          <p className="text-1xl md:text-[16px] font-display cursor-pointer  lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3">
            Kaduna
          </p>
          <p className="text-1xl md:text-[16px] font-display lg:w-[70%] text-[#808080] font-md md:text-start pt-1 lg:pt3">
            Nigeria
          </p>
        </div>

        <div>
        <h4 className="font-bold font-display text-xl md:text-start md:text-xl text-[#091638] pb-4 lg:pt-0 pt-4">
        Subscribe to our NewsLetter
          </h4>

        <div className="w-full bg-white rounded-lg p-3">
        <input 
            className="p-2 border-none"
            placeholder="email"
          />
          <button className="bg-red-400 rounded-lg p-2 text-white">Enter</button>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
