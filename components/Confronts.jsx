import React from "react";

const Confronts = ({ weekConfronts }) => {
  return (
    <div>
      {weekConfronts.map((time, idx) => (
        <div
          key={idx}
          className='flex items-center justify-between w-[320px] mx-auto border rounded bg-slate-600 py-4'>
          <div>
            <p className='p-2 text-2xl text-gray-50'>{time.pontos_campeonato}</p>
          </div>
          <div className='flex items-center justify-between '>
            {/* Score */}
            <div className=''>
              <p className='px-4 font-bold '>{time.pontos}</p>
            </div>
            <div>
              <p className='px-2 font-bold'>X</p>
            </div>
            <div>
              <p className='px-4 font-bold'>{time.pontos}</p>
            </div>
            {/* Score */}
          </div>
          {/* <div>
            <p className='p-2 text-2xl text-gray-50'>{confronts.team2}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Confronts;
