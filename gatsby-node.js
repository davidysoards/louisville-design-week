/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // The graphql function call returns a Promise
  return graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/^.+/pages/.+$/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            fileAbsolutePath
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let component, pathName;
      if (node.frontmatter.templateKey === 'home') {
        pathName = '/';
        component = path.resolve(`src/pages/index.js`);
      } else {
        pathName = node.frontmatter.path || node.fields.slug;
        component = path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        );
      }
      createPage({
        path: pathName,
        component: component,
        context: {
          slug: node.fields.slug,
          id: node.id,
        },
      });
    });
  });
};
