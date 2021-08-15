import React, { useState } from 'react';
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
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/posts">Posts</StyledLink>
            </RightNav>
        </>
    )
}

