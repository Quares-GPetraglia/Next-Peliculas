
import { useEffect } from "react";
import { useRouter } from 'next/router'
import { gql, useQuery } from "@apollo/client";
import Loading from "../../components/loading/loading";
import AlertError from "../../components/alert/error-alert";
import CardSerie from "../../components/card/serie-card";
import CardSeasons from "../../components/card/seasons-card";

export default function Serie(props) {
  const router = useRouter()
  const { id } = router.query
  const query = gql`{ serie(id: "${id}") { title id image year numberOfEpisodes seasons{id, episodes{id}} } }`;
  const { loading, error, data } = useQuery(query);

  useEffect(() => {
    props.setTitle(data?.serie?.title);
  });

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        {error && (<AlertError message={'Se produjo un error inesperado'} />)}
        {loading && (<Loading color="dark" />)}
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16 bg-white">
          {data?.serie && (<CardSerie color="light" serie={data.serie} />)}
          {data?.serie && (<CardSeasons color="light" serieId={id} />)}
        </div>
      </div>
    </div>
  )
}