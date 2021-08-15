import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons,
        P } from '../styles';

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://www.wontaechoi.tech/" target="_blank" rel="noopener norefer">
                        <StaticImage src="../images/svgs/portfolio.svg" alt="Portfolio logo"/>
                    </a>
                    <a href="https://github.com/beegramin9/" target="_blank" rel="noopener norefer">
                        <StaticImage src="../images/svgs/github.svg" alt="Github logo"/>
                    </a>
                    <a href="https://www.instagram.com/beestron9/" target="_blank" rel="noopener norefer">
                        <StaticImage src="../images/svgs/instagram.svg" alt="Instagram logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/wontae-choi-917259209" target="_blank" rel="noopener norefer">
                        <StaticImage src="../images/svgs/linkedin.svg" alt="Linkedin logo"/>
                    </a>
                </FooterSocialIcons>
                <P size='xSmall' color="dark3"
                >ⓒ 2021 Company. All right reserved</P>
            </FooterSocialWrapper>
        </FooterWrapper> 
    )
}