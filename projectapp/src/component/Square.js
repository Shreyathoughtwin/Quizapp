import React from "react";
import Button from "./Button";

const Square = ({value, onClick}) =>{
    
    return(
        <Button onClick={onClick}>{value}</Button>
    
    )
    
};

export default Square;