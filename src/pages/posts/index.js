import React from 'react';
import { Link, graphql } from "gatsby";
import { Layout } from '../../components';

const PostsPage = ({data}) => {
    return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map( node => (
        <article key={node.id}>
          <h2>
            <Link to={`/posts/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
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
        slug
      }
    }
  }
`
// 8bc784c9-a37c-59b5-9625-32e0e1cdbd9b
//* 이 query는 page component에 props.data로 전달되어 component 내에서 사용할 수 있다.

export default PostsPage;