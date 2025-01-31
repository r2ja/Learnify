import React, { useState } from "react";
import styles from "./Auth.module.css";

export const FormField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  showForgot = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = `${name}-input`;
  const actualType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldHeader}>
        <label htmlFor={inputId} className={styles.fieldLabel}>
          {label}
        </label>
        {showForgot && (
          <button
            type="button"
            className={styles.forgotLink}
            onClick={() => {}}
          >
            Forgot?
          </button>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input
          id={inputId}
          name={name}
          type={actualType}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className={styles.textInput}
          placeholder={placeholder}
          aria-label={label}
        />
        {type === "password" && (
          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4645b0ba159c25103a9e30993db2d723a6479d8603712d3d88f07c30f6a52f04?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
              alt=""
              className={styles.icon}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;