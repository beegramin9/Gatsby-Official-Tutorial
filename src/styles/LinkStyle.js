import styled from "styled-components";
import { Link } from 'gatsby'; 

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.dark1}
`