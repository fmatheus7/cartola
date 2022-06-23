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
            <tr className='border-b-8 border-b-slate-500 h-14'>
              <td className=''>{confronts.teamA}</td>
              <td className=''>{confronts.scoreA}</td>
              <td className=''>X</td>
              <td className=''>{confronts.scoreB}</td>
              <td className=''>{confronts.teamB}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default Confronts;
