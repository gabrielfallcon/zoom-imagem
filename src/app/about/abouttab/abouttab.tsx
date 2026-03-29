import styles from "./abouttab.module.scss";

export default function AboutTab() {
  return (
    <section className={styles.contentAbout}>
      <div className={styles.aboutHero}>
        <div className={styles.aboutDescription}>
          <h1>Execução que transforma presença em percepção de marca.</h1>
          <p>
            A Zoom é uma empresa especializada em produção e execução de
            projetos de OOH, PDV e comunicação visual, com atuação em todo o
            Brasil.
          </p>
          <span>
            Mais do que planejar, a gente faz acontecer — com controle, escala e
            consistência.
          </span>
        </div>
      </div>
    </section>
  );
}

export { AboutTab };