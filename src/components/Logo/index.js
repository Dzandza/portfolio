import React from "react";
import { ReactComponent as Svg } from "./logo.svg";
import { LogoWrapper } from "./style";

const Logo = () => {
  const height = 40;
  return (
    <LogoWrapper>
      <Svg height={height} width={height * 3} />
    </LogoWrapper>
  );
};
export default Logo;
