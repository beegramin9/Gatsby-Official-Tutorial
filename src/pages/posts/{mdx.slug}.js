import React from 'react';
import { graphql } from "gatsby";
//* render the actual "body" contents of your MDX blog posts. 
import { MDXRenderer } from 'gatsby-plugin-mdx';

//* Dynamically pulls in image file
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Layout } from '../../components';
import { HeroImageWrapper } from "../../styles";

const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  // getImage: takes in a File node or an ImageSharp node
  // and returns the gatsbyImageData object for that node.
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <HeroImageWrapper>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}/>
      </HeroImageWrapper>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
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


export default BlogPost;