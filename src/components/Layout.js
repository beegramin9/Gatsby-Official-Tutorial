import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from '../themes/theme';
// import { withPrefix } from "gatsby";
// import { Link, useStaticQuery, graphql } from 'gatsby'; 
import { Header, Footer } from "../components";
import { LayoutWrapper } from "../styles";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light};
    }
    code, code > * {
        font-family: ${props => props.theme.fonts.code};
    }
`

const transitionLinkVariants = {
    hidden: { 
        opacity: 0, 
        x: '100vw' 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: .4 }
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }
    }
};

export const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <LayoutWrapper
                variants={transitionLinkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <GlobalStyle/>
                <Header/>
                {children}
                <Footer/>
            </LayoutWrapper>
        </ThemeProvider>
    )
}
