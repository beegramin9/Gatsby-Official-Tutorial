import styled from "styled-components";

export const HeaderWrapper = styled.div`
    grid-column: 2 / span 14;
    height: 5rem;
    margin: 1.25rem 0 0;
    display: flex;
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
        height: 30px;
    }
    & p {
        /* 미완성 */
    }
`