"use client";

import styles from "./home.module.scss";
import {
  AboutHomeTag,
  ApplicationsTag,
  CasesTag,
  HallTag,
  JobsTag,
} from "./fragments";

const HomeComponent = () => {
  return (
    <>
      <div className={styles.homeWrapper}>
        <div className={styles.homeBackground} />
        <div className={styles.homeBackground2} />
        <HallTag />
        <AboutHomeTag />
        <JobsTag />
        <ApplicationsTag />
        <CasesTag />
      </div>
    </>
  );
};

export default HomeComponent;
