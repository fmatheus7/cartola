import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-20 font-bold bg-slate-600 text-white'>
      <div>
        <h1 className='text-2xl bold whitespace-normal font-mono'>
          Cartola Confront
        </h1>
      </div>
      <div>
        <Link href='/' className=''>
          <h1 className='text-2xl bold whitespace-normal font-mono'>Tabela</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
