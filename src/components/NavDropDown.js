import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { StyledLink, DropDownWrapper, RightNavIcon, Tooltip,
     StyledBurger, RightNav } from "../styles";

export const NavDropDown = () => {
    const [ doesShowIcons, setDoesShowIcons ] = useState(false);
    const handleClickHamburger = () => {
        setDoesShowIcons(!doesShowIcons);
    };

    return (
        <DropDownWrapper doesShowIcons={doesShowIcons}>
            <StyledBurger doesShowIcons={doesShowIcons} onClick={handleClickHamburger}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <RightNav doesShowIcons={doesShowIcons}>
                <RightNavIcon>
                    <Tooltip backgroundColor="#fe4e18">Home</Tooltip> 
                    <StyledLink to="/">
                        <StaticImage src="../images/header/home.svg" alt="About"/> 
                    </StyledLink>
                </RightNavIcon>
                <RightNavIcon>
                    <Tooltip backgroundColor="#f3d75f">Projects</Tooltip> 
                    <StyledLink to="/projects">
                        <StaticImage src="../images/header/projects.svg" alt="Projects"/> 
                    </StyledLink>
                </RightNavIcon>
                <RightNavIcon>
                    <Tooltip backgroundColor="#548afe">Posts</Tooltip> 
                    <StyledLink to="/posts">
                        <StaticImage src="../images/header/posts.svg" alt="Posts"/> 
                    </StyledLink>
                </RightNavIcon>
            </RightNav>
        </DropDownWrapper>
    )
}

