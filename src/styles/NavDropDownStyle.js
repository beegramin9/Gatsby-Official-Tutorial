import styled from 'styled-components';

export const DropDownWrapper = styled.div`
    @media ${(props) => props.theme.breakpoints.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    `


export const StyledBurger = styled.div`
    width: 30px;
    height: 30px;
    z-index: 15;
    display: none;
    @media ${(props) => props.theme.breakpoints.mobile} {
        display: flex;
        /* 이걸 between으로 바꾸면 X자가 안나오고
        space-around으로하면 수평이 안맞는다.. */
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        position: relative;
        left: 3px;
    }
    div {
        width: 30px;
        height: 0.125rem;
        background-color: ${( props ) => props.theme.colors.dark3};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ doesShowIcons }) => doesShowIcons ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ doesShowIcons }) => doesShowIcons ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ doesShowIcons }) => doesShowIcons ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ doesShowIcons }) => doesShowIcons ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`
export const RightNav = styled.div`
    display: flex;
    gap: 0 2rem;
    /* 400px을 내려가면 아이콘이 아니라 RightNav 자체가 안보이는데? */
    @media ${(props) => props.theme.breakpoints.mobile} {
        margin-top: 3rem;
        display: flex;
        gap: 2rem 0;
        flex-direction: column;
        justify-content: flex-start;
        z-index: 19;
        transform: ${({ doesShowIcons }) => doesShowIcons ? 'translateY(0)' : 'translateY(-100vh)'};
        transition: transform 0.6s cubic-bezier(.31,-0.06,.37,1.55);
    }
    /* 아이콘도 안보이고... */
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
        top: -30px;
    }
`

export const Tooltip = styled.span`
    color: ${props => props.theme.colors.light1};
    background-color: ${props => props.backgroundColor};
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
    padding: 5px;
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