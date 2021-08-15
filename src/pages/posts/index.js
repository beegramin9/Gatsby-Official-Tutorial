import React from 'react';
import { graphql } from "gatsby";
import { Layout } from '../../components';
//* render the actual "body" contents of your MDX blog posts. 
import { MDXRenderer } from 'gatsby-plugin-mdx'; 

const PostsPage = ({data}) => {
    return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map( node => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>
            {node.body}
          </MDXRenderer>
        </article>
      ))}
    </Layout>
  )
}


//* page component에 graphQl로 끌어온 데이터를 추가하는 법
//todo page Component 밖에 새로운 query 변수를 추가한다
// building-block component 방식과 다르다
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    # allFile {, filesystem의 field
      nodes {
      # Inside GraphQL data layer, information is stored in objects, "nodes"
      # which is the smallest form unit data
      # differs from plugins
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`
//* 이 query는 page component에 props.data로 전달되어 component 내에서 사용할 수 있다.

export default PostsPage;