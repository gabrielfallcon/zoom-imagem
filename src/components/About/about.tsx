import AboutTab from "@/presentation/AboutTab/abouttab";
import { Footer } from "../Footer/footer";
import styles from "./about.module.scss";
import AboutHero from "./fragments/abouthero";

export default function About() {
  return (
    <>
      <div className={styles.aboutWrapper}>
        <AboutHero />
        <AboutTab />
      </div>
      <Footer />
    </>
  );
}

export { About };

