import { Footer } from "../../presentation/Footer/footer";
import styles from "./about.module.scss";
import AboutHero from "./fragments/abouthero";
import AboutTab from "@/presentation/AboutTab/abouttab";

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
