import styles from "./about.module.scss";
import { AboutHeroTag, AboutTabTag } from "./fragments";

const AboutComponent = () => {
  return (
    <>
      <div className={styles.aboutWrapper}>
        <AboutHeroTag />
        <AboutTabTag />
      </div>
    </>
  );
};

export default AboutComponent;
