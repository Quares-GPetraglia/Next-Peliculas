import React, { useEffect } from "react";
import { withRouter } from 'next/router'
import { useRouter } from 'next/router'
import { gql, useMutation } from "@apollo/client";
import CardMovie from "../../components/card/movie-card";

const MovieAdd = function MovieAddView(props) {
  const router = useRouter()

  useEffect(() => {
    props.setTitle(props.router.query.title);
  });

  useEffect(() => {
    setMovie(props.router.query)
  }, [props.router.query]);

  const [movie, setMovie] = React.useState(props.router.query);
  const query = gql`mutation movienew($movie: MovieInput!){newMovie(movie: $movie){id title}}`;
  const [addMovieMutation, { data }] = useMutation(query);

  useEffect(() => {
    if (data) {
      router.push('/movies')
    }
  }, [data]);

  const addMovie = () => {
    const variables = {
      movie: {
        "title": movie.title,
        "id": movie.id.replace("/title/", '').replace('/', ''),
        "image": movie.image,
        "year": movie.year,
        "runningTimeInMinutes": movie.runningTimeInMinutes,
      }
    }
    addMovieMutation({ variables: variables });
  };

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16 bg-white dark:bg-gray-800" >
          <CardMovie movie={movie} />
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <button onClick={() => addMovie()} type="button" className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MovieAdd)