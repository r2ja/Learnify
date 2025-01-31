import React from "react";
import styles from "./Dashboard.module.css";

export const CourseCard = ({ title, author, duration, rating, imageUrl }) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseInfo}>
        <div className={styles.courseImage}>
          {imageUrl && <img src={imageUrl} alt="" />}
        </div>
        <div className={styles.courseDetails}>
          <div className={styles.courseTitle}>{title}</div>
          <div className={styles.courseAuthor}>{author}</div>
        </div>
      </div>
      <div className={styles.courseMeta}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4be089ae68497b801a798319e81370f9b10c76fa85a75b660468cafe6f319c4b?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt=""
          className={styles.metaIcon}
        />
        <div>{duration}</div>
      </div>
      <div className={styles.courseRating}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f99fabee25b6b90c047201885c90717662226f89d34484593ce926d035614e78?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt=""
          className={styles.metaIcon}
        />
        <div>{rating}</div>
      </div>
      <button className={styles.viewCourse}>View course</button>
    </div>
  );
};

export default CourseCard;
