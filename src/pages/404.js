// Step 1: Import React
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, Button } from '../components';
import { HeroImageWrapper, ContentWrapper, H1 } from "../styles";
// import { Link } from "gatsby";



// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <HeroImageWrapper>
        <StaticImage src='../images/pages/404Image.jpg' alt="404 Image"/>
      </HeroImageWrapper>
      <ContentWrapper>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Uh-oh... What you're looking for couldn't be found😑
        </H1>
        <Button to="/projects">Back</Button>
      </ContentWrapper>
    </Layout>
  )
}
/* 뒤로가기 */
// <Link to="/">Go home</Link>

export default NotFoundPage
