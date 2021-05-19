import React from "react";
import { gql, useQuery } from "@apollo/client";
import Loading from "../loading/loading";
import AlertError from "../alert/error-alert";
import CardStats from "../card/stats-card";

export default function Header() {
  const query = gql`{ stats { viewedMovies moviesToView viewedEpisodes episodesToView totalMovies totalEpisodes } }`;
  const { loading, error, data } = useQuery(query, { fetchPolicy: "no-cache" });

  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          {error && (<AlertError message={'Se produjo un error inesperado'} />)}
          {loading && (<Loading color="dark" />)}
          <div>
            {data?.stats && (
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="PELICULAS VISTAS"
                    statTitle={data.stats.viewedMovies.toString()}
                    statPercent={((100 / data.stats.totalMovies) * data.stats.viewedMovies).toFixed(2).toString()}
                    statPercentColor="text-emerald-500"
                    statDescripiron={"Total " + data.stats.totalMovies + " Peliculas"}
                    statIconName="film"
                    statIconColor="bg-red-500"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="PELICULAS A VER"
                    statTitle={data.stats.moviesToView.toString()}
                    statPercent={((100 / data.stats.totalMovies) * data.stats.moviesToView).toFixed(2).toString()}
                    statPercentColor="text-red-500"
                    statDescripiron={"Total " + data.stats.totalMovies + " Peliculas"}
                    statIconName="ticket-alt"
                    statIconColor="bg-orange-500"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="EPISODIOS VISTOS"
                    statTitle={data.stats.viewedEpisodes.toString()}
                    statPercent={((100 / data.stats.totalEpisodes) * data.stats.viewedEpisodes).toFixed(2).toString()}
                    statPercentColor="text-orange-500"
                    statDescripiron={"Total " + data.stats.totalEpisodes + " Episodios"}
                    statIconName="video"
                    statIconColor="bg-pink-500"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle="EPISODIOS A VER"
                    statTitle={data.stats.episodesToView.toString()}
                    statPercent={((100 / data.stats.totalEpisodes) * data.stats.episodesToView).toFixed(2).toString()}
                    statPercentColor="text-emerald-500"
                    statDescripiron={"Total " + data.stats.totalEpisodes + " Episodios"}
                    statIconName="video-slash"
                    statIconColor="bg-lightBlue-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
