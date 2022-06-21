import React from "react";

const Display = () => {
  return (
    // <div className="h-screen">
    //   <div className=" mx-0 p-2 flex flex-col justify-center text-center items-center ">
    //     <h1 className="bold text-4xl decoration-slate-400 mt-4 tracking-wides text-yellow-500 uppercase bold pt-32 ">
    //       Rodada 5
    //     </h1>
    //     <p className="bold text-xl mt-4 py-4 text-white">Placar desafios</p>
    //   </div>
    //   <div className="flex flex-col  w-full mx-0">
    //     <div className="w-[480px]  mx-auto p-2">
    //       <ul className="flex justify-around  bg-slate-700 py-2 text-white ">
    //         <li className="">Time 1</li>
    //         <li className="">3</li>
    //         <li className="">X</li>
    //         <li className="">4</li>
    //         <li className="">Time 2</li>
    //       </ul>
    //     </div>
    //     <div className="w-[480px] mx-auto p-2">
    //       <ul className="flex justify-around  bg-slate-700 py-2 text-white">
    //         <li className="">Time 1</li>
    //         <li className="">3</li>
    //         <li className="">X</li>
    //         <li className="">4</li>
    //         <li className="">Time 2</li>
    //       </ul>
    //     </div>
    //     <div className="w-[480px] mx-auto p-2">
    //       <ul className="flex justify-around  bg-slate-700 py-2 text-white">
    //         <li className="">Time 1</li>
    //         <li className="">3</li>
    //         <li className="">X</li>
    //         <li className="">4</li>
    //         <li className="">Time 2</li>
    //       </ul>
    //     </div>
    //     <div className="w-[480px] mx-auto p-2">
    //       <ul className="flex justify-around  bg-slate-700 py-2 text-white">
    //         <li className="">Time 1</li>
    //         <li className="">3</li>
    //         <li className="">X</li>
    //         <li className="">4</li>
    //         <li className="">Time 2</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <div className='my-4  mx-auto text-white'>
      <h1 className='text-center my-8 font-bold text-yellow-500 text-2xl'>
        Rodada 5
      </h1>
      <div>
        <table className=' border-collapse text-center mx-auto w-[320px]'>
          <thead className='font-bold'></thead>
          <tbody className='bg-slate-800 w-[320px]'>
            <tr className='border-b-8 border-b-slate-500 h-14'>
              <td className=''>Time A</td>
              <td className=''>0</td>
              <td className=''>x</td>
              <td className=''>3</td>
              <td className=''>Time B</td>
            </tr>
            <tr className='border-b-8 border-b-slate-500 h-14'>
              <td>Time A</td>
              <td>0</td>
              <td>x</td>
              <td>3</td>
              <td>Time B</td>
            </tr>
            <tr className='border-b-8 border-b-slate-500 h-14'>
              <td>Time A</td>
              <td>0</td>
              <td>x</td>
              <td>3</td>
              <td>Time B</td>
            </tr>
            <tr className='border-b-8 border-b-slate-500 h-14'>
              <td>Time A</td>
              <td>0</td>
              <td>x</td>
              <td>3</td>
              <td>Time B</td>
            </tr>{" "}
            <tr className='border-b-8 border-b-slate-500 h-14'>
              <td>Time A</td>
              <td>0</td>
              <td>x</td>
              <td>3</td>
              <td>Time B</td>
            </tr>{" "}
            <tr className='border-b-8 border-b-slate-500 h-14'>
              <td>Time A</td>
              <td>0</td>
              <td>x</td>
              <td>3</td>
              <td>Time B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Display;
