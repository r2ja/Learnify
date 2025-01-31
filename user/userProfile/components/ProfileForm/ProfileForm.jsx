import React from "react";
import styles from "./ProfileForm.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";

export default function ProfileForm() {
  return (
    <form className={styles.formContainer}>
      <ProfileCard
        name="Your name"
        email="yourname@gmail.com"
        avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9c0254f83a31851d1fc6f8e0bb588771e876fb02f459c28f9dd9249da22251ad?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
      />

      <div className={styles.formField}>
        <label htmlFor="name">Name</label>
        <hr className={styles.fieldDivider} />
      </div>

      <div className={styles.formField}>
        <label htmlFor="email">Email account</label>
        <hr className={styles.fieldDivider} />
      </div>

      <div className={styles.formField}>
        <label htmlFor="mobile">Mobile number</label>
        <hr className={styles.fieldDivider} />
      </div>

      <button type="submit" className={styles.submitButton}>
        Save Change
      </button>
    </form>
  );
}
