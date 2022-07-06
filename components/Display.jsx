import { useState, useEffect } from "react";
import axios from "axios";

function Display() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ids = [
        1614368, 7969983, 8025416, 8631482, 9035902, 1909960, 1229763, 1071737,
        1147402, 28258296,
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
    <div className="my-4  mx-auto text-white  lg:w-[680px] h-full">
      <h1 className="my-8 text-2xl font-bold text-center text-yellow-500">
        Rodada {data[0]?.rodada_atual}
      </h1>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.time.slug}</p>
            <p>{data.pontos_campeonato}</p>
            <p>{data.pontos}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
