/* @title: <<gatsby-004-source-contentful>> program written in gatsby-JS.
 * @desc: A simple webapp starter with blog posts from contentful.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.
 */

const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");
  const res = await graphql(`
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

  res.data.allContentfulGatsbyBlog.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  });
};
