import React from "react";
import { Wrapper } from "./style";

const Button = (props) => {
    return (
        <Wrapper style={{background: props.color}}>
            {props.children}
        </Wrapper>
    );
};

export default Button;
