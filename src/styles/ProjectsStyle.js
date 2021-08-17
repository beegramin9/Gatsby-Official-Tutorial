import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
    color: none;
    background-color: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    place-items: center;
    gap: 2rem;
    @media ${(props) => props.theme.breakpoints.tablet} {
        display: flex;
        flex-direction: column;
        padding: 2rem;
}
`
export const ProjectCard = styled.div`
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem 0;
    padding: 1rem .5rem;

    /* image */
    & img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width:100%;
        height:185px;
        object-fit: cover;
        &:hover {
            transition: transform 500ms ease-in-out;
            transform: scale(1.1);
            opacity: 1.5;
        }
    }

    /* title */
    & h3 {
        color: ${(props) => props.theme.colors.buttonpurple};
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 1.5rem;
    }

    /* line */
    & hr {
        margin: 5px auto;
        width: 50px;
        height: 3px;
        border: none;
        color: ${(props) => props.theme.colors.orangeyellow};    /* IE */
        border-color: ${(props) => props.theme.colors.orangeyellow};  /* 사파리 */
        background-color: ${(props) => props.theme.colors.orangeyellow};  /* 크롬, 모질라 등, 기타 브라우저 */
    }
    /* description */
    & p {
        width: 100%;
        height: 17.5em;
        padding: 0 2.5rem;
        color: ${props => props.theme.colors.dark3}; /* Dark mode: #e4e6e7  */
        font-style: 2rem;
        line-height: 24px;
    }
`;

export const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0 2rem;

    & a {
        position: relative;
        text-decoration: none;
        z-index: 5;
        color: ${(props) => props.theme.colors.light2};
        font-size: 1rem;
        padding: .5rem .75rem;
        background-color: ${(props) => props.theme.colors.violet};
        border-radius: 15px;
        transition: 0.5s;
        &:hover{
            background-color: ${(props) => props.theme.colors.buttonpurple};
        }
    }
`;

export const TagCards = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0 1rem;

    & img {
        width: 100%;
        height: 20px;
        border-radius: 0px;
        font-size: 10px;
        &:hover {
            transition: transform 100s ease-in-out;
            transform: scale(0.98);
            opacity: 0.9;
        }
    }
`