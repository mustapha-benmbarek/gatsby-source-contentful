/* @title: <<gatsby-004-source-contentful>> program written in gatsby-JS.
 * @desc: A simple webapp starter with blog posts from contentful.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">Gatsby</h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link className="nav-link" activeClassName="nav-link active" to="/">
            Home
          </Link>
          <Link
            className="nav-link"
            activeClassName="nav-link active"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="nav-link"
            activeClassName="nav-link active"
            to="/about"
          >
            About
          </Link>
          <Link
            className="nav-link"
            activeClassName="nav-link active"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
