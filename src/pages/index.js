import React from 'react';
import { Layout, Button } from '../components';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroImageWrapper, ContentWrapper,
        H1, P } from "../styles";
import { GrGatsbyjs } from "react-icons/gr";
import Resume from "../downloads/resume.pdf";

const IndexPage = () => {

    return (
        <Layout>
            <HeroImageWrapper>
                <StaticImage src='../images/pages/aboutImage.jpg' alt="About Image"/>
            </HeroImageWrapper>
            <ContentWrapper>
                <H1 textAlign="center" margin="0 0 2rem 0">
                    $Blog/Developer/Wontae
                </H1>
                <P textAlign="center" color='dark2'>
                    This blog is 🔨made⚡ with Gatsby
                    {'\u00A0'}<GrGatsbyjs size="1.125rem" color="#633194" />{'\u00A0'}
                    <br />
                    at <span style={{ fontStyle: 'italic' }}>'$HOME/Wontae_Room'</span>{'\u00A0'}😄
                </P>
                <Button>
                    <a href={Resume} download="resume-WontaeChoi.pdf">
                        Download Resume
                    </a>
                </Button>
            </ContentWrapper>
        </Layout>
    )
}

export default IndexPage;