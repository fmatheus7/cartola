import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-20 font-bold text-white bg-slate-600'>
      <div>
        <h1 className='text-2xl whitespace-normal bold'>
          Cartola Confront
        </h1>
      </div>
      <div>
        <Link href='/' className=''>
          <h1 className='text-2xl whitespace-normal bold'>Tabela</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
