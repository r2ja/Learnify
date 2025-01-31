import React from "react";
import styles from "./Dashboard.module.css";
import { CourseCard } from "./CourseCard";
import { NavigationBar } from "./NavigationBar";
import { UserHeader } from "./UserHeader";
import { LearningAnalysis } from "./LearningAnalysis";

const courseData = [
  {
    title: "Learn Figma",
    author: "by Christopher Morgan",
    duration: "6h 30min",
    rating: "4.9",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4be089ae68497b801a798319e81370f9b10c76fa85a75b660468cafe6f319c4b?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
  },
  // Add other courses here
];

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <NavigationBar />
      <div className={styles.mainContent}>
        <UserHeader />
        <LearningAnalysis />
        <div className={styles.coursesSection}>
          <h2 className={styles.sectionTitle}>Personalized Courses</h2>
          <div className={styles.courseFilters}>
            <button className={styles.filterActive}>All Courses</button>
            <button className={styles.filter}>The Newest</button>
            <button className={styles.filter}>Top Rated</button>
            <button className={styles.filter}>Most Popular</button>
          </div>
          <div className={styles.coursesList}>
            {courseData.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <div>
              <h3 className={styles.progressTitle}>Progress</h3>
              <div className={styles.progressSubtitle}>Learning Hours</div>
            </div>
            <button className={styles.periodSelector}>
              Weekly
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17f619a9a6863ff87ac9c63b39afb766a69ff2814d83ce8df9874ab1c5015e48?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
                alt=""
                className={styles.dropdownIcon}
              />
            </button>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0176335d5cc319ae867fe63642d99c464bca773a6671dd1f2fb33e3efaa262?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
            alt="Learning progress chart"
            className={styles.progressChart}
          />
        </div>
        <div className={styles.learnBotSection}>
          <div className={styles.learnBotContent}>
            <div>
              <h2 className={styles.learnBotTitle}>LearnBot</h2>
              <p className={styles.learnBotDescription}>
                Your personal AI Assistant
              </p>
              <button className={styles.tryButton}>Give it a Go</button>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/70bc9d88e6578682c2e5f12d5ff69266676d75d988e8f84617bdbbbda1589a33?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
              alt="LearnBot assistant"
              className={styles.learnBotImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;