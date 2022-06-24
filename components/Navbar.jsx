import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='h-20  w-full bg-slate-600'>
      <div className='flex items-center justify-between font-bold text-white '>
        <h1 className='text-2xl whitespace-normal bold'>Cartola Confront</h1>
        <div>
          <Link href='/' className=''>
            <h1 className='text-2xl whitespace-normal bold'>Tabela</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
