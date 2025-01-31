import React from "react";
import styles from "./SettingsCard.module.css";

const settings = [
  { label: "Theme", value: "Light" },
  { label: "Language", value: "Eng" },
];

export default function SettingsCard() {
  return (
    <div className={styles.settingsCard}>
      <div className={styles.settingsHeader}>
        <span>Settings</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dfc3e8e6b3984a5a6acca435525cd2950c0ee182b86bb6e213b2ba94791adfd?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt=""
          className={styles.settingIcon}
        />
      </div>
      <hr className={styles.divider} />
      {settings.map((setting, index) => (
        <div key={index} className={styles.settingRow}>
          <span className={styles.settingLabel}>{setting.label}</span>
          <div className={styles.settingValue}>
            <span>{setting.value}</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/341248aa389c7abfbe65a75b74e5850d21502246ffe8a6911aa0025d4a58359d?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
              alt=""
              className={styles.settingIcon}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
