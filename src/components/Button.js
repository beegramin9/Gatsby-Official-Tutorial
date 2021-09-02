import React from "react";
import { ButtonWrapper } from "../styles";

const buttonVariants = {
    hover: {
        scale: 1.05,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            repeat: Infinity
        }
    },
    tap: {
        scale: 1.05,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            repeat: Infinity
        }
    },
};

export const Button = ({backgroundColor, children, onClick}) => {
    return (
        <ButtonWrapper
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={onClick}
        backgroundColor={backgroundColor}
        >
            {children}
        </ButtonWrapper>
    )
}