import * as React from "react";
import About from "../components/About";
import Seo from "../components/common/SEO";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
        <Header />
          <Intro />
          <About />
          <Projects />
          <Skills />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
