import styled from 'styled-components';

export const HeroImageWrapper = styled.div`
    grid-column: 3 / span 12;
    grid-row: 2 / 6;
    max-height: 640px;
    overflow: hidden;
    position: relative; /* Image에 absolute position을 주기 위해서 */
    box-shadow: ${props => props.theme.shadows.shadow1};
    border-radius: 5px;
    @media ${props => props.theme.breakpoints.tablet} {
        grid-row: 2 / 5;
    }
    @media ${props => props.theme.breakpoints.mobile} {
        grid-row: 2 / 4;
    }
`