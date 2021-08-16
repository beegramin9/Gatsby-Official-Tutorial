import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { StyledLink,
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
                <StyledLink to="/about">
                    <StaticImage src="../images/header/about.svg" alt="About"/> 
                </StyledLink>
                <StyledLink to="/projects">
                    <StaticImage src="../images/header/projects.svg" alt="Projects"/> 
                </StyledLink>
                <StyledLink to="/posts">
                    <StaticImage src="../images/header/posts.svg" alt="Posts"/> 
                </StyledLink>
            </RightNav>
        </>
    )
}

