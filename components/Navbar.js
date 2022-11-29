import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-[100%] w-[1250px] py-8 mx-auto"> {/* border border-black */}
        
      <div> {/* border border-black */}
        <img
        className="w-52 cursor-pointer"
          src="https://topic-mojo-df19jumbj-mhassankhanw3-gmailcom.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTOPICMOJO_ICON.be6275a9.png&w=256&q=75"
          alt=""
        />
      </div>
      <ul className="flex items-center">
        <Link href="/" legacyBehavior>
          <li className="flex items-center text-zinc-500 hover:text-slate-900 cursor-pointer text-[18px]">
            <a href="/">TOOLS</a>
            <HiOutlineChevronDown className="mt-1 ml-1" />
          </li>
        </Link>
        <Link href="/" legacyBehavior>
          <li className="mx-10 text-zinc-500 hover:text-slate-900 cursor-pointer text-[18px]">
            <a href="/">PRICING</a>
          </li>
        </Link>
        <Link href="/" legacyBehavior>
          <li className="flex items-center text-zinc-500 hover:text-slate-900 cursor-pointer text-[18px]">
            <a href="/">RESOURCES</a>
            <HiOutlineChevronDown className="mt-1 ml-1" />
          </li>
        </Link>
      </ul>
      <div className="flex items-center text-[18px]">
        <button className="mx-2 text-[#282a3a] rounded-[6px] transition-all py-[18px] px-[18px] btn-bg">Login</button>
        <button className="bg-[#282a3a] hover:bg-opacity-80 py-[16px] px-[18px] rounded-[6px] text-white cursor-pointer transition">Try for Free</button>
      </div>
    </nav>
  );
}
