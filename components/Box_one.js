import React from "react";

export default function Box_one() {
  return (
    <div className="flex flex-wrap font-jakarta max-w-full items-center justify-center w-[1250px] mx-auto">
      <div className="text mx-auto w-[400px] new:w-[450px] dev:w-[600px] dev:text-center md:mx-auto md:text-center lg:mx-auto xl:text-start log:text-[28px] log:text-center lg:px-2 sm:px-4 ">
        <h2 className="text-[#242424] lg:leading-[52px] text-[38px] font-bold">
          Topic Model
        </h2>
        <p className="text-[#5A5A5A] text-[22px] font-light my-[12px] ">
          Topic Model is the ultimate research tool for any topic. It fetches
          the data from all over the web that helps you to create engaging
          content.
        </p>
        <div className="flex flex-wrap xl:w-9/12 dev:max-auto dev:justify-center sm:text-center sm:text-[28px] log:mx-auto log:justify-center lg:w-7/12 lg:mx-auto md:mx-auto md:justify-center lg:justify-center xl:justify-start xl:mx-0 lg:7/12 md:w-7/12 items-center ">
          <div className="bg-[#FFF4DC] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">
            Saved lists
          </div>
          <div className="bg-[#F7EAFF] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">
            Workspaces
          </div>
          <div className="bg-[#EFF5FF] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">
            Custom Domains
          </div>
          <div className="bg-[#FFDFDF] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">
            Export Options
          </div>
          <div className="bg-[#EEEEEE] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">
            Report Sharing
          </div>
        </div>
      </div>
      <div className="w-auto mx-auto md:justify-center md:my-3">
        <img
          className="md:w-[650px] new:w-[600px] mx-auto"
          src="https://d21b0h47110qhi.cloudfront.net/topicmojo/tpimg-8I1RUMIQ00mDUly.png"
          alt=""
        />
      </div>
    </div>
  );
}
