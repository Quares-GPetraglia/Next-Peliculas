import { useEffect } from "react";
import { useRouter } from 'next/router'
import { gql, useQuery, useMutation } from "@apollo/client";
import Loading from "../../components/loading/loading";
import AlertError from "../../components/alert/error-alert";
import CardMovie from "../../components/card/movie-card";
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Movie(props) {
  const router = useRouter()
  const { id } = router.query
  const query = gql`{ movie(id: "${id}") { title id image year runningTimeInMinutes viewed } }`;
  const { loading, error, data } = useQuery(query);
  const mutation = gql`mutation MovieViewedSet($movieId: ID!){setMovieViewed(movieId: $movieId){id}}`;
  const [setMovieMutation, { dataMutation }] = useMutation(mutation);

  useEffect(() => {
    props.setTitle(data?.movie?.title);
  });

  const setMovieViewed = (movieId) => {
    const variables = { movieId: movieId }
    setMovieMutation({ variables: variables });
    Router.reload(window.location.pathname);
  };

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        {error && (<AlertError message={'Se produjo un error inesperado'} />)}
        {loading && (<Loading />)}
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16 bg-white dark:bg-gray-800" >
          {data?.movie && (<CardMovie movie={data.movie} />)}
          {data?.movie.viewed ? (
            <div className="text-center mb-12 mt-3">
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <FontAwesomeIcon className="mr-2 text-lg text-blueGray-400" icon={['fas', 'check']} />
                Pelicula ya vista
              </div>
            </div>
          ) : (
            <div className="text-center mb-12 mt-3">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <button onClick={() => setMovieViewed(data.movie.id)} type="button" className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Marcar como vista
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
