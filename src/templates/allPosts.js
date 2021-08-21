import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, Seo,
    Pagination } from '../components';
import { StyledLink,
    HeroImageWrapper, ContentWrapper, 
    EachPostWrapper,
    H1, H2, P } from '../styles';

const allPosts = ({ pageContext, data }) => {
    const { currentPage, totalNumOfPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalNumOfPages;
    const prevPage = currentPage - 1 === 1 ? "/posts/" : `/posts/${currentPage - 1}`
    const nextPage = `/posts/${currentPage + 1}`
    const postNodes = data.allMdx.nodes

    //* Allpost에서는 heroImage도 static이고 따로 중요한 데이터가 없으니
    // seo default값을 사용한다
    return (
        <Layout>
            <Seo/>
            <HeroImageWrapper>
                <StaticImage
                    alt="Hero Image"
                    src="../images/pages/postsImage.jpg" />
            </HeroImageWrapper>
            <ContentWrapper>
                <H1 textAlign="center" textShadow="3px 3px 0px rgba(0,0,0,0.2)" margin="0 0 2rem">Blog Posts</H1>
                {postNodes.map(postNode => (
                    <EachPostWrapper key={postNode.id}>
                        <H2 textAlign="center">
                            <StyledLink to={`/posts/${postNode.frontmatter.slug}`}>
                                {postNode.frontmatter.title}
                            </StyledLink>
                        </H2>
                        <P textAlign="center" color="dark2">{postNode.frontmatter.excerpt}</P>
                        <P textAlign="center" color="dark3">Posted: {postNode.frontmatter.date}</P>
                    </EachPostWrapper>
                ))}
            </ContentWrapper>
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