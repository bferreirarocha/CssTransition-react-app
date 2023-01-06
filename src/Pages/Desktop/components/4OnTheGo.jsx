import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OnTheGo({ Layout, ChangePage, nextPath, PreviousPath }) {
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      try {
        setTimeout(() => {
          ChangePage({ pathname: nextPath, event: e });
        }, 700);
      } catch (error) {
        console.log(error);
      }
    } else if (e.deltaY < 0) {
      try {
        setTimeout(() => {
          ChangePage({ pathname: PreviousPath });
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <section
      className="onTheGoPage flex flex-col justify-center"
      onWheel={WheelHandler}
    >
      <div className="flex flex-col">
        <h1 className="md:text-5xl sm:text-3xl text-3xl text-center md:text-left font-bold py-2 ml-10 mb-10">
          Stay on diet "on-the-go"
        </h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full flex flex-col p-4 my-4 rounded-lghover:scale-105 duration-300 scroll-smooth hover:scroll-auto">
          {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Sngle} alt="/" /> */}
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full  bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </section>
  );
}

export default OnTheGo;
