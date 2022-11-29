import React from "react";

export default function Feature() {
  return (
    <div className="mt-60">
      <div className="bg-scroll p-[80px] max-w-[100%] w-[100%] font-jakarta">
       <div className="mx-auto max-w-[100%] w-[900px] text-center"> {/* border border-black */}
       <h2 className="text-[#242424] text-[32px] font-semibold">As Featured On</h2>
       <div className="bg-gradient">
       <div className="bg-gradient-shadow flex-wrap justify-center flex items-center mt-[30px] bg-white rounded-2xl px-10 py-6">
        <img src="https://www.collegeessayadvisors.com/wp-content/uploads/2016/05/Digital-Journal-Logo.png" width={170} alt="" />
        <img className="mx-3" src="https://www.dailyherald.com/gfx/rwd/dh-logo-252x50.png" 
        width={150}
        alt="" />
        <img className="mx-2" src="https://d21b0h47110qhi.cloudfront.net/az/download-TxHkm0J2f4l2d4o.png" width={150} alt="" />
        <img className="mx-2" src="https://bloximages.newyork1.vip.townnews.com/pawtuckettimes.com/content/tncms/custom/image/c414c900-f3f6-11e4-b2c1-7fdace25f2cc.png" width={150} alt="" />
        <img  src="https://www.fortwaynesnbc.com/pf/resources/images/mastheads/logos/wpta-nbc.svg?d=280" width={130} alt="" />
       </div>
       </div>
        </div> 
      </div>
    </div>
  );
}
