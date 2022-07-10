import { useState, useEffect } from "react";
import axios from "axios";

function Display() {
  const [data, setData] = useState([]);
  const [sortedField, setSortedField] = useState();
  const [sorted, setSorted] = useState();

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

  const scoreArray = data.map((team) => {
    const sortedArray = {
      time: team.time,
      pontos_campeonato: team.pontos_campeonato,
      pontos: team.pontos,
    };
    return sortedArray;
  });
  const sortedScore = scoreArray.sort((a, b) => b.pontos - a.pontos);
  return (
    <>
      <div className='my-4  mx-auto text-white  lg:w-[680px] h-full'>
        <h1 className='my-8 text-2xl font-bold text-center text-yellow-500'>
          Rodada {data[0]?.rodada_atual}
        </h1>
        <button onClick={() => console.log("data", data)}>get data</button>
        <button
          className='p-4 rounded-2xl bg-slate-600'
          onClick={() => console.log("data sorted", sortedScore)}>
          get data
        </button>
        <tbody>
          <tr className='py-2'>
            <th>Nome do time</th>
            <th>Pontuação no campeonato</th>
            <th>Pontuação da última rodada</th>
          </tr>

          {sortedScore?.map((data) => {
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
