/* @title: <<gatsby-004-source-contentful>> program written in gatsby-JS.
 * @desc: A simple webapp starter with blog posts from contentful.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGatsbyBlog(sort: { fields: publisheddate, order: DESC }) {
        edges {
          node {
            title
            slug
            publisheddate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <main role="main" className="inner cover">
        <h1 className="cover-heading">Blog.</h1>
        <p className="lead">
          Welcome to the page blog that list down all the markdown blog posts
          available within the gatsby application.
        </p>

        <p className="lead">
          <ul className="list-group">
            {data.allContentfulGatsbyBlog.edges.map(edge => {
              return (
                <li className="list-group-item" id="blog_item">
                  {edge.node.publisheddate} &nbsp;
                  <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
                </li>
              );
            })}
          </ul>
        </p>
      </main>
    </Layout>
  );
};

export default BlogPage;
