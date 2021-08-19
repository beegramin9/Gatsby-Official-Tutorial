import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, Projects } from '../components';
import { HeroImageWrapper, ContentWrapper, H1, P } from "../styles";

const projectsPage = ( ) => {
  return (
    <Layout>
      <HeroImageWrapper>
        <StaticImage src='../images/pages/projectsImage.jpg' alt="Hero Image"/>
      </HeroImageWrapper>
      <ContentWrapper>
        <H1 textAlign="center" textShadow="3px 3px 0px rgba(0,0,0,0.2)" margin="0 0 2rem">Projects</H1>
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