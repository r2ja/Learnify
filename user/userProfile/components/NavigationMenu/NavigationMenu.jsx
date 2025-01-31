import React from "react";
import styles from "./NavigationMenu.module.css";

const menuItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb2769b8039545485e15764605a4fb3e6706096b1ec874773f5fcf0a5c4e7557?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
    text: "My Profile",
    hasArrow: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9001a73fe200b3e3de6187cd593a7e572ec7ffe59fcc567c6762744e8ece8ba8?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
    text: "Settings",
    hasArrow: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/438b86e7fb4c72f14326f9d45f3a53e3337f412183af6fbaf68d12a49dd4ba34?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
    text: "Notification",
    hasArrow: false,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ee71fd790bed2c91553ea99a5639a06c715ee0c06c9674018ad3be4b8dcc2fc?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
    text: "Log Out",
    hasArrow: false,
  },
];

export default function NavigationMenu() {
  return (
    <nav>
      {menuItems.map((item, index) => (
        <div key={index} className={styles.menuItem} role="button" tabIndex="0">
          <div className={styles.menuContent}>
            <img src={item.icon} alt="" className={styles.menuIcon} />
            <span className={styles.menuText}>{item.text}</span>
          </div>
          {item.hasArrow && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c505fc3cf770b1065c7f276a666b69bef31dacede4363c93513d4dcf509c657c?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
              alt=""
              className={styles.menuIcon}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
