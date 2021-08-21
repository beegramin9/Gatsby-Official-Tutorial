import styled from "styled-components";

export const ContentWrapper = styled.main`
    position: relative;
    top: -50px;
    z-index: 10;
    
    grid-column: 4 / span 10;
    background-color: ${props => props.theme.colors.light2};
    padding: ${props => 
    `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    border-radius: 5px;
    @media ${props => props.theme.breakpoints.tablet} {
        padding: ${props => 
        `${props.theme.spacings.xSmall} ${props.theme.spacings.small}`};
    }
    @media ${props => props.theme.breakpoints.mobile} {
        display: flex;
        flex-direction: column;
        margin: ${props => 
        `0 ${props.theme.spacings.small} ${props.theme.spacings.xxSmall}`};
        padding: ${props => 
        `${props.theme.spacings.small} ${props.theme.spacings.xSmall}`};
    }
`