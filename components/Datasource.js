import React from "react";

export default function Datasource() {
  return (
    <div className="flex flex-wrap items-start justify-center max-w-full  w-11/12 mx-auto mt-20 font-jakarta">
      <div className=" max-w-full w-[400px] sm:text-center nav:text-center md:text-center log:text-center  log:justify-center">
        <h2 className="text-[38px] font-bold leading-[47px]">Data Sources that we support</h2>
        <p className="text-[20px] font-light mt-4 mb-8">
          TopicMojo supports 50+ data sources. It's the easiest and most
          effective way to do topic research.
        </p>
        <div className="linear-bg-data log:text-center nav:w-[150px] nav:mx-auto log:mx-auto log:w-[150px]">
          <button className="linear-data :after:w-[150px] bg-[#282a3a] hover:bg-[#282a3add] text-white border-none rounded-[8px] py-[15px] px-[16px] text-[18px] max-w-full w-[150px] cursor-pointer">Learn More</button>
        </div>
      </div>
      <div className="img ">
        <img className="w-[650px] nav:mt-4" src="https://d21b0h47110qhi.cloudfront.net/topicmojo/datasourcesimg-jtvoU9MQVBDMOTV.png" alt="" />
      </div>
    </div>
  );
}
