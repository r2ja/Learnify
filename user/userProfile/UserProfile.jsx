import React from "react";
import styles from "./UserProfile.module.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import SettingsCard from "./components/SettingsCard/SettingsCard";
import ProfileForm from "./components/ProfileForm/ProfileForm";

export default function UserProfile() {
  return (
    <div className={styles.profileContainer}>
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
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/705967dc31bf2dbeaa50f6bf3b155d0bf03185a2428fd13564dbac55f0723728?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
            alt="Nav Icon 5"
            className={styles.navIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29bb573659b1667c5405f6d360495b96fc8d72a7e7abf33d65fe7c4e8f72f478?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
            alt="Nav Icon 6"
            className={styles.navIcon}
          />
        </div>
      </div>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>User Profile</h1>
        </header>
        <div className={styles.contentWrapper}>
          <aside className={styles.sidebar}>
            <ProfileCard
              name="Your name"
              email="yourname@gmail.com"
              avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f5bf02e10e40deb95fa85ba8fc441aab25d124156f9d3443b3d65a2570e25fa1?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
            />
            <NavigationMenu />
            <SettingsCard />
          </aside>
          <section className={styles.mainSection}>
            <ProfileForm />
          </section>
        </div>
      </div>
    </div>
  );
}