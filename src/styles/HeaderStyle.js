import styled from "styled-components";

export const HeaderWrapper = styled.div`
    grid-column: 2 / span 14;
    height: 3rem;
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;
    /* NavDropDown이 세로가 훨씬 더 길기 때문에 center로 잡으면
    BlogNameWrapper와 수평이 맞지 않는다. */
    align-items: flex-start;
    
    @media ${props => props.theme.breakpoints.mobile} {
        /* 2에서부터 15개씩이어야 총 16,
        근데 사실 맨 끝에 선이 하나 더 있으니 17임 */
        grid-column: 1 / 17;
        padding: ${props => 
        `0 ${props.theme.spacings.large}`};
    }
`;

export const BlogNameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    & img {
        width: 30px;
        height: 30px;
    }
    & p {
        background: linear-gradient(121.57deg, rgb(33, 28, 24) 18.77%, rgba(70, 65, 61, 0.9) 60.15%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -ms-background-clip: text;
        -ms-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
        font-size: 40;
        letter-spacing: 2px;
    }
`