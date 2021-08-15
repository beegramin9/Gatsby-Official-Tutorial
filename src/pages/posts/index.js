import React from 'react';
import { graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../../components';
import { StyledLink,
        HeroImageWrapper,
        PostsWrapper, EachPostWrapper,
        H2, P } from "../../styles";


const PostsPage = ({data}) => {
    return (
    <Layout>
      <HeroImageWrapper>
        <StaticImage src='../images/heroImage.jpg' alt="Hero Image"/>
      </HeroImageWrapper>
      <PostsWrapper>
        {data.allMdx.nodes.map( node => (
          <EachPostWrapper key={node.id}>
            <H2>
              <StyledLink to={`/posts/${node.slug}`}>
                {node.frontmatter.title}
              </StyledLink>
            </H2>
            <P color="dark2">{node.frontmatter.excerpt}</P>
            <P color="dark3">Posted: {node.frontmatter.date}</P>
          </EachPostWrapper>
        ))}
      </PostsWrapper>
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
          title
          excerpt
          date(formatString: "MMMM D, YYYY")
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