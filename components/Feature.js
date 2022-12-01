import React from "react";

export default function Feature() {
  return (
    <div className="mt-60">
      <div className="bg-scroll nav:h-[500px] sm:h-1/2 p-[80px] max-w-full w-full font-jakarta">
       <div className="mx-auto max-w-full w-[900px] text-center"> {/* border border-black */}
       <h2 className="text-[#242424] text-[32px] font-semibold mdLogmdfor:text-[28px]">As Featured On</h2>
       <div className="bg-gradient mx-auto">
       <div className="bg-gradient-shadow flex flex-wrap nav:block log-w-[600px] justify-center max-w-full md:flex lg:flex mx-auto mdLogmdfor:px-4 items-center mt-[30px] bg-white rounded-2xl px-10 py-6">
        <img className="w-44 md:w-40 sm:w-full mx-auto mdLogmdfor:w-full log:w-full" src="https://www.collegeessayadvisors.com/wp-content/uploads/2016/05/Digital-Journal-Logo.png" width={170} alt="" />
        <img className="w-36 md:w-28 sm:w-3/4 mx-auto sm:my-3 mdLogmdfor:w-full log:w-full" src="https://www.dailyherald.com/gfx/rwd/dh-logo-252x50.png" 
        width={150}
        alt="" />
        <img className="mx-auto w-36 sm:w-full md:w-28 mdLogmdfor:w-full log:w-full" src="https://d21b0h47110qhi.cloudfront.net/az/download-TxHkm0J2f4l2d4o.png" width={150} alt="" />
        <img className="mx-auto w-36 sm:w-full md:w-28 mdLogmdfor:w-full log:w-full sm:my-3" src="https://bloximages.newyork1.vip.townnews.com/pawtuckettimes.com/content/tncms/custom/image/c414c900-f3f6-11e4-b2c1-7fdace25f2cc.png" width={150} alt="" />
        <img className="w-32 md:w-24 sm:w-4/5 mx-auto mdLogmdfor:w-full log:w-full"  src="https://www.fortwaynesnbc.com/pf/resources/images/mastheads/logos/wpta-nbc.svg?d=280" width={130} alt="" />
       </div>
       </div>
        </div> 
      </div>
    </div>
  );
}
