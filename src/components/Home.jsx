import React from "react";
import chef from "../assets/chef.png";
import Popular from "./Popular";
import Footer from "./Footer";
import FindRecipe from "./FindRecipe";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="flex max-sm:flex-wrap w-full h-fit">
        <div className="left max-sm:w-full w-1/2 max-sm:px-5 px-16 mt-5 py-12">
          <h1 className="text-[4vw] max-sm:text-[9vw] leading-none font-semibold capitalize  ">
            Cook like a pro with our{" "}
            <span className="text-[#F38A00] italic">easy</span> and{" "}
            <span className="text-[#F38A00] italic">tasty</span> recipes{" "}
          </h1>
          <p className="my-5 text-xl max-sm:w-full w-9/12 font-semibold opacity-40">
            from Quick and easy meals to gourmet delights, we have taste and
            occasion.{" "}
          </p>
          <Link to={"/recipes"}  className="mt-10 max-sm:text-xl bg-[#F38A00] px-5 py-2 font-semibold text-white rounded-sm ">
            {" "}
            Explore more{" "}
          </Link>
        </div>
        <div className="w-1/2 max-sm:w-full image-container">
          <img className="w-full" src={chef} alt="" />
        </div>
      </div>
      <Popular />
      <FindRecipe/>
      
    </>
  );
};

export default Home;
