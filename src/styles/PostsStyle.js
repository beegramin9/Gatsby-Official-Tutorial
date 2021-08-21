import styled from "styled-components";

export const EachPostWrapper = styled.article`
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => `o ${props.theme.spacings.xSmall}`};

    @media ${props => props.theme.breakpoints.tablet} {
        margin-bottom: 4rem;
    }
    
    @media ${props => props.theme.breakpoints.mobile} {
        margin-bottom: 5rem;
    }
`