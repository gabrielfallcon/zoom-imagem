"use client";

import { ButtonTag } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import styles from "./proj-description.module.scss";

const projectTypes = [
  {
    icon: "✦",
    title: "Ativações de marca",
    desc: "Projetos que criam interação e presença em pontos estratégicos.",
  },
  {
    icon: "🏛️",
    title: "Instalações especiais",
    desc: "Estruturas desenvolvidas sob medida para campanhas específicas.",
  },
  {
    icon: "🎭",
    title: "Ambientações e cenografia",
    desc: "Criação de ambientes que reforçam identidade e experiência da marca.",
  },
  {
    icon: "🗂️",
    title: "Projetos híbridos",
    desc: "Integração de OOH, PDV e ações especiais em uma única execução.",
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendimento do objetivo e definição do melhor formato.",
  },
  {
    n: "02",
    title: "Desenvolvimento",
    desc: "Criação da solução com foco em viabilidade técnica.",
  },
  {
    n: "03",
    title: "Produção",
    desc: "Execução com controle de qualidade e materiais adequados.",
  },
  {
    n: "04",
    title: "Implementação",
    desc: "Instalação e ativação no local definido.",
  },
];

const cities = [
  "São Paulo - SP",
  "Rio de Janeiro - RJ",
  "Belo Horizonte - MG",
  "Fortaleza - CE",
  "Curitiba - PR",
];

const projects = [
  {
    brand: "Marca A",
    type: "Ativação de Marca",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca B",
    type: "Instalação Especial",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca C",
    type: "Ambientação",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca D",
    type: "Projeto Híbrido",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca E",
    type: "Ativação de Marca",
    img: "/images/senna.jpg",
  },
  {
    brand: "Marca F",
    type: "Cenografia",
    img: "/images/senna.jpg",
  },
];

export const ProjDescription = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <>
      {/* O que são projetos especiais */}
      <section className={styles.sectionModal}>
        <div className={styles.contentWhat}>
          <div className={styles.textBlock}>
            <h3>O que são projetos especiais</h3>
            <h2>O que são projetos especiais de comunicação?</h2>
            <p>
              Projetos especiais são soluções desenvolvidas sob medida para
              campanhas que exigem formatos, estruturas ou execuções fora do
              padrão.
            </p>
            <p>
              Eles combinam criatividade, engenharia e produção para transformar
              ideias em experiências reais de marca — seja em ações
              promocionais, ativações ou instalações personalizadas.
            </p>
          </div>
          <div className={styles.imageBox}>
            <Image
              src="/images/process/urbano.png"
              alt="Projeto especial de comunicação"
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
              alt="Equipe Zoom executando projeto especial"
              width={260}
              height={260}
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h3>O que a Zoom faz</h3>
            <h2>Do conceito à execução, sem depender de terceiros</h2>
            <p>
              A Zoom desenvolve projetos especiais com foco em viabilidade,
              execução e impacto.
            </p>
            <p>
              Atuamos desde o entendimento da necessidade até a entrega final,
              garantindo controle total do processo e consistência no resultado.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de projetos */}
      <section className={styles.sectionModal}>
        <div className={styles.contentTypes}>
          <div className={styles.sectionHeader}>
            <h3>Formatos</h3>
            <h2>Soluções personalizadas para diferentes objetivos</h2>
          </div>
          <div className={styles.cardGrid}>
            {projectTypes.map((item) => (
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
      <section className={styles.sectionModal}>
        <div className={styles.contentHow}>
          <div className={styles.sectionHeader}>
            <h3>Processo</h3>
            <h2 className={styles.titleLight}>
              Como desenvolvemos projetos especiais
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

      {/* Capacidade de execução */}
      <section className={styles.sectionModal}>
        <div className={styles.contentRange}>
          <div className={styles.sectionHeader}>
            <h3>Alcance</h3>
            <h2 className={styles.titleLight}>
              Execução de projetos especiais em diferentes regiões
            </h2>
            <p>
              Nossa estrutura permite desenvolver e executar projetos especiais
              em diferentes cidades, garantindo padrão, segurança e
              consistência em todas as etapas.
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
            <h2>Projetos especiais executados</h2>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <div key={p.brand} className={styles.projectCard}>
                <Image
                  src={p.img}
                  alt={`Projeto especial – ${p.brand}`}
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

      {/* Botão Ver mais */}
      <div className={styles.btnMore}>
        <ButtonTag
          label="Ver mais projetos"
          size="lg"
          variant="glass"
          icon={<FiArrowRight size={24} color="#EE0874" />}
          onClick={() => handleClick("/portfolio")}
        />
      </div>

      {/* CTA final */}
      <section className={styles.sectionModal}>
        <div className={styles.contentCta}>
          <h2>Se a sua campanha precisa sair do padrão, a gente executa.</h2>
          <p>
            Fale com a Zoom e desenvolva um projeto especial com execução real
            e controle completo.
          </p>
          <ButtonTag
            label="Falar com a Zoom"
            size="lg"
            variant="primary"
            icon={<FiArrowRight size={24} color="#fff" />}
            onClick={() => handleClick("/contato")}
          />
        </div>
      </section>
    </>
  );
};

export default ProjDescription; 