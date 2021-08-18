//* gatsby-node.js runs at build time on Node environment
// can run certain functions like fetching data
// and generate pages base off of that fetched data 

// createPages: fetches data, asynchronous
// graphql: Graphql query funciton
// actions: set of methods, one of which is to generate pages
exports.createPages = async ({ actions, graphql }) => {
    // slug를 찾는 이유는, 해당 page의 route로 사용할 것이기 때문
    const { data } = await graphql(`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                        id
                    }
                }
            }
        }
    `)
    //* Create paginated pages for posts
    const postPerPage = 5;
    const totalNumOfPages = Math.ceil(data.allMdx.edges.length / postPerPage)
    Array.from({ length: totalNumOfPages }).forEach((_, pageIndex) => {
        actions.createPage({
            path: pageIndex === 0 ? '/posts/' : `/posts/${pageIndex + 1}`,
            component: require.resolve("./src/templates/allPosts.js"),
            // context: 
            context: {
                limit: postPerPage,
                skip: pageIndex * postPerPage,
                totalNumOfPages,
                currentPage: pageIndex + 1
            }
        })
    });

    //* Create single blog post
    data.allMdx.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug;
        const id = edge.node.id;
        actions.createPage({
            path: `/posts/${slug}`,
            component: require.resolve('./src/templates/singlePost.js'),
            context: { id }
        })
    });
}