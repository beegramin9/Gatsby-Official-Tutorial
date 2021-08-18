import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { StyledLink, RightNavIcon, Tooltip,
     StyledBurger, RightNav } from "../styles";

export const NavDropDown = () => {
    const [ open, setOpen ] = useState(false);
    const handleClickHamburger = () => {
        setOpen(!open);
    };

    return (
        <>
            <StyledBurger open={open} onClick={handleClickHamburger}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <RightNav open={open}>
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
        </>
    )
}

