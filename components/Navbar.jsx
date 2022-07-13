import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../assets/imgs/ligaimg.png";

const Navbar = (props) => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <Image src={logo} class="h-8 w-8 mr-2" width="64" height="64" />
        <span class="font-semibold text-xl tracking-tight">
          GAROTEANTEAMPIONS LEAGUE
        </span>
        <div>
          <Link href="/" className="">
            <h1 className="text-2xl whitespace-normal bold">
              Desafio Bolas de ouro
            </h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
