import { React, useState } from "react";

//import AnitmationPage from "./AnitmationPage";

function OnTheGo({ ChangePage, nextPath }) {
  const SlideIn = "slideIn";
  const SlideOut = "slideOut";
  const [animate, setAnimate] = useState(true);

  const WheelHandler = (e) => {
    console.log(animate);
    if (e.deltaY > 0 && animate) {
      //   setAnimation(SlideOut);
      ChangePage({ pathname: nextPath, animationProp: SlideOut });
      setAnimate(false);
    } else if (e.deltaY < 0 && animate) {
      console.log("---- (e.deltaY < 0 && animate ----");
      ChangePage({ pathname: -1, animationProp: SlideOut });
      setAnimate(false);
    }
  };
  return (
    <div
      className=" w-full py-[10rem] px-4 bg-white"
      onWheel={WheelHandler}
      style={{ backgroundColor: "#ff40c3", height: "100%" }}
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div
          className="
          w-full
          
          flex flex-col
          p-4 my-4
          rounded-lg
          hover:scale-105
          duration-300"
        >
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
    </div>

    // </AnitmationPage>
  );
}

export default OnTheGo;
