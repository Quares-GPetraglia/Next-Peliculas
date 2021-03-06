import React from "react";
import Link from "next/link";

export default function CardSearch({ results, cleanSearch }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white dark:bg-gray-800">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-lg text-blueGray-700">
              Resultados
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dark:bg-gray-700 dark:text-white">
                Titulo
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dark:bg-gray-700 dark:text-white">
                Año
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dark:bg-gray-700 dark:text-white">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((item) => {
              let image = (item.image && item.image?.url) ? item.image.url : '../img/404.jpg';
              return (
                <tr key={item.id} className="dark:text-white">
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <img
                      src={image}
                      className="h-12 w-12 bg-white dark:bg-gray-800 rounded-full border"
                      alt={item.title}
                    ></img>{" "}
                    <span className="ml-3 font-bold text-blueGray-600">
                      {item.title}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.year}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {(item.titleType === 'movie') ? (
                      <Link href={{ pathname: '/movies/add', query: { id: item.id, title: item.title, year: item.year, image: image, runningTimeInMinutes: item.runningTimeInMinutes } }}>
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={cleanSearch}
                        >
                          Ver
                        </button>
                      </Link>
                    ) : (
                      <Link href={{ pathname: '/series/add', query: { id: item.id, title: item.title, year: item.year, image: image, numberOfEpisodes: item.numberOfEpisodes } }}>
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={cleanSearch}
                        >
                          Ver
                          </button>
                      </Link>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
