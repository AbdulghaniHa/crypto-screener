import { useRouter } from "next/router";
import { useState, Fragment } from "react";
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <div
    className={`${
      open ? "w-56" : "w-24"
    } h-screen bg-slate-800 relative duration-100 p-6`}
  >
    <h1 className="text-white">LOGO</h1>
    <img
      src="../control.png"
      className={`absolute cursor-pointer w-7 right-0 mt-5 translate-x-1/2 border-2 border-slate-800 rounded-full  ${
        !open && "rotate-180"
      }`}
      onClick={() => setOpen(!open)}
    />

    <div className="grid grid-cols-2 gap-4 mt-32 items-center hover:opacity-50 duration-100 h-14 " onClick={()=>router.push("/pumpDump")}>
      <img className='absolute border rounded-lg cursor-pointer w-12 h-12' src="../s2_white.png" />
      <span
        className={`cursor-pointer absolute left-20 text-white origin-left font-medium text-xl duration-200  ${
          !open && "scale-0"
        }`}
      >
        Pump/Dump
      </span>
    </div>

  </div>
);
}
