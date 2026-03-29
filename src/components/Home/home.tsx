"use client";
import styles from "./home.module.scss";
import { About } from "../../presentation/About/AboutHome/abouthome";
import { Cases } from "../../presentation/Cases/cases";
import { Footer } from "../../presentation/Footer/footer";
import { Jobs } from "../../presentation/Jobs/jobs";
import { Hall } from "./fragments/hall/hall";
import { Aplications } from "../../presentation/Aplications/aplications";

export default function Home() {
  return (
    <>
      <div className={styles.homeWrapper}>
        <div className={styles.homeBackground} />
        <div className={styles.homeBackground2} />
        <Hall />
        <About />
        <Jobs />
        <Aplications />
        <Cases />
      </div>
      <Footer />
    </>
  );
}

export { Home };
