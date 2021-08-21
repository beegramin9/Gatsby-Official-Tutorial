import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { FooterWrapper, FooterIconWrapper, FooterTextWrapper,
        P } from '../styles';

import { GrGatsbyjs } from "react-icons/gr";
const blinkVarinats = {
    hidden: { 
        opacity: 0, 
    },
    visible: { 
        opacity: 1, 
        transition: { yoyo: Infinity, duration: 1.5}
    },
};


export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterIconWrapper>
                <a href="https://www.wontaechoi.tech/" target="_blank" rel="noopener noreferrer">
                    <StaticImage src="../images/footer/portfolio.svg" alt="Portfolio logo"/>
                </a>
                <a href="https://github.com/beegramin9/" target="_blank" rel="noopener noreferrer">
                    <StaticImage src="../images/footer/github.svg" alt="Github logo"/>
                </a>
                <a href="https://www.instagram.com/beestron9/" target="_blank" rel="noopener noreferrer">
                    <StaticImage src="../images/footer/instagram.svg" alt="Instagram logo"/>
                </a>
                <a href="https://www.linkedin.com/in/wontae-choi-917259209" target="_blank" rel="noopener noreferrer">
                    <StaticImage src="../images/footer/linkedin.svg" alt="Linkedin logo"/> 
                </a>
            </FooterIconWrapper>
            <FooterTextWrapper>
                <P fontSize='xSmall' color="dark3">This blog is 
                    <motion.span
                        variants={blinkVarinats}
                        initial="hidden"
                        animate="visible"
                        >🔨powered⚡
                    </motion.span>
                    with Gatsby
                    {'\u00A0'}<GrGatsbyjs size=".8rem" color="#633194" />{'\u00A0'}
                </P>
                <P fontSize='xSmall' color="dark3"
                >ⓒ 2021 Company. All right reserved</P>
            </FooterTextWrapper>
        </FooterWrapper> 
    )
}