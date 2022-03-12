import * as React from "react";
import Intro from "../components/intro";
import Layout from "../components/Layout";
import ThemeProvider from "../providers/ThemeProvider";

// markup
const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout>
      <Intro />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
