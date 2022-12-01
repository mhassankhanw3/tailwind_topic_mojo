import React from "react";

export default function Launch() {
  return (
    <div>
      <div className="bg-scroll bg-scroll-launch sm:h-1/2 p-[80px] max-w-full w-full font-jakarta">
        <div className="flex w-11/12 items-center justify-center mx-auto max-w-full">
          <img
          className="w-22 h-20 -mt-24"
            src="https://d21b0h47110qhi.cloudfront.net/topicmojo/ctarocketimg-pyziWejVXZt0RrU.png"
            alt=""
          />
          <h2 className="text-[#090914] w-[700px] text-[52px] leading-[66px] font-semibold ">Start your easy way out today with TopicMojo along with data that never upsets.</h2>
          <div className="linear-bg-launch lg:ml-32">
          <button className="linear-launch bg-[#282a3a] hover:bg-[#282a3add] text-white border-none rounded-[8px] py-[15px] px-[16px] text-[18px] max-w-full w-[250px] cursor-pointer">Get Started at $10/mo</button>
        </div>
        </div>
      </div>
    </div>
  );
}
