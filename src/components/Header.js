import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { NavDropDown } from "../components";
import { HeaderWrapper, BlogNameWrapper } from '../styles';
//* useStaticQuery로 graphQl에서 데이터를 얻어온다.
//* graphql은 pass되는 tamplete literal을 graphQL query라고 정의한다.

export const Header = () => {
    

    /* 
    <HeaderWrapper>
        
    </HeaderWrapper>
    
    */
    return (
        <HeaderWrapper>
            <BlogNameWrapper>
                <StaticImage src='../images/header/logo.svg' alt="Blog Logo"/>
                <p>Wontae's Blog</p>
            </BlogNameWrapper>
            <NavDropDown/>
        </HeaderWrapper>
    )
}
