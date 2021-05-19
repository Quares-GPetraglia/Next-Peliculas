import React from "react";
import PropTypes from "prop-types";

export default function CardMovie({ color, movie }) {
    return (
        <div className="px-6">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                    <img
                        alt={movie.title}
                        src={movie.image}
                        className="shadow-xl rounded-full align-middle border-none relative -m-16 -ml-20 lg:-ml-16 max-w-10-px h-80 w-80"
                    />
                </div>
                <div className="w-full px-4 text-center mt-20">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                {movie.year}
                            </span>
                            <span className="text-sm text-blueGray-400">Año</span>
                        </div>
                        <div className="mr-4 ml-4  p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                {movie.runningTimeInMinutes}
                            </span>
                            <span className="text-sm text-blueGray-400">Minutos</span>
                        </div>
                        <div className="p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                {'Pelicula'}
                            </span>
                            <span className="text-sm text-blueGray-400">Tipo</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {movie.title}
                </h3>
            </div>
        </div>
    );
}

CardMovie.defaultProps = {
    color: "light",
};

CardMovie.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
