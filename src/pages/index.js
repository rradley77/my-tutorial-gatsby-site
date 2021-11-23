// Step 1: Import React
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="My Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to="/About">About</Link>
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;
