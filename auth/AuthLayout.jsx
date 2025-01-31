import React from "react";
import { AuthForm } from "./AuthForm";
import styles from "./Auth.module.css";

export const AuthLayout = ({ type }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          {/* Title */}
          <h1 className={styles.pageTitle}>
            {type === "login" ? "Login Page" : "Create an Account"}
          </h1>

          {/* Forms Container */}
          <div className={styles.formsContainer}>
            {/* Render the appropriate form */}
            <AuthForm type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;