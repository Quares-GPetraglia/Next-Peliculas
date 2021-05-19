import React from "react";
import PropTypes from "prop-types";

export default function CardSerie({ color, serie }) {
  return (
    <div className="px-6">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 flex justify-center">
          <img
            alt={serie.title}
            src={serie.image}
            className="shadow-xl rounded-full align-middle border-none relative -m-16 -ml-20 lg:-ml-16 max-w-10-px h-80 w-80"
          />
        </div>
        <div className="w-full px-4 text-center mt-20">
          <div className="flex justify-center py-4 lg:pt-4 pt-8">
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {serie.year}
              </span>
              <span className="text-sm text-blueGray-400">Año</span>
            </div>
            <div className="mr-4 ml-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {serie.numberOfEpisodes}
              </span>
              <span className="text-sm text-blueGray-400">Episodios</span>
            </div>
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {'Serie'}
              </span>
              <span className="text-sm text-blueGray-400">Tipo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          {serie.title}
        </h3>
      </div>
    </div>
  );
}

CardSerie.defaultProps = {
  color: "light",
};

CardSerie.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
