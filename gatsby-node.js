const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  /**
   * Category By Slug
   */
  const categories = await graphql(`
    {
      categories: allStrapiCategories {
        nodes {
          slug
        }
      }
    }
  `);
  categories.data.categories.nodes.forEach(category => {
    createPage({
      path: `/category/${category.slug}`,
      component: path.resolve(`src/templates/category-template.tsx`),
      context: {
        slug: category.slug,
      },
    });
  });

  /**
   * Content By Slug
   */
  const content = await graphql(`
    {
      contents: allStrapiContents(filter: { status: { eq: true } }) {
        nodes {
          slug
        }
      }
    }
  `);
  content.data.contents.nodes.forEach(content => {
    createPage({
      path: content.slug,
      component: path.resolve(`src/templates/content-template.tsx`),
      context: {
        slug: content.slug,
      },
    });
  });
};
