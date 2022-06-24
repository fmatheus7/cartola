import React from "react";

const Confronts = ({ weekConfronts }) => {
  return (
    <div>
      {weekConfronts.map((confronts, idx) => (
        <table
          key={idx}
          className=' border-collapse text-center mx-auto w-full'>
          <thead className='font-bold'></thead>
          <tbody className='bg-slate-800'>
            <tr className='border-b-8 border-b-slate-500 h-14 w-32'>
              <td className='text-left px-2'>{confronts.team1}</td>
              <td className='text-right'>{confronts.score1}</td>
              <td className=''>X</td>
              <td className='text-left'>{confronts.score2}</td>
              <td className='text-right px-2'>{confronts.team2}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default Confronts;
