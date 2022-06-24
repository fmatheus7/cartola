import React from "react";

const Confronts = ({ weekConfronts }) => {
  return (
    <div>
      {weekConfronts.map((confronts, idx) => (
        <div
          key={idx}
<<<<<<< Updated upstream
          className=' border-collapse text-center mx-auto w-full'>
          <thead className='font-bold'></thead>
          <tbody className='bg-slate-800'>
            <tr className='border-b-8 border-b-slate-500 h-14'>
              <td className=''>{confronts.teamA}</td>
              <td className=''>{confronts.scoreA}</td>
              <td className=''>X</td>
              <td className=''>{confronts.scoreB}</td>
              <td className=''>{confronts.teamB}</td>
            </tr>
          </tbody>
        </table>
=======
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
>>>>>>> Stashed changes
      ))}
    </div>
  );
};

export default Confronts;
