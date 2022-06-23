import React from "react";
import Confronts from "./Confronts";

const weekConfronts = [
  { teamA: "time 1", teamB: "time 2", scoreA: "0", scoreB: "2" },
  { teamA: "time 3", teamB: "time 4", scoreA: "2", scoreB: "1" },
];

const Display = () => {
  return (
    <div className='my-4  mx-auto text-white  w-[680px] h-full'>
      <div>
        <h1 className='text-center my-8 font-bold text-yellow-500 text-2xl'>
          Rodada 5
        </h1>
        <div>
          <Confronts weekConfronts={weekConfronts} />
        </div>
      </div>
    </div>
  );
};

export default Display;
