import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme/index";
import Navbar from "components/Navbar";
import Footer1 from "components/Footer";
import JsFiles from "components/js/JsFiles";


function Page({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
      <Footer1 />
      <JsFiles />
    </ThemeProvider>
  );
}

export default Page;
