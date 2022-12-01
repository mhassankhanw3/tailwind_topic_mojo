import React from "react";

export default function Cards() {
  return (
    <div className="border border-black font-jakarta max-w-full">
      <div className="head border border-black max-w-full w-1/2 text-center mx-auto">
        <h1 className="text-[42px] leading-[52px] font-bold ">Accurate SEO Data</h1>
        <p className="text-[#5A5A5A] text-[20px] font-light py-4 ">
          The SEO Add-on has helped many people to do in-depth topic research.
          This tool provides you the search volume, PPC difficulty, trends
          similarity, and more that helps you to rank higher on Google.
        </p>
      </div>
      <div className="flex items-center mt-20 max-w-full w-10/12 mx-auto justify-between border border-black">
        <div className="card bg-white h-[442px] border border-yellow-50 shadow-[0px_4px_15px_rgba(82,82,82,0.15)] max-w-full w-[350px] justify-center block p-5 rounded-[15px]">
        <img className="rounded-xl mx-auto" src="https://d21b0h47110qhi.cloudfront.net/topicmojo/sentiments-URdYAa8hLzNQWrY.png" alt="" />
        <div className="mt-4 mx-auto">
            <h3 className="text-[#242424] font-semibold text-[24px] ">Search volume & Trends</h3>
            <p className="font-light">Search volume shows you the number of searches around these queries in the last 12 months & Trends helps you to understand the hype of that query.</p>
        </div>
        </div>
        <div className="card bg-white h-[422px] border border-yellow-50 shadow-[0px_4px_15px_rgba(82,82,82,0.15)] max-w-full w-[350px] justify-center block p-5 rounded-[15px]">
        <img className="rounded-xl mx-auto" src="https://d21b0h47110qhi.cloudfront.net/topicmojo/search-qn94IBWqfqFUoyM.png" alt="" />
        <div className="mt-4 mx-auto">
            <h3 className="text-[#242424] font-semibold text-[24px] ">Sentiments & Hype</h3>
            <p className="font-light">Sentiments help you understand the emotional state of someone who searched for that query and Hype provides insight into what people are talking about online based on their sentiment.</p>
        </div>
        </div>
      </div>
    </div>
  );
}
