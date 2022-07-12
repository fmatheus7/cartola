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
        <button
          className='py-4 rounded-2xl bg-red-200 mx-2'
          onClick={() => setSorted(true)}>
          Sorted by Campeonato
        </button>
        <button
          className='py-4 rounded-2xl bg-red-200 mx-2'
          onClick={() => setSorted(false)}>
          Sorted by Total
        </button>
        <tbody>
          <tr className='py-2'>
            <th>Nome do time</th>
            <th>Pontuação no campeonato</th>
            <th>Pontuação da última rodada</th>
          </tr>

          {sorted
            ? data?.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.time.slug.toUpperCase()}</td>
                    <td>{data.pontos_campeonato.toFixed(2)}</td>
                    <td>{data.pontos.toFixed(2)}</td>
                  </tr>
                );
              })
            : sortedRound?.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.time.slug.toUpperCase()}</td>
                    <td>{data.pontos_campeonato.toFixed(2)}</td>
                    <td>{data.pontos.toFixed(2)}</td>
                  </tr>
                );
              })}
        </tbody>
      </div>
    </>
  );
}

export default Display;
