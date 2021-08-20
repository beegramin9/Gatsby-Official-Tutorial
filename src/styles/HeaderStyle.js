import styled from "styled-components";

export const HeaderWrapper = styled.div`
    grid-column: 2 / span 14;
    height: 5rem;
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;
    align-items: center;
    
    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1 / span 16;
        padding: ${props => 
        `0 ${props.theme.spacings.large}`};
    }
`;

export const BlogNameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    & img {
        width: 30px;
        height: 30px;
    }
    & p {
        background: linear-gradient(121.57deg, rgb(33, 28, 24) 18.77%, rgba(70, 65, 61, 0.9) 60.15%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -ms-background-clip: text;
        -ms-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
        font-size: 40;
        letter-spacing: 2px;
    }
`