import React from "react";
import { ButtonWrapper } from "../styles";

export const Button = ({children, to, download}) => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <ButtonWrapper to={to} download={download ? download : ""}>
                {children}
            </ButtonWrapper>
        </div>
    )
}