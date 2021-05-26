import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="block py-4  dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left dark:text-white">
                Copyright © {new Date().getFullYear()}{" "}
                <span
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1 dark:text-white"
                >
                  Gon
                </span>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <Link href={{ pathname: `/movies` }}>
                    <span className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3 dark:text-white">
                      Peliculas
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={{ pathname: `/movies` }}>
                    <span className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3 dark:text-white">
                      Series
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
