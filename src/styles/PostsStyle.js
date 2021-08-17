import styled from "styled-components";

export const PostsWrapper = styled.main`
    grid-column: 4 / span 10;
    grid-row: 5 / span 5;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacings.medium};

    background-color: ${props => props.theme.colors.light2};
    padding: ${props => 
    `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    border-radius: 5px;
    position: relative;
    z-index: 10;
    
    @media ${props => props.theme.breakpoints.tablet} {
        padding: ${props => 
        `${props.theme.spacings.xSmall} ${props.theme.spacings.small}`};
    }
    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => 
        `${props.theme.spacings.xxSmall} ${props.theme.spacings.xSmall}`};
    }
`

export const EachPostWrapper = styled.article`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => props.theme.spacings.xSmall};
`