"use client";

import type { Metadata } from "next";
import Image from "next/image";
import styles from "./hall-ooh.module.scss";
import { ButtonTag, CenterTag } from "@/components";
import { FiArrowDownRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Folder } from "lucide-react";

export const metadata: Metadata = {
  title: "Produção de OOH no Brasil | Outdoor, Painéis e Mídia Exterior",
  description:
    "Execução de campanhas de OOH com produção, instalação e atuação nacional. Leve sua marca para a rua com qualidade e escala.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

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

const projects = [
  {
    brand: "Marca A",
    type: "Outdoor 14×4",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca B",
    type: "Frontlight",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca C",
    type: "Mobiliário Urbano",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca D",
    type: "Painel Especial",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca E",
    type: "Outdoor 14×4",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca F",
    type: "Projeto Especial",
    img: "/images/senna.jpg",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className={styles.sectionLabel}>{children}</p>;
}

export const OohHall = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Produção e execução de OOH em{" "}
            <span className={styles.heroHighlight}>todo o Brasil</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Planejamos, produzimos e instalamos campanhas de mídia exterior com
            qualidade, escala e controle em cada etapa.
          </p>
          <div className={styles.heroCtas}>
            <ButtonTag
              label="Falar com a Zoom"
              size="lg"
              variant="tertiary"
              icon={<FiArrowDownRight size={24} color="#EE0874" />}
              onClick={() => handleClick("/contato")}
            />
            <ButtonTag
              label="Ver projetos"
              size="lg"
              variant="tertiary"
              icon={<Folder size={20} color="#EE0874" />}
              onClick={() => handleClick("/portfolio")}
            />
          </div>
        </div>
      </section>

      {/* O que é OOH */}
      {/* <section id="ooh" className={styles.sectionWhite}>
        <div className={`${styles.container} ${styles.twoCol}`}>
          <div className={styles.textBlock}>
            <SectionLabel>Conceito</SectionLabel>
            <h2>
              O que é OOH
              <br />
              (Out of Home)?
            </h2>
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
              src="/images/senna.png"
              alt="Exemplo de mídia OOH em ambiente urbano"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </section> */}

      {/* O que a Zoom faz */}
      {/* <section className={styles.sectionGray}>
        <div
          className={`${styles.container} ${styles.twoCol} ${styles.twoColReverse}`}
        >
          <div className={styles.imageBox}>
            <Image
              src="/images/senna.png"
              alt="Equipe Zoom executando campanha OOH"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <SectionLabel>Nossa atuação</SectionLabel>
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
      </section> */}

      {/* Tipos de OOH */}
      {/* <section id="solucoes" className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionLabel>Formatos</SectionLabel>
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
      </section> */}

      {/* Como funciona */}
      {/* <section id="como-funciona" className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionLabel>Processo</SectionLabel>
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
      </section> */}

      {/* Atuação nacional */}
      {/* <section className={styles.sectionYellow}>
        <div className={`${styles.container} ${styles.twoCol}`}>
          <div className={styles.textBlock}>
            <SectionLabel>Alcance</SectionLabel>
            <h2>Execução de OOH em todo o Brasil</h2>
            <p>
              Atendemos projetos em diferentes regiões do Brasil, garantindo
              padronização, controle e eficiência mesmo em campanhas de grande
              escala.
            </p>
            <p>
              Nossa estrutura permite executar ações simultâneas em múltiplas
              cidades com consistência.
            </p>
          </div>
          <div className={styles.citiesBlock}>
            {["SP", "RJ", "BH", "BSB", "FOR", "POA"].map((c) => (
              <span key={c} className={styles.cityTag}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projetos */}
      {/* <section id="projetos" className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionLabel>Portfólio</SectionLabel>
            <h2>Projetos de OOH executados</h2>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <div key={p.brand} className={styles.projectCard}>
                <Image
                  src={p.img}
                  alt={`Projeto OOH – ${p.brand}`}
                  fill
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <p className={styles.projectBrand}>{p.brand}</p>
                  <p className={styles.projectType}>{p.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Final */}
      {/* <section id="contato" className={styles.sectionCta}>
        <div className={styles.ctaInner}>
          <SectionLabel>Vamos trabalhar juntos</SectionLabel>
          <h2>
            Sua marca precisa estar nas ruas —{" "}
            <span className={styles.heroHighlight}>do jeito certo.</span>
          </h2>
          <p>
            Fale com uma equipe especializada em produção e execução de OOH e
            leve sua marca para os principais pontos de visibilidade.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Falar com a Zoom
          </a>
        </div>
      </section> */}
    </>
  );
};

export default OohHall;
