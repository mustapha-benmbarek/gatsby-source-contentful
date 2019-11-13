/* @title: <<gatsby-004-source-contentful>> program written in gatsby-JS.
 * @desc: A simple webapp starter with blog posts from contentful.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

import React from "react"

const Footer = () => {
  return (
    <footer className="mastfoot mt-auto">
      <div className="inner">
        <p>
          Gatsby template from <a href="https://getbootstrap.com/">Bootstrap</a>
          , by Mustapha Benmbarek (
          <a
            href="https://github.com/mustapha-benmbarek/"
            target="_blank"
            alt="GitHub"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ).
          <br />
          Copyright © 2019. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
