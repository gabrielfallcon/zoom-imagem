"use client";
import styles from "./home.module.scss";

import { About } from "../About/about";
import { Cases } from "../Cases/cases";
import { Footer } from "../Footer/footer";
import { Jobs } from "../Jobs/jobs";
import { Hall } from "./fragments/hall/hall";
import { Talking } from "../Talking/talking";
import { Aplications } from "../Aplications/aplications";

const Home = () => {
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
        <Talking />
      </div>
      <Footer />
    </>
  );
};

export { Home };
