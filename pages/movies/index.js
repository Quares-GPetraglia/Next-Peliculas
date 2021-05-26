import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import CardMovies from '../../components/card/movies-card'
import Loading from "../../components/loading/loading";
import AlertError from "../../components/alert/error-alert";

export default function Movies(props) {
  const query = gql`{ movies { title id image year runningTimeInMinutes } }`;
  const { loading, error, data } = useQuery(query, { fetchPolicy: "no-cache" });

  useEffect(() => {
    props.setTitle('Peliculas');
  });

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        {error && (<AlertError message={'Se produjo un error inesperado'} />)}
        {data?.movies && (<CardMovies results={data.movies} />)}
        {loading && (<Loading />)}
      </div>
    </div>
  )
}
