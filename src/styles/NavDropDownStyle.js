import styled from 'styled-components';

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    right: 40px;
    z-index: 15;
    display: none;
    @media ${(props) => props.theme.breakpoints.mobile} {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${( props ) => props.theme.colors.dark1};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`
export const RightNav = styled.div`
    display: flex;
    gap: 2rem;

    @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    z-index: 19;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(200px)'};
    top: 85px;
    right: 45px;
    transition: transform 0.3s ease-in-out;
    gap: 1.5rem
    }

    img {
        width: 30px;
        height: 30px;
    }
`;

export const RightNavIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;


    &:hover span {
        opacity: 1;
        pointer-events: auto;
        top: -40px;
    }
`



export const Tooltip = styled.span`
    color: ${props => props.theme.colors.light1};
    background-color: ${props => props.backgroundColor};
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
    padding: 7px;
    border-radius: 25px;
    position: absolute;
    z-index: 25;
    top: 0px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &:before{
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        background-color: ${props => props.backgroundColor};
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
    }
`