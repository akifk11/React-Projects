import React from "react";
import "./button.css"

const Button = ({onClick}) => {
  return (<button onClick={onClick} className="button">verify</button>);
};

export default Button;
