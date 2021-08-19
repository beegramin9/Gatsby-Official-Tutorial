import styled from 'styled-components';

export const IntroductionWrapper = styled.section`
    display: flex;
    gap: 0 2rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
        flex-direction: column;
    }

    div {
        flex: 4;
        @media ${(props) => props.theme.breakpoints.tablet} {
            margin-bottom: 1rem;
        }

        img {
            border-radius: 24px;
            object-fit: content;
        }
    }

    article {
        flex: 6;
        display: flex;
        flex-direction: column;
        gap: 1rem 0;
        letter-spacing: 1px;
    }
`

/* export const ProfileImageWrapper = styled.div`
    flex: 3;
    border-radius: 24px;
`

export const IntroductionContent  = styled.div`
    flex: 7;
` */