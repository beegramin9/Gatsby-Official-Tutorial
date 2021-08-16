import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, 
        Pagination } from '../components';
import { PostsWrapper, EachPostWrapper,
        H1, P } from '../styles';
import { GrGatsbyjs } from "react-icons/gr";

const allPosts = ({pageContext, data}) => {
    const {currentPage, totalNumOfPages} = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalNumOfPages;
    const prevPage = currentPage - 1 === 1? "/" : `/${currentPage - 1}`  
    const nextPage = `/${currentPage + 1}`
    const postNodes = data.allMdx.nodes
    

    return (
        <Layout>
            <StaticImage
                alt="Hero Image"
                scr="../images/heroImage.jpg"/>
            <PostsWrapper>
                <H1 textAlign="center" margin="1rem 0 2rem 0">
                    $Blog/Developer/Wontae
                </H1>
                <P textAlign="center" color='dark2'>
                    This blog is 🔨made⚡ with Gatsby
                    {'\u00A0'}<GrGatsbyjs size="1.125rem" color="#633194"/>{'\u00A0'}
                    <br/>
                    at <span style={{fontStyle: 'italic'}}>'$HOME/Wontae_Room'</span>{'\u00A0'}😄
                </P>
                {postNodes.map( postNode => (
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