import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from "react";
import Header from "../header/header";
import CardSearch from '../card/search-card';

export default function Navbar({ title }) {
  const [searchTitle, setSearchTitle] = React.useState('');
  const [SearchResult, setSearchResult] = React.useState([]);

  useEffect(async () => {
    if (searchTitle.length > 2) {
      const res = await fetch('http://localhost:3000/api/search/' + searchTitle)
      const json = await res.json()
      setSearchResult(json)
    } else {
      setSearchResult([])
    }
  }, [searchTitle])

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <span className="text-white text-sm uppercase hidden lg:inline-block font-semibold">
            {title}
          </span>
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <FontAwesomeIcon icon={['fas', 'search']} />
              </span>
              <input
                type="text"
                placeholder="Buscar..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white dark:bg-gray-800 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                value={searchTitle}
                onChange={(event) => setSearchTitle(event.target.value)}
              />
            </div>
          </form>
        </div>
      </nav>
      {SearchResult.length > 0 ? (
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12 dark:bg-gray-900">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex flex-wrap mt-4">
              <div className="w-full mb-12 px-4">
                <CardSearch results={SearchResult} cleanSearch={() => setSearchTitle('')} />
              </div>
            </div>
          </div>
        </div>
      ) : (<Header />)}
    </>
  );
}