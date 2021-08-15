import React from 'react';
import { graphql } from "gatsby";
//* render the actual "body" contents of your MDX blog posts. 
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../../components';


const BlogPost = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
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
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`


export default BlogPost;