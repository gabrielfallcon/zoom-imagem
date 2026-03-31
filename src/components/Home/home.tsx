"use client";

import styles from "./home.module.scss";
import { AboutHome } from "../../presentation/AboutHome/abouthome";
import { Cases } from "../../presentation/Cases/cases";
import { Footer } from "../Footer/footer";
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
        <AboutHome />
        <Jobs />
        <Aplications />
        <Cases />
      </div>
      <Footer />
    </>
  );
}

export { Home };
