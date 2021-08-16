import React from 'react';
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { HeroImageWrapper, ContentWrapper,
    H1, P } from '../styles';
import { Layout } from '../components';

const singlePost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    return (
        <Layout>
            <HeroImageWrapper>
                <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}/>
            </HeroImageWrapper>
            <ContentWrapper>
                <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
                <P>{data.mdx.frontmatter.date}</P>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </ContentWrapper>
        </Layout>
    )
}

export default singlePost;

export const pageQuery = graphql`
    query SinglePostQuery($id: String!) {
        # 해당 id에 매치되는것을 찾아 return
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                excerpt
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image {
                id
                childImageSharp {
                    gatsbyImageData
                    }
                }
            }
            body
        }
    }
`
