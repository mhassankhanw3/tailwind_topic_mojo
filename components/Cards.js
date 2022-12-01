import React from "react";

export default function Cards() {
  return (
    <div className=" font-jakarta max-w-full">
      <div className="head  max-w-full w-[770px] text-center mx-auto">
        <h1 className="text-[42px] leading-[52px] font-bold ">Accurate SEO Data</h1>
        <p className="text-[#5A5A5A] text-[20px] font-light py-4 ">
          The SEO Add-on has helped many people to do in-depth topic research.
          This tool provides you the search volume, PPC difficulty, trends
          similarity, and more that helps you to rank higher on Google.
        </p>
      </div>
      <div className="flex flex-wrap md:justify-center sm:justify-center md:mx-auto items-center mt-12 max-w-full w-[1180px] mx-auto justify-center ">
        <div className="card mt-3 md:mx-2 bg-white min-h-[442px] border border-yellow-50 shadow-[0px_4px_15px_rgba(82,82,82,0.15)] max-w-full w-[370px] justify-center block p-5 rounded-[15px]">
        <img className="rounded-xl w-[320px] mx-auto" src="https://d21b0h47110qhi.cloudfront.net/topicmojo/sentiments-URdYAa8hLzNQWrY.png" alt="" />
        <div className="mt-6 mx-auto w-[320px]">
            <h3 className="text-[#242424] font-semibold text-[24px] ">Search volume & Trends</h3>
            <p className="font-light">Search volume shows you the number of searches around these queries in the last 12 months & Trends helps you to understand the hype of that query.</p>
        </div>
        </div>
        <div className="card mt-3 md:mx-2 bg-white min-h-[422px] border border-yellow-50 shadow-[0px_4px_15px_rgba(82,82,82,0.15)] max-w-full w-[370px] justify-center block p-5 rounded-[15px]">
        <img className="rounded-xl w-[320px] mx-auto" src="https://d21b0h47110qhi.cloudfront.net/topicmojo/search-qn94IBWqfqFUoyM.png" alt="" />
        <div className="mt-6 mx-auto w-[325px]">
            <h3 className="text-[#242424] font-semibold text-[24px] ">Sentiments & Hype</h3>
            <p className="font-light">Sentiments help you understand the emotional state of someone who searched for that query and Hype provides insight into what people are talking about online based on their sentiment.</p>
        </div>
        </div>
        <div className="card mt-3 md:mx-2 bg-white min-h-[422px] border border-yellow-50 shadow-[0px_4px_15px_rgba(82,82,82,0.15)] max-w-full w-[370px] justify-center block p-5 rounded-[15px]">
        <img className="rounded-xl w-[320px] mx-auto" src="https://d21b0h47110qhi.cloudfront.net/topicmojo/cpc-8bGoQ9ytJxNTele.png" alt="" />
        <div className="mt-6 mx-auto w-[315px]">
            <h3 className="text-[#242424] font-semibold text-[24px] ">CPC & PPC Diff</h3>
            <p className="font-light">The CPC stands for cost per click it shows you the cost of clicking on that query & PPC Diff. helps you to understand how difficult is to rank on this query through PPC.</p>
        </div>
        </div>
      </div>
    </div>
  );
}
