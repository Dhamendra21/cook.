import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer flex flex-col items-center justify-center text-center w-full h-[50vh] text-white bg-slate-950">
        <div className="w-1/2 max-sm:w-full max-sm:text-start px-5">
            <h1 className="text-4xl font-semibold mb-7">Cook.</h1>
            <p className="w-8/12 max-sm:w-full m-auto font-thin">from quick and easy meals to gourmet delights, we have something for every taste and occasion. </p>
            {/* <div className="line w-full bg-white hw"></div> */}
            <hr className=" inline-block max-sm:w-full w-9/12 opacity-55 "  />
            <div className="flex items-center justify-center gap-10 mt-5">
                <a href="#" className="text-md ">About Us</a>
                <a href="#" className="text-md ">Recipes</a>
                <a href="#" className="text-md ">Find</a>
            </div>
        </div>
       
        <div className="w-full border-t-[1px] border-t-zinc-500 my-5 px-10 py-5 flex justify-center">

            <p>copyright©2024</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
