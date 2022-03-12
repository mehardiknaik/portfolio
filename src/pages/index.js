import * as React from "react";
import Intro from "../components/intro";
import Layout from "../components/Layout";
import Projects from "../components/projects";
import ThemeProvider from "../providers/ThemeProvider";

// markup
const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout>
      <Intro />
      <Projects />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
