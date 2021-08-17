import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, Projects } from '../components';
import { HeroImageWrapper, ContentWrapper } from "../styles";

const projectsPage = ( ) => {
  return (
    <Layout>
      <HeroImageWrapper>
        <StaticImage src='../images/pages/projectsImage.jpg' alt="Hero Image"/>
      </HeroImageWrapper>
      <ContentWrapper>
        <Projects/>
      </ContentWrapper>
    </Layout>
  )
}

export default projectsPage;

/* 
Gif파일은 불러오지 못한다
export const gifsQuery = graphql`
  query ProjectGIFsQuery {
    allFile(filter: {sourceInstanceName: {eq: "projectgifs"}}) {
      nodes {
        publicURL
      }
    }
  }
` */