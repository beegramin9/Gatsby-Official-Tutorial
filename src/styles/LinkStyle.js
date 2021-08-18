import styled from "styled-components";
import { Link } from 'gatsby'; 

export const StyledLink = styled(Link)`
    color: ${props => props.theme.colors.dark1};
    text-decoration: none;
`