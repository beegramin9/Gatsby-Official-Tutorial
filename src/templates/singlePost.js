import React from 'react';
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout, Seo } from '../components';
import { HeroImageWrapper, ContentWrapper,
    H1, P } from '../styles';

const singlePost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    //* publicURL을 가져와야함, getImage()는 이미지를 display할 때 쓰는 바이너리 데이터
    const seoImage = data.mdx.frontmatter.hero_image.publicURL;

    return (
        <Layout>
            <Seo
                title={data.mdx.frontmatter.title}
                image={seoImage}
                description={data.mdx.frontmatter.excerpt}
            />
            <HeroImageWrapper>
                <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}/>
            </HeroImageWrapper>
            <ContentWrapper>
                <H1 textAlign="center" margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
                <P textAlign="center" margin="0 0 1rem 0">{data.mdx.frontmatter.date}</P>
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
                    publicURL
                    childImageSharp {
                        gatsbyImageData
                        }
                }
            }
            body
        }
    }
`
