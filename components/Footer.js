import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
        <footer className='mt-12 max-w-full pt-10 pb-6 px-11 font-jakarta'>
            <div className='flex flex-wrap foot:block items-start max-w-full w-[1100px] mx-auto '>
            <div className='mt-4'>
                <img src="https://d21b0h47110qhi.cloudfront.net/topicmojo/topicmojofooter-jAqKmTlk18285zl.png" alt="" />
                <p className='mt-6 text-[18px] font-medium text-[#5A5A5A] max-w-[233px] foot:max-w-[300px]'>Get analysis features that will help you grow your online business.</p>
            </div>
            <div className='flex flex-wrap foot:block foot:ml-0 items-start max-w-full mt-4 w-[700px] justify-center ml-36'>
                    <ul className='mx-5 mt-3 foot:mx-0'>
                        <p className='text-[#5A5A5A] text-[18px] font-bold mb-[20px]'>Help</p>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Pricing</a></li></Link>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Contact</a></li></Link>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Company</a></li></Link>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Terms of Services</a></li></Link>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Privacy Policy</a></li></Link>
                    </ul>
                    <ul className='mx-5 mt-3 foot:mx-0'>
                        <p className='text-[#5A5A5A] text-[18px] font-bold mb-[20px]'>Tools</p>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Topic Model</a></li></Link>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Questions Finder</a></li></Link>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Search Listener</a></li></Link>
                    </ul>
                    <ul className='mx-5 mt-3 foot:mx-0'>
                        <p className='text-[#5A5A5A] text-[18px] font-bold mb-[20px]'>Resources</p>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Blog</a></li></Link>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Comparison Asnwer the Public</a></li></Link>
                        <Link href="/" legacyBehavior>
                        <li className='mb-[20px]'><a className='text-[#5A5A5A] hover:text-[#287DFF] text-[18px] font-medium' href="/">Comparison BuzzSumo</a></li></Link>
                    </ul>
            </div>
            </div>
            <div className='bg-gray-400 h-[0.3px] max-w-full mt-10 w-[1100px] mx-auto'></div>
            <div className='mx-auto mt-6 max-w-full w-[300px] text-center'>
                <span className='text-[#5A5A5A] text-[15px] text-center'>Copyright 2022 © All rights Reserved.</span>
            </div>
        </footer>
  )
}
