import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout,
    Pagination } from '../components';
import { StyledLink,
    HeroImageWrapper, 
    PostsWrapper, EachPostWrapper,
    H2, P } from '../styles';

const allPosts = ({ pageContext, data }) => {
    const { currentPage, totalNumOfPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalNumOfPages;
    const prevPage = currentPage - 1 === 1 ? "/posts/" : `/posts/${currentPage - 1}`
    const nextPage = `/posts/${currentPage + 1}`
    const postNodes = data.allMdx.nodes

    return (
        <Layout>
            <HeroImageWrapper>
                <StaticImage
                    alt="Hero Image"
                    src="../images/pages/heroImage.jpg" />
            </HeroImageWrapper>
            <PostsWrapper>
                {postNodes.map(postNode => (
                    <EachPostWrapper key={postNode.id}>
                        <H2>
                            <StyledLink to={`/posts/${postNode.frontmatter.slug}`}>
                                {postNode.frontmatter.title}
                            </StyledLink>
                        </H2>
                        <P color="dark2">{postNode.frontmatter.excerpt}</P>
                        <P color="dark3">Posted: {postNode.frontmatter.date}</P>
                    </EachPostWrapper>
                ))}
            </PostsWrapper>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Layout>
    )
}

export default allPosts;


export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
                    excerpt
                }
                id
            }
        }
    }
`