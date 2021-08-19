import styled from "styled-components";

const fontSizes = { medium: "1.125rem", small: "1rem", 
                    xSmall: "0.875rem", default: "1.125rem"}
const lineHeights = { medium: "1.4375rem", small: "1.375rem", 
                    xSmall: "1.125rem", default: "1.4375rem"}

export const P = styled.p`
    margin: ${props => props.margin? props.margin : 0};
    font-size : ${props => fontSizes[props.fontSize] || fontSizes['default']};
    line-height: ${props => lineHeights[props.lineHeight] || lineHeights['default']};;
    text-decoration: ${props => props.textDecoration ? props.textDecoration : "none"};
    //* gatsby-config에서 400, 700이란 특정 값을 import했기 때문에 사용가능
    font-weight: ${props => props.bold ? 700 : 400 };
    color: ${props => {
        const selectedColor = props.color ? props.color : 'dark1'
        return props.theme.colors[selectedColor]
    }};
    text-align: ${props => props.textAlign ? props.textAlign : 'none' };
`;

export const H1 = styled.h1`
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: ${props => {
        const selectedColor = props.color ? props.color : 'dark1'
        return props.theme.colors[selectedColor]
    }};
    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : 'none' };
    margin: ${props => props.margin? props.margin : 0};
    text-shadow: ${props => props.textShadow};
`

export const H2 = styled.h2`
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: ${props => {
        const selectedColor = props.color ? props.color : 'dark1'
        return props.theme.colors[selectedColor]
    }};
    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : 'none' };
    margin: ${props => props.margin? props.margin : 0};
`

export const MdxTypography = styled.article`
    h1,h2,h3,h4,h5,h6 {
        color: ${props => props.theme.colors.dark1}
    }
    h1:not(:first-child),h2,h3,h4,h5,h6 {
        margin-top: 2rem;
    }
    h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: 400;
    }
    h2 {
        font-size: 1.5rem;
        line-height: 1.875rem;
        font-weight: 400;
    }
    h3 {
        font-size: 1.375rem;
        line-height: 1.625rem;
        font-weight: 700;
    }
    h4 {
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    h5 {
        font-size: 1.125rem;
        line-height: 1.375rem;
        font-weight: 700;
    }
    h6 {
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: 700;
    }
    p {
        font-size: 1.125rem;
        line-height: 1.875rem;
        font-weight: 400;
        color: ${props => props.theme.colors.dark2};
        margin-top: 2rem;
    }    
    a {
        color: ${props => props.theme.colors.main1};
        text-decoration: none;
    }    
    strong {
        font-weight: 700;
    }
    em {
        font-style: italic;
    }
    del {
        text-decoration: line-through;
    }
    blockquote p {
        font-style: italic;
        font-size: 1.5rem;
        line-height: 2.125rem;
        text-align: center;
        max-width: 36rem;
        margin: 3rem auto;
    }
    ul, ol {
        color: ${props => props.theme.colors.dark2};
        margin: 1rem 0 1rem 2rem;
    }
    li {
        margin: 0.25rem 0;
    }   
    hr {
        border: 0;
        height: 1px;
        background: ${props => props.theme.colors.dark1};
        opacity: 0.1;
        margin-top: 2rem;
    }
    table {
        width: 100%;
        border-spacing: 0.25rem;
        border-collapse: collapse;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        border:  1px solid ${props => props.theme.colors.dark3};
    }
    th, td {
        text-align: left;
        padding: 0.5rem;
        font-weight: 700;
        border:  1px solid ${props => props.theme.colors.dark3};
    }

`