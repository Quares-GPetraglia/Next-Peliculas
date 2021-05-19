import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading({ color }) {
  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <div
              className=
              "font-semibold text-3xl text-white text-center"
            >
              <FontAwesomeIcon icon={['fas', 'spinner']} spin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Loading.defaultProps = {
  color: "light",
};

Loading.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
