import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
// import lock from "../../../media/lock.svg";
import Lock from "../../Lock";

const ProjectCard = (props) => {
  const links = props.links;
  const title = props.title;
  const company = props.company;
  const year = props.year;
  const background = props.background;
  const color = props.color;
  const setLock = props.lock;
  return (
    <div
      className={styles.card_wrapper}
      style={{
        backgroundImage: `url("${background}")`,
      }}
    >
      <Link to={links}>
        <div
          className={styles.card_contents}
          style={{ cursor: `${setLock === true ? "default" : "point"}` }}
        >
          <div>
            <h2
              className={`${styles.title} font_regular`}
              style={{
                color: `${color}`,
              }}
            >
              {title}
            </h2>
            <h4
              className={`${styles.info} font_light`}
              style={{
                color: `${color}`,
              }}
            >
              {company} - {year}
            </h4>
          </div>
          {setLock === true ? <Lock /> : null}
          {/* <img
            style={{ display: `${setLock === true ? "block" : "none"}` }}
            className={styles.lock}
            src={lock}
            alt="lock"
          ></img> */}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;