/* @title: <<gatsby-004-source-contentful>> program written in gatsby-JS.
 * @desc: A simple webapp starter with blog posts from contentful.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <main role="main" className="inner cover">
      <h1 className="cover-heading">Home.</h1>
      <p className="lead">
        Welcome to the landing page developed with the framework Gatsby.
      </p>
      <p className="lead">
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-secondary"
          alt="Gatsby"
        >
          Learn more
        </a>
      </p>
    </main>
  </Layout>
)

export default IndexPage
