import React from "react";
import styles from "./Auth.module.css";

export const SocialButton = ({ icon, text, onClick }) => {
  return (
    <button type="button" className={styles.socialButton} onClick={onClick}>
      <img src={icon} alt="" className={styles.socialIcon} />
      <span>{text}</span>
    </button>
  );
};

export default SocialButton;
