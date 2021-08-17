import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, Projects } from '../components';
import { HeroImageWrapper, ContentWrapper } from "../styles";

const projectsPage = () => {
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