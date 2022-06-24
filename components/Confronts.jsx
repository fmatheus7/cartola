import React from "react";

const Confronts = ({ weekConfronts }) => {
  return (
    <div>
      {weekConfronts.map((confronts, idx) => (
        <div
          key={idx}
          className='flex items-center justify-between w-[320px] mx-auto border rounded bg-slate-600 py-4'>
          <div>
            <p className='text-2xl text-gray-50 p-2'>{confronts.team1}</p>
          </div>
          <div className='flex items-center justify-between '>
            {/* Score */}
            <div className=''>
              <p className='font-bold px-4 '>{confronts.score1}</p>
            </div>
            <div>
              <p className='font-bold px-2'>X</p>
            </div>
            <div>
              <p className='font-bold px-4'>{confronts.score2}</p>
            </div>
            {/* Score */}
          </div>
          <div>
            <p className='text-2xl text-gray-50 p-2'>{confronts.team2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Confronts;
