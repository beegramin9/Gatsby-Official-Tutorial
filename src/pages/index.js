import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, Button } from '../components';
import { HeroImageWrapper, ContentWrapper,IntroductionWrapper,
        H1, P } from "../styles";
import Resume from "../downloads/resume.pdf";

const IndexPage = () => {
    return (
        <Layout>
            <HeroImageWrapper>
                <StaticImage src='../images/pages/indexImage.jpg' alt="Index Image"/>
            </HeroImageWrapper>
            <ContentWrapper>
                <H1 textAlign="center" textShadow="3px 3px 0px rgba(0,0,0,0.2)" margin="0 0 2rem" >
                    {/* $Blog/Developer/Wontae */}
                    Hi there, Glad you are here!
                </H1>
                <IntroductionWrapper>
                    <div>
                        <StaticImage src='../images/pages/profileImage.jpg' alt="Index Image"/>
                    </div>
                    <article>
                        <P>{'\u00A0'}I have got many helps and tips from other fellow developers worldwide. I am in return ready to help!
                        </P>
                        <P>{'\u00A0'}I mostly work on Front-end, proficient in React and other derivative frameworks & libraries.</P>
                        <P>{'\u00A0'}Want to know more about me? Check out my own portfolio Website :)</P>
                        <Button>
                            <a href="https://www.wontaechoi.tech/">
                                Portfolio Website
                            </a>
                        </Button>
                    </article>
                </IntroductionWrapper>
            </ContentWrapper>
        </Layout>
    )
}

export default IndexPage;