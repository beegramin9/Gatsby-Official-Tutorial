import styled from "styled-components";
import { motion } from "framer-motion";

//! Transition Link
//* Styled Component + Framer Motion
export const LayoutWrapper = styled(motion.div)`
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(14, minmax(auto, 4.2rem)) 1fr;
    /* 따로 template-rows를 정하지 않으면
    display: block처럼 작동한다. */
    gap: 0 2rem;

    /* 여기에 모바일을 위한 flex를 해야함
    grid로하면 저 min 4.2rem때문에 남는 공간이 생기네. 딱 안맞고 */
    @media ${(props) => props.theme.breakpoints.mobile} {
        display: flex;
        flex-direction: column;
    }
`;