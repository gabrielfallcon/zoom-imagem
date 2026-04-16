"use client";

import {
  AboutHomeTag,
  ApplicationsTag,
  CasesTag,
  HallTag,
  JobsTag,
} from "./fragments";
import styles from "./home.module.scss";

const HomeComponent = () => {
  return (
    
    <div className={styles.homeWrapper}>
      <div className={styles.homeBackground}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
        >
          <source src="/images/hall-video.mp4" type="video/mp4" />
        </video>

        <div className={styles.heroOverlay} />
        <HallTag />
      </div>
        <AboutHomeTag />
        <JobsTag />
        <ApplicationsTag />
        <CasesTag />
    </div>
  );
};

export default HomeComponent;