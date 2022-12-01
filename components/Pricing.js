import React from "react";

export default function Pricing() {
  return (
    <div className="max-w-full font-jakarta mt-24">
      <div className="head max-w-full w-[600px] mx-auto justify-start text-center">
        <p className="max-w-full mx-auto w-[245px] text-center text-[#8238F5] bg-[#F7EAFF] rounded-[60px] text-[12px] font-normal py-2 px-4 ">
          Get the tool in pocket friendly pricing
        </p>
        <h2 className="text-[42px] mt-6 font-bold leading-[52px] ">Pricing</h2>
        <p className="text-[#5A5A5A] text-[20px] font-light mt-4  ">
          Hop on on any package & upgrade any time you want.
        </p>
        <div className="mt-8 flex items-center text-center mx-auto justify-center">
          <p className="text-[#393939] text-[18px] font-normal ">
            Bill Monthly
          </p>
          <div className="block cursor-pointer relative bg-[#484848] w-14 h-8 rounded-full mx-4 ">
            <div className="bg-white cursor-pointer transition rounded-full w-6 h-6 absolute top-1 left-1 "></div>
          </div>
          <p className="text-[#393939] text-[22px] font-semibold ">
            Bill Yearly
          </p>
        </div>
      </div>

      {/* ========================== Pricing ========================== */}

      <div className="mt-14 flex flex-wrap items-center justify-center max-w-full w-[1200px] mx-auto ">
        <div className="max-w-full w-[370px] rounded-[24px] mx-2 mt-3 py-6 px-7 bg-white  shadow-[1px_1px_40px_rgba(139,139,139,0.08)]">
          <img
            className="w-full object-cover"
            src="https://d21b0h47110qhi.cloudfront.net/old-free/pricing-img1-djIO6YQYkJMi2u6.png"
            alt="loading"
          />
          <div className="my-10">
            <p className="text-[#393939] font-semibold text-[18px] ">Free</p>
            <p className="text-[#62657E] text-[14px] font-normal">
              Free Forever
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-normal text-[#393939] -mt-10 text-[26px] ">$</p>
            <div className="flex items-baseline">
              <span className="text-[#282A3A] text-[52px] font-semibold">
                0
              </span>
              <span className="text-[#B1B1B1] font-normal text-[26px] ">
                /mo
              </span>
            </div>
          </div>
          <button className="text-[18px] transition py-4 w-full bg-[#282a3a] hover:bg-[#282a3add] text-white border-none rounded-[8px] mt-8 font-semibold">
            Choose
          </button>
          <div className="mt-8 mb-6">
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img1-4lXfIvhj3UxujQL.png"
                alt="loading"
              />
              <p className="ml-3">5 queries/mo in Topic Model</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img2-pAV7BewEdCshxKK.png"
                alt="loading"
              />
              <p className="ml-3">5 queries/mo in Questions Finder</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img3-A3qxE2uentVcTrF.png"
                alt="loading"
              />
              <p className="ml-3">US, UK, CA and AU supported</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img5-q1ews7MTQskbKF3.png"
                alt="loading"
              />
              <p className="ml-3">Search listning</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Live Chat Support</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Single Workspace</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Free SEO Writer</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Outline not available</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">SEO data</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">All data sources included</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">All languages supported</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Team members</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Custom domain</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Shareable reports</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">CSV Exports</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Priority support</p>
            </div>
          </div>
        </div>




        {/* ======================================== price 2 ======================================== */}








        <div className="max-w-full w-[370px] rounded-[24px] mx-2 mt-3 py-6 px-7 bg-[#282A3A] text-white  shadow-[1px_1px_40px_rgba(139,139,139,0.08)]">
          <img
            className="w-full object-cover"
            src="https://d21b0h47110qhi.cloudfront.net/old-free/pricing-img2-Z7n2uTtaw4xkaqx.png"
            alt="loading"
          />
          <div className="my-10">
            <p className="text-white font-semibold text-[18px] ">Starter</p>
            <p className="text-[#898A8E] text-[14px] font-normal">
            For Startups & SMEs
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-normal text-white -mt-10 text-[26px] ">$</p>
            <div className="flex items-baseline">
              <span className="text-white text-[52px] font-semibold">
                10
              </span>
              <span className="text-[#B1B1B1] font-normal text-[26px] ">
                /mo
              </span>
            </div>
          </div>
          <button className="text-[18px] transition py-4 w-full bg-white hover:bg-slate-100 text-[#282A3A] border-none rounded-[8px] mt-8 font-semibold">
            Choose
          </button>
          <div className="mt-8 mb-6">
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img1-mZlt5N3G4Gj3wd4.png"
                alt="loading"
              />
              <p className="ml-3">50 queries/mo in Topic Model</p>
            </div>
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img2-gSsDl9Tny1jBuBg.png"
                alt="loading"
              />
              <p className="ml-3">50 queries/mo in Questions Finder</p>
            </div>
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img4-k5DKKhFAtPze2Td.png"
                alt="loading"
              />
              <p className="ml-3">10 queries/mo in Outline</p>
            </div>
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img3-WSchKODD73CLIBF.png"
                alt="loading"
              />
              <p className="ml-3">Free SEO Writer</p>
            </div>
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img5-vDyDj0PQhCk2Aj1.png"
                alt="loading"
              />
              <p className="ml-3">All languages supported</p>
            </div>
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Live Chat Support</p>
            </div>
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">CSV Exports</p>
            </div>
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Shareable Reports</p>
            </div>
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">All countries supported</p>
            </div>
            <div className="flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">SEO Data</p>
            </div>
            <div className="  flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">All data sources included</p>
            </div>
            <div className="  flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Priority support</p>
            </div>
            <div className="  flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Search listening</p>
            </div>
            <div className="  flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Worksapces</p>
            </div>
            <div className="  flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Team Members</p>
            </div>
            <div className="  flex items-center text-white mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Custom domain</p>
            </div>
          </div>
        </div>






         {/* ======================================== price 3 ======================================== */}







 


          
         <div className="max-w-full w-[370px] rounded-[24px] mx-2 mt-3 py-6 px-7 bg-white shadow-[1px_1px_40px_rgba(139,139,139,0.08)]">
          <img
            className="w-full object-cover"
            src="https://d21b0h47110qhi.cloudfront.net/topicmojo/procardnewimg-6DKCh2MVn3WUcZj.png"
            alt="loading"
          />
          <div className="my-10">
            <p className="text-[#393939] font-semibold text-[18px] ">Pro</p>
            <p className="text-[#62657E] text-[14px] font-normal">
            For Brands & Agencies
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-normal text-[#393939] -mt-10 text-[26px] ">$</p>
            <div className="flex items-baseline">
              <span className="text-[#282A3A] text-[52px] font-semibold">
            49.50
              </span>
              <span className="text-[#B1B1B1] font-normal text-[26px] ">
                /mo
              </span>
            </div>
          </div>
          <button className="text-[18px] transition py-4 w-full bg-[#282a3a] hover:bg-[#282a3add] text-white border-none rounded-[8px] mt-8 font-semibold">
            Choose
          </button>
          <div className="mt-8 mb-6">
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img1-4lXfIvhj3UxujQL.png"
                alt="loading"
              />
              <p className="ml-3">Unlimited queries in Topic Model</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img2-pAV7BewEdCshxKK.png"
                alt="loading"
              />
              <p className="ml-3">Unlimited queries in Questions Finder</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img3-A3qxE2uentVcTrF.png"
                alt="loading"
              />
              <p className="ml-3">All countries supported</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img4-CBip2kLgkcCq4Bi.png"
                alt="loading"
              />
              <p className="ml-3">Unlimited Workspaces</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img1-4lXfIvhj3UxujQL.png"
                alt="loading"
              />
              <p className="ml-3">200 queries/mo in Outline</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-img5-q1ews7MTQskbKF3.png"
                alt="loading"
              />
              <p className="ml-3">5 Search Listening Alerts</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Live Chat Support</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">SEO data enabled</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">All data sources included</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">All languages supported</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">5 Team members (+$10/member charged)</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Custom domain</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Shareable reports</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">CSV Exports</p>
            </div>
            <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcheck-kV7gbwkFy5vCmyQ.png"
                alt="loading"
              />
              <p className="ml-3">Priority support</p>
            </div>
            {/* <div className="  flex items-center text-[#393939] mt-4 font-normal text-[16px] ">
              <img
                src="https://d21b0h47110qhi.cloudfront.net/old-free/list-imgcross-labNDu3tfBFGqMS.png"
                alt="loading"
              />
              <p className="ml-3">Priority support</p>
            </div> */}
          </div>
        </div>


      </div>
    </div>
  );
}
