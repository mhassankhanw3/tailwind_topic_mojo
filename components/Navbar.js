import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import ResNavbar from "./ResNavigationbar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <nav className="flex items-center justify-between max-w-full w-[1250px] px-4 py-8 mx-auto">
      {" "}
      {/* border border-black */}
      <div>
        {" "}
        {/* border border-black */}
        <img
          className="w-52 navimg:w-[170px] cursor-pointer"
          src="https://topic-mojo-df19jumbj-mhassankhanw3-gmailcom.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTOPICMOJO_ICON.be6275a9.png&w=256&q=75"
          alt=""
        />
      </div>
      <ul className="flex items-center nav:hidden">
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
        <GiHamburgerMenu className="hidden nav:block" onClick={handleToggle} />
        <button className="nav:hidden mx-2 text-[#282a3a] rounded-[6px] transition-all py-[18px] px-[18px] btn-bg">
          Login
        </button>
        <button className="nav:hidden bg-[#282a3a] hover:bg-opacity-80 py-[16px] px-[18px] rounded-[6px] text-white cursor-pointer transition">
          Try for Free
        </button>
      </div>
      {toggle ? (
      <ResNavbar toggle={toggle} settoggle={setToggle} />
      ) : (
          ""
      )}
    </nav>
  );
}
