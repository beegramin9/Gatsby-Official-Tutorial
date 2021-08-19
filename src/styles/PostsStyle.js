import styled from "styled-components";

export const EachPostWrapper = styled.article`
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => props.theme.spacings.xSmall};
`