import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>L.</div>
      <div className={styles.navIcons}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7fc2b275562aafe30a65d7ac7e4cfe93814d5f4ac6829df1734ec9df2f19f28?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt="Nav Icon 1"
          className={styles.navIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b85cf9a4e390b224a4d007c5ecc44c5cf1745b7726d6420f26dc031a900918d?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt="Nav Icon 2"
          className={styles.navIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d900109aa870b98371309b6d4f9a3c2a543c7c974e3a375d75e2194966767c99?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt="Nav Icon 3"
          className={styles.navIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab221be42c930fb36b0ad2803acde8368e1e54037ff94b72fa970ac6ac2a050?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
          alt="Nav Icon 4"
          className={styles.navIcon}
        />
      </div>
    </div>
  );
};

export default Navbar;