import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <circle cx="256.2" cy="256.3" r="256" fill="#1B3D51"></circle>
      <path
        d="M335.5 290.1L256.2 368.9 177.4 290.1 131.4 335.7 256.2 460.5 301.9 414.9 301.9 414.9 381 335.7z"
        fill="#00DF00"
      ></path>
      <path
        d="M113.4 272.9L91.1 295.3 113.4 317.7 135.9 295.3z"
        fill="#00DF00"
      ></path>
      <path
        d="M74.7 234.1L52.2 256.5 74.2 278.5 96.7 256.1z"
        fill="#00DF00"
      ></path>
      <path
        d="M136.2 216.9L113.8 194.9 91.4 217.3 113.4 239.3z"
        fill="#00DF00"
      ></path>
      <path
        d="M152.6 278.5L175.1 256.1 153.1 234.1 130.6 256.5z"
        fill="#00DF00"
      ></path>
      <path
        d="M376.2 296.1L398.6 318.5 421 296.1 398.6 273.7z"
        fill="#00DF00"
      ></path>
      <path
        d="M337.5 257.3L359.5 279.3 381.9 256.9 359.9 234.9z"
        fill="#00DF00"
      ></path>
      <path
        d="M398.6 240.1L421 217.7 399 195.7 376.6 218.1z"
        fill="#00DF00"
      ></path>
      <path
        d="M438.2 234.5L415.9 256.9 437.9 279.3 460.2 256.9z"
        fill="#00DF00"
      ></path>
      <path
        d="M335.5 222.5L256.2 143.3 177.4 222.5 131.4 176.9 256.2 52.1 301.9 97.7 301.9 97.7 381 176.9z"
        fill="#00DF00"
      ></path>
      <g>
        <path
          d="M206.8 242.7l23.6-6.4v48.8h37.2c7.2 0 12.4-4 16.4-12 2.4-5.2 3.6-10.8 3.6-17.2 0-10-2.4-17.2-7.2-22.8-3.6-3.6-7.6-5.2-12.4-5.2h-61.2l6.4-21.2h57.2c13.6 0 24.4 5.6 32 16.8 6.4 9.6 10 20.8 10 33.6 0 13.6-3.6 25.2-11.2 34.4-7.6 9.6-18 14.4-31.2 14.4h-63.2v-63.2z"
          fill="#00DF00"
        ></path>
      </g>
      <defs>
        <linearGradient id="paint0_linear_logoround" x1="256" y1="0" x2="256" y2="512" gradientUnits="userSpaceOnUse">
          <stop stopColor="#54DADE" />
          <stop offset="0.762157" stopColor="#24C7D6" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
