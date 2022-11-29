import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-wrap font-jakarta items-center mt-16 mx-auto max-w-[100%] w-[1250px] justify-center p-0">  {/* border-black border */}
      <div className="w-[850px] font-jakarta">  {/* border-black border */}
        <h1 className="text-xl font-bold ">Topic Research, simplified.</h1>
      <p className="text-[17px] text-[#5a5a5a] mt-4 mb-24 w-[535px]">
          Our platform provides tools and analysis features that will help you
          grow your online business.
        </p>
        {/* linear-gradient(90deg,#44bcff -.55%,#44b0ff 22.86%,#ff44ec 48.36%,#ff44ec 73.33%,#ff675e 99.34%) */}
        <div className="linear-bg">
          <button className="linear bg-[#282a3a] hover:bg-[#282a3add] transition text-white border-none rounded-[8px] py-[15px] px-[16px] text-[18px] max-w-[100%] w-[250px] cursor-pointer">Get Started at $10/mo</button>
        </div>
        <div className="flex flex-wrap items-center mt-10">
          <span className="font-bold text-[#646464] font-jakarta text-[16px]">Trusted by 19000+ users</span>
          <img
          className="ml-14"
            src="https://topic-mojo-df19jumbj-mhassankhanw3-gmailcom.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstars.a60f035c.png&w=256&q=75"
            alt=""
          />
        </div>
      </div>
      <div className="w-[400px]">  {/* border-black border */}
        <img
          src="https://topic-mojo-df19jumbj-mhassankhanw3-gmailcom.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroup%203689.ae8e297d.png&w=640&q=75"
          alt=""
        />
      </div>
    </div>
  );
}
