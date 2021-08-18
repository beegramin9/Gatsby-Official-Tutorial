import styled from "styled-components";

export const ButtonWrapper = styled.div`
    margin-top: 1rem;
    padding: .5rem .75rem;
    background-color: ${props => props.theme.colors.main1};
    border-radius: .5rem;
    color: ${props => props.theme.colors.light1};
    font-weight: 700;
    font-size: 0.875rem;
    width: fit-content;
    transition: filter .3s ease;
    cursor: pointer;
    text-decoration: none;
    &:hover,
    &:focus {
        filter: brightness(110%)
    }

    a {
        color: ${props => props.theme.colors.light1};
        text-decoration: none;
    }
`