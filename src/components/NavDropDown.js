import React, { useState } from 'react';
import { Link } from "gatsby";
import { StyledBurger, RightNav } from "../styles";

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </RightNav>
        </>
    )
}

