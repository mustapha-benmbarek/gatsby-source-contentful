/* @title: <<gatsby-004-source-contentful>> program written in gatsby-JS.
 * @desc: A simple webapp starter with blog posts from contentful.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export const query = graphql`
  query($slug: String!) {
    contentfulGatsbyBlog(slug: { eq: $slug }) {
      title
      publisheddate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return (<img alt={alt} src={url} />)
      }
    }
  }

  return (
    <Layout>
      <main role="main" className="inner cover">
        <h1 className="cover-heading">
          {props.data.contentfulGatsbyBlog.title}.
        </h1>
        <p className="lead">
          Created On {props.data.contentfulGatsbyBlog.publisheddate}
          {documentToReactComponents(
            props.data.contentfulGatsbyBlog.body.json,
            options
          )}
        </p>
        <p className="lead">
          <Link className="btn btn-lg btn-secondary" to="/blog/">
            Back
          </Link>
        </p>
      </main>
    </Layout>
  )
}

export default Blog
