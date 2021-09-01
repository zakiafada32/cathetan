const path = require(`path`);
const { createOpenGraphImage } = require(`gatsby-plugin-open-graph-images`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);

  const openGraphImage = createOpenGraphImage(createPage, {
    path: 'assets/open-graph.png', // (1)
    component: path.resolve(`src/templates/openGraph.js`), // (2)
    size: {
      width: 400,
      height: 50,
    }, // (3)
    context: {
      description:
        "Personal blog A collection of my experiences and the things I've learned",
    },
  });

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};
