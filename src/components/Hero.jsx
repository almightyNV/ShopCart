import React from "react";
import { Link } from "react-router-dom";
import man from "../img/man_hero.png";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-cover bg-center bg-no-repeat px-6 bg-green-100">
      <div className="container relative mx-auto flex h-full">
        <div className="relative z-10 self-center">
          <div className="flex w-fit items-center">
            <div className="mr-3 h-[3px] w-[40px] rounded-full bg-red-500" />
            <span className="font-medium">NEW TREND</span>
          </div>
          <h1 className="text-[70px] font-light leading-[1.1]">
            WINTER SALE STYLISH
            <br />
            <span className="font-semibold">MENS</span>
          </h1>
          <Link
            to="/"
            className="mt-3 inline-block font-semibold underline decoration-2 underline-offset-4 hover:text-red-500"
          >
            DISCOVER MORE
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 xl:right-[10%] opacity-50">
          <img className="" src={man} alt="man walking" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
