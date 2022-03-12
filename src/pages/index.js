import * as React from "react";
import Seo from "../components/common/SEO";
import Footer from "../components/Footer";
import Intro from "../components/intro";
import Layout from "../components/Layout";
import Projects from "../components/projects";
import Skills from "../components/Skills";
import ThemeProvider from "../providers/ThemeProvider";

// markup
const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Seo />
        <Intro />
        <Projects />
        <Skills />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
