import styled from "styled-components";
import { motion } from "framer-motion";

//! Transition Link
export const LayoutWrapper = styled(motion.div)`
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(14, minmax(auto, 4.2rem)) 1fr;
    /* 따로 template-rows를 정하지 않으면
    display: block처럼 작동한다. */
    gap: 0 2rem;
`;