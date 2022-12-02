import React from "react";

export default function Launch() {
  return (
    <div>
      <div className="bg-scroll log:h-[850px] mdLogmdfor:h-[850px] mdLog:h-[450px] mdLogmd:h-[500px] log:pt-4 bg-scroll-launch sm:h-1/2 p-[80px] max-w-full w-full font-jakarta">
        <div className="flex map flex-wrap w-11/12 mdLog:mt-8 mdLogmdfor:mt-20 items-center justify-center mx-auto log:mt-24 log:text-center max-w-full">
          <img
            className="w-22 h-20 -mt-24"
            src="https://d21b0h47110qhi.cloudfront.net/topicmojo/ctarocketimg-pyziWejVXZt0RrU.png"
            alt=""
          />
          <h2 className="text-[#090914] navimg:text-[35px] w-[700px] mdLog:w-[800px] mdLogmd:w-[800px] text-[52px] mdLog:text-[42px] mdLog:text-center leading-[66px] font-semibold ">
            Start your easy way out today with TopicMojo along with data that
            never upsets.
          </h2>
          <div className="linear-bg-launch lg:ml-32 log:mt-12">
            <button className="linear-launch bg-[#282a3a] hover:bg-[#282a3add] text-white border-none rounded-[8px] py-[15px] px-[16px] text-[18px] max-w-full w-[250px] cursor-pointer">
              Get Started at $10/mo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
