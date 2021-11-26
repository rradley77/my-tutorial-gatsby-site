import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={node.slug}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`;

export default BlogPage;

//this is a blog page
