import React from "react";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className="font_regular font_gray">{props.company}</h2>
        <p className={`${styles.title} title_h1 font_extraBold`}>
          {props.title}
        </p>
        {/* <div className={styles.info_cover}>
        <h3 className="font_regular">{props.goal}</h3>
      </div> */}
        <div className={styles.info_cover}>
          <h3 className="font_regular">{props.role}</h3>
        </div>
        <h3 className={`${styles.details} font_light`}>{props.details}</h3>
      </div>
    </div>
  );
};

export default ProjectDetail;