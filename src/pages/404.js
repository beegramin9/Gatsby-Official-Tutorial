// Step 1: Import React
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, Button } from '../components';
import { HeroImageWrapper, ContentWrapper, H1 } from "../styles";

// markup
const NotFoundPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <HeroImageWrapper>
        <StaticImage src='../images/pages/404Image.jpg' alt="404 Image"/>
      </HeroImageWrapper>
      <ContentWrapper>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Uh-oh... What you're looking for couldn't be found😑
        </H1>
        <div style={{display:'flex', justifyContent:"center"}}>
          <Button>
            <span onClick={() => window.history.back()}>
              Back
            </span>
          </Button>
        </div>
      </ContentWrapper>
    </Layout>
  )
}

export default NotFoundPage
