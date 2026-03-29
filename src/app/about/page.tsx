import { Content } from "@/components/Content/content";
import styles from "./abouttab.module.scss";

export default function AboutTab() {
  return (
    <section className={styles.contentAbout}>
      <Content colorBottomPosition="right" colorTopPosition="right"></Content>
    </section>
  );
}

export { AboutTab };
