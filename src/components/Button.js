import React from "react";
import { ButtonWrapper } from "../styles";

const buttonVariants = {
    hover: {
        scale: 1.05,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    },
    tap: {
        scale: 1.05,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    },
};

export const Button = ({children}) => {
    return (
        <ButtonWrapper
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap">
            {children}
        </ButtonWrapper>
    )
}