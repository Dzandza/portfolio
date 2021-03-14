import React from "react";
import Navbar from "../Navbar";
import { StyledDefaultLayout } from "./style";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyledDefaultLayout>{children}</StyledDefaultLayout>
    </>
  );
};

export default DefaultLayout;

export * from "./style";
