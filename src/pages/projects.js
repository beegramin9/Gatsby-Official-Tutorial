import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../components';
import { HeroImageWrapper, ContentWrapper } from "../styles";

const projectsPage = () => {
  return (
    <Layout>
      <HeroImageWrapper>
        <StaticImage src='../images/pages/heroImage.jpg' alt="Hero Image"/>
      </HeroImageWrapper>
      <ContentWrapper>
        <h1>Home Page</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </ContentWrapper>
    </Layout>
  )
}

export default projectsPage;