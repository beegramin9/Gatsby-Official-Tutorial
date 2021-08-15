import styled from 'styled-components';

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 41px;
    right: 20px;
    z-index: 20;
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
    gap: 1rem;
    
    //* 요거 수정해야함
    @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    z-index: 19;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(200px)'};
    top: 85px;
    right: 15px;
    transition: transform 0.3s ease-in-out;
    gap: 1rem
    }
`;
