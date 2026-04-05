"use client";

import Image from "next/image";
import styles from "./description-ooh.module.scss";

const oohTypes = [
  {
    icon: "🪧",
    title: "Outdoors",
    desc: "Produção e instalação de campanhas em outdoor com alta visibilidade e alcance.",
  },
  {
    icon: "💡",
    title: "Painéis e Frontlights",
    desc: "Estruturas de grande formato para campanhas de impacto.",
  },
  {
    icon: "🏙️",
    title: "Mobiliário Urbano",
    desc: "Presença em pontos estratégicos da cidade, como abrigos de ônibus e relógios urbanos.",
  },
  {
    icon: "✦",
    title: "Projetos personalizados",
    desc: "Execuções sob medida para campanhas que exigem soluções diferenciadas.",
  },
];

const steps = [
  {
    n: "01",
    title: "Planejamento",
    desc: "Definição da melhor estratégia de presença para a campanha.",
  },
  {
    n: "02",
    title: "Produção",
    desc: "Desenvolvimento dos materiais com controle técnico e qualidade.",
  },
  {
    n: "03",
    title: "Instalação",
    desc: "Execução em campo com equipe especializada.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    desc: "Garantia de padrão e correta implementação.",
  },
];

export const OohDescription = () => {
  return (
    <>
      {/* O que é OOH */}
      <section className={styles.sectionModal}>
        <div className={styles.contentWhat}>
          <div className={styles.textBlock}>
            <h3>Conceito</h3>
            <h2>O que é OOH (Out of Home)?</h2>
            <p>
              OOH (Out of Home) é toda forma de publicidade realizada fora de
              casa, como outdoors, painéis, mobiliário urbano e outras soluções
              de mídia exterior.
            </p>
            <p>
              Esse tipo de mídia é utilizado para aumentar a visibilidade da
              marca, gerar reconhecimento e impactar o público em pontos
              estratégicos do dia a dia.
            </p>
          </div>
          <div className={styles.imageBox}>
            <Image
              src="/images/process/urbano.png"
              alt="Mídia OOH em ambiente urbano"
              width={260}
              height={260}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* O que a Zoom faz */}
      <section className={styles.sectionModal}>
        <div className={styles.contentAtuation}>
          <div className={styles.imageBox}>
            <Image
              src="/images/senna.jpg"
              alt="Equipe Zoom executando campanha OOH"
              width={260}
              height={260}
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h3>O que a zoom faz</h3>
            <h2>Execução completa de campanhas de OOH</h2>
            <p>
              A Zoom atua na produção e execução de projetos de OOH, garantindo
              que cada campanha seja implementada com padrão, agilidade e
              consistência — independentemente da localização.
            </p>
            <p>
              Cuidamos de todas as etapas, da preparação dos materiais à
              instalação final.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de OOH */}
      <section className={styles.sectionModal}>
        <div className={styles.contentTypes}>
          <div className={styles.sectionHeader}>
            <h3>Formatos</h3>
            <h2>Soluções em mídia exterior</h2>
          </div>
          <div className={styles.cardGrid}>
            {oohTypes.map((item) => (
              <div key={item.title} className={styles.card}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className={styles.sectionModal}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h3>Processo</h3>
            <h2 className={styles.titleLight}>
              Como funciona a execução de OOH
            </h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((s) => (
              <div key={s.n} className={styles.stepCard}>
                <span className={styles.stepNumber}>{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OohDescription;
