import React from "react";
import { ButtonWrapper } from "../styles";

export const Button = ({children}) => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <ButtonWrapper>
                {children}
            </ButtonWrapper>
        </div>
    )
}