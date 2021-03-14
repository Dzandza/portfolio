import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import DefaultLayout from "./components/Layouts";

const App = () => (
  <ThemeProvider theme={theme}>
    <DefaultLayout>
    </DefaultLayout>
  </ThemeProvider>
);

export default App;
