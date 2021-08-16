import React from "react";
import { ButtonWrapper } from "../styles";

export const Button = ({children, to}) => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <ButtonWrapper to={to}>
                {children}
            </ButtonWrapper>
        </div>
    )
}