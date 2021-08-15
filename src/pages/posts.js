import React from 'react';
import { graphql } from "gatsby";
import { Layout } from '../components';

const PostsPage = ({data}) => {
    return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map( node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))}
      </ul>
    </Layout>
  )
}


//* page component에 graphQl로 끌어온 데이터를 추가하는 법
//todo page Component 밖에 새로운 query 변수를 추가한다
// building-block component 방식과 다르다
export const query = graphql`
  query {
    allFile {

      nodes {
      # Inside GraphQL data layer, information is stored in objects, "nodes"
      # which is the smallest form unit data
      # differs from plugins
        name
      }
    }
  }
`
//* 이 query는 page component에 props.data로 전달되어 component 내에서 사용할 수 있다.

export default PostsPage;