import styled from 'styled-components';

export const HeroImageWrapper = styled.div`
    grid-column: 3 / span 12;
    max-height: 640px;
    overflow: hidden;
    position: relative; /* Image에 absolute position을 주기 위해서 */
    box-shadow: ${props => props.theme.shadows.shadow1};
    border-radius: 5px;
    @media ${props => props.theme.breakpoints.tablet} {
    }
    @media ${props => props.theme.breakpoints.mobile} {
        margin: ${props => 
        `0 ${props.theme.spacings.xSmall}`};
    }
`