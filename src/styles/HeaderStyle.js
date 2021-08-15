import styled from "styled-components";

export const HeaderWrapper = styled.div`
    grid-column: 2 / span 12; /* 2번 라인에서 시작해서 12칸 */
    grid-row: 1 / 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

export const BlogNameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    & img {
        height: 30px;
    }

    & p {

    }
`