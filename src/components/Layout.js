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


//* useStaticQuery로 graphQl에서 데이터를 얻어온다.
//* graphql은 pass되는 tamplete literal을 graphQL query라고 정의한다.
export const Layout = ({children}) => {
    //* building-block component에 graphQl로 끌어온 데이터를 추가하는 법
    //todo building-block page Component 안에 새로운 query 변수를 추가한다
    // page component 방식과 다르다
    /* const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `) */
    
    //! Root Redirection
    // const isRoot = location.pathname === withPrefix('/');
    // console.log('isRoot:',isRoot)

    return (
        <LayoutWrapper>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Header/>
                {children}
                <Footer/>
            </ThemeProvider>
        </LayoutWrapper>
    )
}
