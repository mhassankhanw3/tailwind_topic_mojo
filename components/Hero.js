import React from "react";

export default function Hero() {
  return (
    <div className="flex font-jakarta items-center mt-16 mx-auto max-w-full w-[1250px] md:w-[1000px] justify-between md:justify-between p-4">  {/* border-black border */}
      <div className="w-[600px] md:w-[500px] font-jakarta hero_text">  {/* border-black border */}
        <h1 className="text-xl font-bold leading-[40px]">Topic Research, simplified.</h1>
      <p className="text-[17px] text-[#5a5a5a] mt-4 mb-24 max-w-full lg:w-[535px] md:w-[400px]">
          Our platform provides tools and analysis features that will help you
          grow your online business.
        </p>
        {/* linear-gradient(90deg,#44bcff -.55%,#44b0ff 22.86%,#ff44ec 48.36%,#ff44ec 73.33%,#ff675e 99.34%) */}
        <div className="linear-bg">
          <button className="linear bg-[#282a3a] hover:bg-[#282a3add] text-white border-none rounded-[8px] py-[15px] px-[16px] text-[18px] max-w-full w-[250px] cursor-pointer">Get Started at $10/mo</button>
        </div>
        <div className="flex flex-wrap items-center mt-10 span">
          <span className="font-bold text-[#646464] mt-1 font-jakarta text-[16px]">Trusted by 19000+ users</span>
          <img
          className="ml-10 mdLogmdfor:mt-4 mt-1"
            src="https://topic-mojo-df19jumbj-mhassankhanw3-gmailcom.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstars.a60f035c.png&w=256&q=75"
            alt=""
          />
        </div>
      </div>
      <div className="lg:w-[400px] md:w-[350px] hero_img">  {/* border-black border */}
        <img
          src="https://topic-mojo-df19jumbj-mhassankhanw3-gmailcom.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroup%203689.ae8e297d.png&w=640&q=75"
          alt=""
        />
      </div>
    </div>
  );
}
