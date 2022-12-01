import React from 'react'

export default function Box_two() {
  return (
    <div className="xl:flex md:block font-jakarta my-20 max-w-full w-[1250px] items-center justify-center mx-auto">
       <div className="xl:w-auto md:mx-auto lg:w-full md:w-7/12 md:justify-center md:my-3">
    <img className="md:w-[650px] xl-w-auto lg:w-11/12 lg:mx-auto" src="https://d21b0h47110qhi.cloudfront.net/topicmojo/qfimg-nLSrNycbDH0g23m.png" alt="" />
    </div>
    <div className="text xl:w-5/12 lg-w-full md:mx-auto md:text-center lg:mx-auto xl:text-start lg:text-center lg:px-2 sm:px-4 ">
      <h2 className="text-[#242424] lg:leading-[52px] lg:text-[38px] md:text-[32px] font-bold">Question Finder</h2>
      <p className="text-[#5A5A5A] text-[22px] font-light my-[12px] ">
      Gather questions about your topic across the web so you can easily understand users' needs using Question Finder.
      </p>
      <div className="flex flex-wrap xl:w-9/12 lg:w-7/12 lg:mx-auto md:mx-auto md:justify-center lg:justify-center xl:justify-start xl:mx-0 lg:7/12 md:w-7/12  items-center ">
     <div className="bg-[#FFF4DC] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">Saved lists</div>
     <div className="bg-[#F7EAFF] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">Workspaces</div>
     <div className="bg-[#EFF5FF] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">Custom Domains</div>
     <div className="bg-[#FFDFDF] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">Export Options</div>
     <div className="bg-[#EEEEEE] text-[20px] rounded-[5px] px-2 py-2 mb-[16px] mr-[16px]">Report Sharing</div>
      </div>
    </div>
   
  </div>
  )
}
