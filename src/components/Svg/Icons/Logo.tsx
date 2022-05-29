import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props} style={{width: "48px"}}>
      <image width="512" height="512" href={'/images/acrux_logo.png'}/>
    </Svg>
  );
};

export default Icon;

