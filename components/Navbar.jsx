import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../assets/imgs/ligaimg.png";

const Navbar = (props) => {
  return (
    <div className='flex items-center '>
      <nav className='w-full flex items-center justify-around flex-wrap bg-teal-500 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <Image src={logo} className='h-8 w-8 mr-2' width='64' height='64' />
          <span className='font-semibold text-xl tracking-tight'>
            GAROTEANTEAMPIONS <br></br>LEAGUE
          </span>
        </div>
        <div className=' w-full block items-endflex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow '>
            <a
              href='#'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 sm:ml-3'>
              Bolas de ouro
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
