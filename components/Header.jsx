import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-20 border-solid bg-slate-600 py border-bottom-2">
      <div className="flex items-center justify-between h-5 px-0 py-8 mx-auto font-bold text-white max-w-fit">
        <h1 className="absolute text-2xl whitespace-normal bold"></h1>
        <nav>
          <h1 className="text-2xl whitespace-normal bold">
            Garoteampions League
          </h1>
        </nav>
      </div>
    </header>
  );
};

export default Header;
