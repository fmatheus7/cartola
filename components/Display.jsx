import React, { useState } from "react";
import Confronts from "./Confronts";
import { gql, useQuery } from "@apollo/client";

const GET_TEAMS = gql`
  query {
    confronts {
      id
      score1
      score2
      team1
      team2
    }
  }
`;

const Display = () => {
  const { data, error, loading } = useQuery(GET_TEAMS);
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error{error.message}</p>;

  console.log(GET_TEAMS);
  console.log(data);
  const weekConfronts = data.confronts;

  return (
    <div className='my-4  mx-auto text-white  lg:w-[680px] h-full'>
      <div>
        <h1 className='text-center my-8 font-bold text-yellow-500 text-2xl'>
          Rodada 5
        </h1>
        <div>
          <Confronts weekConfronts={weekConfronts} />
        </div>
      </div>
    </div>
  );
};

export default Display;
