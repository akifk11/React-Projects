import React from "react";
import "./input.css"

const Input = ({type, placeHolder, onChange}) => {
  return (<input className="input" type={type}  placeholder={placeHolder} onChange={onChange}/>);
};

export default Input;
