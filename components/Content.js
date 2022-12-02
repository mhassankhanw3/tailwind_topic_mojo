import React from 'react'

export default function Content() {
  return (
    <div className='mt-20 mb-10 py-10 font-jakarta content'>
        <div className='text-center p-4 mx-auto max-w-full w-[1000px]'>
            <img className='mx-auto' src="https://d21b0h47110qhi.cloudfront.net/topicmojo/cta2bulbimg-hy6VcRnNe8rXzZ8.png" alt="" />
            <h2 className='text-[#090914] text-center text-[52px]  font-semibold leading-[66px]'>Running out of content ideas?</h2>
            <p className='text-[#5A5A5A] text-center text-[26px] my-[20px] '>Fear not, we have the perfect solution for you.</p>
            <div className="linear-bg-content w-[260px] mx-auto mt-10">
          <button className="linear-content :after:w-[150px] bg-[#282a3a] hover:bg-[#282a3add] text-white border-none rounded-[8px] py-[15px] px-[16px] text-[18px] max-w-full w-[250px] cursor-pointer">Get Started with $10/mo</button>
        </div>
        </div>
    </div>
  )
}
