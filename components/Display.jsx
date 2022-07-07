import { useState, useEffect } from "react";
import axios from "axios";

function Display() {
  const [data, setData] = useState([]);
  const [sortedField, setSortedField] = useState();

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

  return (
    <>
      <div className="my-4  mx-auto text-white  lg:w-[680px] h-full">
        <h1 className="my-8 text-2xl font-bold text-center text-yellow-500">
          Rodada {data[0]?.rodada_atual}
        </h1>
        <tbody>
          <tr>
            <th>Nome do time</th>
            <th>Pontuação no campeonato</th>
            <th>Pontuação da última rodada</th>
          </tr>

          {data.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.time.slug}</td>
                <td>{data.pontos_campeonato}</td>
                <td>{data.pontos}</td>
              </tr>
            );
          })}
        </tbody>
      </div>
      );
    </>
  );
}

export default Display;
