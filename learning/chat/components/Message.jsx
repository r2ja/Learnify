import React from "react";
import styles from "./Message.module.css";

export const Message = ({ content, avatar, isUser, accentColor }) => {
  return (
    <div
      className={`${styles.messageContainer} ${isUser ? styles.reversed : ""}`}
    >
      <img src={avatar} alt="Avatar" className={styles.userAvatar} />
      <div className={styles.messageBox}>
        <div className={styles.messageContent}>{content}</div>
        <div
          className={styles.borderAccent}
          style={{ backgroundColor: accentColor }}
        />
      </div>
    </div>
  );
};
