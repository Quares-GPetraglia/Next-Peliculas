import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Loading from "../../components/loading/loading";
import AlertError from "../../components/alert/error-alert";
import CardSeries from "../../components/card/series-card";

export default function Series(props) {
  const query = gql`{ series { title id image year numberOfEpisodes } }`;
  const { loading, error, data } = useQuery(query, { fetchPolicy: "no-cache" });

  useEffect(() => {
    props.setTitle('Series');
  });

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        {error && (<AlertError message={'Se produjo un error inesperado'} />)}
        {data?.series && (<CardSeries color="dark" results={data.series} />)}
        {loading && (<Loading color="dark" />)}
      </div>
    </div>
  )
}
