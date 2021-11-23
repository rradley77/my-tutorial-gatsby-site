// Step 1: Import React
import React from "react";

import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="My Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="a beautiful golden retriever"
        src="../images/Sherry-sleeping.jpg"
      ></StaticImage>
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;
