import classes from "./Button.module.css";
import englishCV from "../../../assets/files/CV English.pdf";
import React from "react";

const Button = (props) => {
  const file = englishCV;

  return (
    <React.Fragment>
      <a
        className={classes.Button}
        href={file}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    </React.Fragment>
  );
};

export default Button;
