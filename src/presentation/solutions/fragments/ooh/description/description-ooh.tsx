"use client";

import { ButtonTag } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
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

const cities = ["São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", "Fortaleza - CE", "Curitiba - PR"]

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


export const OohDescription = () => {
  const router = useRouter();
  
    function handleClick(link: string) {
      router.push(link);
    }
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
      <section  className={styles.sectionModal}>
        <div className={styles.contentHow}>
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

       <section className={styles.sectionModal}>
        <div className={styles.contentRange}>
          <div className={styles.sectionHeader}>
            <h3>Alcance</h3>
            <h2 className={styles.titleLight}>Execução de OOH em todo o Brasil</h2>
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
            {cities.map((c) => (
              <span key={c} className={styles.cityTag}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className={styles.sectionModal}>
        <div className={styles.contentProjects}>
          <div className={styles.sectionHeader}>
            <h3>Portfólio</h3>
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
      </section>

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
      <div className={styles.btnMore}>
    <ButtonTag 
                label="Ver mais projetos"
                size="lg"
                variant="glass"
                icon={<FiArrowRight size={24} color="#EE0874" />}
                onClick={() => handleClick("/portfolio")}
              />
              </div>
    </>
  );
};

export default OohDescription;
