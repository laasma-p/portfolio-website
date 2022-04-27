import classes from "./Button.module.css";
import englishCV from "../../../assets/files/CV English.pdf";
import danishCV from "../../../assets/files/CV Dansk.pdf";
import React from "react";

const Button = (props) => {
  const file = englishCV;

  return (
    <React.Fragment>
      {props.language === "en" ? (
        <a
          className={classes.Button}
          href={file}
          target="_blank"
          rel="noreferrer"
        >
          {props.children}
        </a>
      ) : (
        <a
          className={classes.Button}
          href={danishCV}
          target="_blank"
          rel="noreferrer"
        >
          {props.children}
        </a>
      )}
    </React.Fragment>
  );
};

export default Button;
