import React from "react";
import styles from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}  // Conditionally renders a label element only if the `label` prop is provided.
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;