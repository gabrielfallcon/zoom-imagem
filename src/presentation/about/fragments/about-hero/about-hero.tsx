import styles from "./about-hero.module.scss";

const AboutHeroComponent = () => {
  return (
    <div className={styles.aboutHero}>
      <div className={styles.aboutDescription}>
        <div className={styles.titleDescription}>
          <h1>Execução que transforma presença em percepção de marca.</h1>
          <p>
            A Zoom é uma empresa especializada em produção e execução de
            projetos de OOH, PDV e comunicação visual, com atuação em todo o
            Brasil.
          </p>
        </div>
        <div className={styles.cardDescription}>
          <p>
            Mais do que planejar, a gente faz acontecer — com controle, escala e
            consistência.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroComponent;
