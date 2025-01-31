import React from "react";
import styles from "./ProfileCard.module.css";

export default function ProfileCard({ name, email, avatarSrc }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.userInfo}>
        <img
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className={styles.avatar}
        />
        <div className={styles.userDetails}>
          <div className={styles.userName}>{name}</div>
          <div className={styles.userEmail}>{email}</div>
        </div>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}
