import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    position: relative;
    top: -50px;

    grid-column: 2 / span 14 ;
    min-height: 11.25rem;
    
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const FooterIconWrapper = styled.div`
    display: flex;
    gap: 0 2rem;
    & img {
        width: 30px;
        height: 30px;
        transition: filter 0.3s ease;
        :hover, :focus {
            filter: brightness(50%);
        }
    }
`

export const FooterTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`