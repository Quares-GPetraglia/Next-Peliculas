import React from "react";
import Link from "next/link";

export default function CardSeries({ results }) {
  return (
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 text-white dark:bg-gray-800">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-white">
                Listado de Series
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {results.length > 0 ? 
          (
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700 dark:bg-gray-700 dark:text-white">
                    Titulo
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700 dark:bg-gray-700 dark:text-white">
                    Año
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700 dark:bg-gray-700 dark:text-white">
                    Opciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((item) => {
                  return (
                    <tr key={item.id} className="dark:text-white">
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src={item.image}
                          className="h-12 w-12 bg-white dark:bg-gray-800 rounded-full border"
                          alt={item.title}
                        ></img>{" "}
                        <span className="ml-3 font-bold text-white">
                          {item.title}
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {item.year}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <Link href={{ pathname: `/series/${item.id}`}}>
                            <button
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              Ver
                            </button>
                          </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            ) : 
            (
              <h3 className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700 dark:bg-gray-800">
                    No hay series
              </h3>
            ) }
        </div>
      </div>
  );
}