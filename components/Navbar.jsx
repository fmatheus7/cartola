import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='h-20 w-[680px] font-bold bg-slate-600 text-white mx-auto '>
      <div className='flex flex-row justify-between items-center py-6 w-full '>
        <div>
          <h1 className='text-xl sm:text-2xl bold whitespace-normal mx-4 '>
            Cartola Confront
          </h1>
        </div>
        <div>
          <Link href='/' className=''>
            <h1 className='text-xl sm:text-2xl bold whitespace-normal font-mo mx-4'>
              Tabela
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
