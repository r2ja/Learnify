import React from "react";
import styles from "./Dashboard.module.css";

export const LearningAnalysis = () => {
  return (
    <div className={styles.analysisCard}>
      <div className={styles.analysisContent}>
        <div className={styles.analysisIcon} />
        <div className={styles.analysisText}>Learning Style Analysis</div>
      </div>
      <button className={styles.analysisButton}>Take Test</button>
    </div>
  );
};

export default LearningAnalysis;
