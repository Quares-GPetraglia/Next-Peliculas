import React from "react";
import PropTypes from "prop-types";
import { gql, useMutation, useQuery } from "@apollo/client";
import Loading from "../loading/loading";
import AlertError from "../alert/error-alert";
import Router from 'next/router';

export default function CardSeasons({ color, serieId }) {
  const [openTab, setOpenTab] = React.useState(1);
  const query = gql`{ serie(id: "${serieId}") { seasons{id, season, episodes{id title year episode season titleType viewed}} } }`;
  const { loading, error, data } = useQuery(query, { fetchPolicy: "no-cache" });
  const mutation = gql`mutation SeasonsAdd($idSerie: ID!, $seasons: [SeasonsInput!]!){addSeasons(idSerie: $idSerie, seasons: $seasons){id title}}`;
  const [addSeasonsMutation, { dataMutation }] = useMutation(mutation);
  const mutationEpisode = gql`mutation EpisodeViewedSet($episodeId: ID!, $seasonId: ID!){setEpisodeViewed(episodeId: $episodeId, seasonId: $seasonId){id season}}`;
  const [setEpisodeMutation, { dataMutationEpisode }] = useMutation(mutationEpisode);

  const addSeasons = async () => {
    const res = await fetch('http://localhost:3000/api/seasons/' + serieId)
    const json = await res.json()
    const variables = { idSerie: serieId, seasons: json }
    addSeasonsMutation({ variables: variables });
    Router.reload(window.location.pathname);
  };

  const setEpisodeViewed = (seasonId, episodeId) => {
    const variables = { episodeId: episodeId, seasonId: seasonId }
    setEpisodeMutation({ variables: variables });
    Router.reload(window.location.pathname);
  };

  return (
    <>
      { error && (<AlertError message={'Se produjo un error inesperado'} />)}
      { loading && (<Loading color="dark" />)}
      {data?.serie.seasons.length === 0 ? (
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <button onClick={() => addSeasons()} type="button" className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Empezar Serie
              </button>
            </div>
          </div>
        </div>
      ) :
        (
          <>
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h3 className="text-blueGray-700 text-xl font-bold">Temporadas</h3>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  {data?.serie.seasons.map(season => {
                    return (
                      <li className="m-2 last:mr-0 flex-auto text-center" key={season.season}>
                        <a
                          className={
                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === season.season
                              ? "text-white bg-lightBlue-600"
                              : "text-lightBlue-600 bg-white")
                          }
                          onClick={e => {
                            e.preventDefault();
                            setOpenTab(season.season);
                          }}
                          data-toggle="tab"
                          href={"#link" + season.season}
                          role="tablist"
                        >
                          {season.season}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    {data?.serie.seasons.map(season => {
                      return (
                        <div className={openTab === season.season ? "block" : "hidden"} id={"link" + season.season} key={"link" + season.season}>
                          <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                              <h6 className="text-blueGray-700 mx-auto font-bold">{'Temporada ' + season.season}</h6>
                            </div>
                          </div>
                          <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                              <tr>
                                <th
                                  className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                  }
                                >
                                  Episodio
                                </th>
                                <th
                                  className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                  }
                                >
                                  Titulo
                                </th>
                                <th
                                  className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                  }
                                >
                                  Año
                                </th>
                                <th
                                  className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                  }
                                >
                                  Visto
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {season.episodes.map(episode => {
                                return (
                                  <tr key={episode.id}>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                      {episode.episode}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                      {episode.title}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                      {episode.year}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                      <div className="form-check">
                                        {episode.viewed ? (
                                          <input className="form-check-input" type="checkbox" id={"flexCheck" + episode.id} checked disabled />
                                        ) : (
                                          <input className="form-check-input" type="checkbox" id={"flexCheck" + episode.id} onClick={() => { setEpisodeViewed(season.id, episode.id) }} />
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}

CardSeasons.defaultProps = {
  color: "light",
};

CardSeasons.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
