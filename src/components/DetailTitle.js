import React from "react";
import styles from "./DetailTitle.module.css";

const DetailTitle = (props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.info}>{props.company}</h3>
      <h1 className={styles.title}>{props.title}</h1>
      <h3 className={styles.details}>{props.details}</h3>
    </div>
  );
};

export default DetailTitle;
