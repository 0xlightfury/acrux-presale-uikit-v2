import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <circle cx="45" cy="45" r="44.6" fill="#1B3D51"></circle>
      <path
        d="M59 50.9L45.2 64.7 31.4 50.9 23.4 58.9 45.2 80.6 53.1 72.7 53.1 72.7 66.9 58.9z"
        fill="#00DF00"
      ></path>
      <path
        d="M20.3 47.9L16.4 51.8 20.3 55.7 24.2 51.8z"
        fill="#00DF00"
      ></path>
      <path d="M13.6 41.2L9.6 45.1 13.5 48.9 17.4 45z" fill="#00DF00"></path>
      <path
        d="M24.3 38.2L20.4 34.4 16.5 38.3 20.3 42.1z"
        fill="#00DF00"
      ></path>
      <path d="M27.1 48.9L31 45 27.2 41.2 23.3 45.1z" fill="#00DF00"></path>
      <path d="M66.1 52L70 55.9 73.9 52 70 48.1z" fill="#00DF00"></path>
      <path d="M59.3 45.2L63.1 49.1 67 45.2 63.2 41.3z" fill="#00DF00"></path>
      <path d="M70 42.2L73.9 38.3 70 34.5 66.1 38.4z" fill="#00DF00"></path>
      <path d="M76.9 41.3L73 45.2 76.8 49.1 80.7 45.2z" fill="#00DF00"></path>
      <path
        d="M59 39.2L45.2 25.4 31.4 39.2 23.4 31.2 45.2 9.5 53.1 17.4 53.1 17.4 66.9 31.2z"
        fill="#00DF00"
      ></path>
      <g>
        <path
          d="M36.6 42.7l4.1-1.1v8.5h6.5c1.3 0 2.2-.7 2.9-2.1.4-.9.6-1.9.6-3 0-1.7-.4-3-1.3-4-.6-.6-1.3-.9-2.2-.9H36.6l1.1-3.7h10c2.4 0 4.2 1 5.6 2.9 1.1 1.7 1.7 3.6 1.7 5.9 0 2.4-.6 4.4-2 6-1.3 1.7-3.1 2.5-5.4 2.5h-11v-11z"
          fill="#00DF00"
        ></path>
      </g>
    </Svg>
  );
};

export default Icon;
