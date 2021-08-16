import React from 'react';
import { Layout, Button } from '../components';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroImageWrapper, ContentWrapper,
        H1, P } from "../styles";
import { GrGatsbyjs } from "react-icons/gr";


const AboutPage = () => {
    /* 이력서 다운로드
    https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/
    File Downloads */

    return (
        <Layout>
            <HeroImageWrapper>
                <StaticImage src='../images/pages/aboutImage.jpg' alt="About Image"/>
            </HeroImageWrapper>
            <ContentWrapper>
                <H1 textAlign="center" margin="1rem 0 2rem 0">
                    $Blog/Developer/Wontae
                </H1>
                <P textAlign="center" color='dark2'>
                    This blog is 🔨made⚡ with Gatsby
                    {'\u00A0'}<GrGatsbyjs size="1.125rem" color="#633194" />{'\u00A0'}
                    <br />
                    at <span style={{ fontStyle: 'italic' }}>'$HOME/Wontae_Room'</span>{'\u00A0'}😄
                </P>
                <Button to="/projects">Download Resume</Button>
            </ContentWrapper>
        </Layout>
    )
}

export default AboutPage;