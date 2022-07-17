import { useState, useEffect } from "react";
import axios from "axios";

function Display() {
  const [data, setData] = useState([]);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const ids = [
        7969983, 8025416, 8631482, 9035902, 1909960, 1229763, 1071737, 1147402,
        28258296, 1614368,
      ];
      const responses = await Promise.all(
        ids.map((id) =>
          axios.get(`https://api.cartola.globo.com/time/id/${id}`)
        )
      );
      setData(responses.map((res) => res.data));
    };

    fetchData();
    console.log(data);
  }, []);

  const sortArrayObjs = function (arr, prop1, prop2) {
    let sort1 = [...arr].sort((a, b) => {
      if (a[prop1] == b[prop1]) {
        if (a[prop2] === b[prop2]) return 0;
        return a[prop2] < b[prop2] ? 1 : -1;
      } else {
        return a[prop1] < b[prop1] ? 1 : -1;
      }
    });
    return sort1;
  };

  const sortedRound = sortArrayObjs(data, "pontos", "name");
  return (
    <>
      <div className='my-4  mx-auto text-white  lg:w-[680px] h-full'>
        <h1 className='my-8 text-2xl font-bold text-center text-yellow-500'>
          Rodada {data[0]?.rodada_atual}
        </h1>
        <div className='flex items-center justify-center mx-auto'>
          <tbody>
            <tr className='sm:py-1'>
              <th className='sm:p-1'>Time</th>
              <th
                onClick={() => setSorted(true)}
                className='sm:p-1 cursor-pointer'>
                Campeonato
              </th>
              <th
                className='sm:p-1 cursor-pointer'
                onClick={() => setSorted(false)}>
                Rodada {data[0]?.rodada_atual}
              </th>
            </tr>

            {sorted
              ? data?.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td className='sm:p-1 text-center'>
                        {data.time.slug.toUpperCase()}
                      </td>
                      <td className='sm:p-1 text-center'>
                        {data.pontos_campeonato.toFixed()}
                      </td>
                      <td className='sm:p-1 text-center'>
                        {data.pontos.toFixed()}
                      </td>
                    </tr>
                  );
                })
              : sortedRound?.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td className='sm:p-1 text-center'>
                        {data.time.slug.toUpperCase()}
                      </td>
                      <td className='sm:p-1 text-center'>
                        {data.pontos_campeonato.toFixed()}
                      </td>
                      <td className='sm:p-1 text-center'>
                        {data.pontos.toFixed()}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </div>
      </div>
    </>
  );
}

export default Display;
