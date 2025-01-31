import React from "react";
import styles from "./LearningAssessment.module.css";

export const QuestionCard = ({ title, question, onNext, onClose }) => {
  return (
    <div
      className={styles.assessmentCard}
      role="region"
      aria-label="Assessment Question"
    >
      <button
        className={styles.closeIcon}
        onClick={onClose}
        aria-label="Close assessment"
      >
        ✕
      </button>
      <div className={styles.questionContainer}>
        <h2 className={styles.questionTitle}>{title}</h2>
        <p className={styles.questionText}>{question}</p>
        <button
          className={styles.nextButton}
          onClick={onNext}
          aria-label="Next question"
        >
          Next Question
        </button>
      </div>
      <div className={styles.divider} role="presentation" />
    </div>
  );
};

export default QuestionCard;
