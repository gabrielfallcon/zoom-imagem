"use client";

import Image from "next/image";
import { IconType } from "react-icons";
import {
  FiArrowDownRight,
  FiClipboard,
  FiEye,
  FiPlay,
  FiSettings,
} from "react-icons/fi";
import styles from "./about-tab.module.scss";
import { ButtonTag, ContentTag } from "@/components";
import { Gauge, Layers, ShieldCheck, Target } from "lucide-react";
import React from "react";

interface Stage {
  id: string;
  phase?: string;
  icon: IconType;
  label: string;
  tools: string[];
  color: "bubleColor";
}

const stages: Stage[] = [
  {
    id: "plan",
    phase: "Planejamento",
    icon: FiClipboard,
    label: "Planejamento técnico",
    tools: ["Cada projeto é pensado para funcionar na prática"],
    color: "bubleColor",
  },
  {
    id: "prod",
    phase: "Produção",
    icon: FiSettings,
    label: "Produção própria",
    tools: ["Controle total sobre qualidade, prazo e execução"],
    color: "bubleColor",
  },

  {
    id: "exec",
    phase: "Execução",
    icon: FiPlay,
    label: "Execução em campo",
    tools: ["Equipe preparada para implementar com padrão"],
    color: "bubleColor",
  },
  {
    id: "acc",
    phase: "Acompanhamento",
    icon: FiEye,
    label: "Acompanhamento",
    tools: ["Monitoramento para garantir qualidade"],
    color: "bubleColor",
  },
];

const Arrow: React.FC = () => (
  <div className={styles.arrow}>
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.arrowHead} />
  </div>
);

const features = [
  {
    icon: ShieldCheck,
    title: "Execução real",
    description: "Não dependemos de terceiros.",
  },
  {
    icon: Layers,
    title: "Consistência",
    description: "Entrega padronizada.",
  },
  {
    icon: Gauge,
    title: "Agilidade com controle ",
    description: "Velocidade com qualidade.",
  },
  {
    icon: Target,
    title: "Visão prática ",
    description: "Projetos pensados para funcionar.",
  },
];

const AboutTabComponent = () => {
  return (
    <ContentTag colorTopPosition="right">
      <div className={styles.contentAbout}>
        <Image
          alt="Sobre nós"
          src="/images/about-zoom.png"
          width={586}
          height={500}
        />

        <div className={styles.aboutDescription}>
          <span>Sobre Nós</span>

          <h2>
            Somos a <strong>Zoom</strong>
          </h2>

          <p>
            A Zoom iniciou suas atividades em 2000, atuando na produção gráfica
            de grandes formatos para mobiliário urbano.
            <br />
            <br />
            Ao longo dos anos, evoluímos nossa estrutura e nos especializamos na
            execução de projetos de comunicação em escala, com foco em OOH, PDV
            e projetos especiais.
            <br />
            <br />
            Hoje, contamos com um parque gráfico de alta capacidade e uma
            operação preparada para atender demandas em diferentes regiões do
            Brasil.
            <br />
            <br />
            Com mais de duas décadas de atuação, a Zoom se consolidou como uma
            das principais empresas do país na produção para mobiliário urbano,
            atendendo grandes agências e marcas nas principais capitais.
            <br />
            <br />
            Com unidades em São Paulo e Salvador, garantimos operação
            consistente em diferentes regiões do país.
          </p>

          <ButtonTag
            variant="primary"
            className={styles.btn}
            label="Impulsionar meu negócio"
            size="lg"
            color="primary"
            icon={<FiArrowDownRight size={24} color="#0C1132" />}
          />
        </div>
      </div>
      <h2 className={styles.subititles}>Como operamos</h2>
      <div className={styles.contentOperations}>
        {stages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <React.Fragment key={stage.id}>
              <div className={styles.stageCol}>
                {stage.phase && (
                  <p className={styles.bubbleTitle}>{stage.phase}</p>
                )}
                {!stage.phase && <div className={styles.phaseEmpty} />}

                <div className={`${styles.bubble} ${styles[stage.color]}`}>
                  <span className={styles.bubbleLabel}>
                    <Icon size={34} />
                    {stage.label && (
                      <p className={styles.label}>{stage.label}</p>
                    )}
                  </span>
                </div>

                {stage.tools.length > 0 && (
                  <ul className={styles.tools}>
                    {stage.tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                )}
              </div>

              {index < stages.length - 1 && <Arrow />}
            </React.Fragment>
          );
        })}
      </div>

      <h2 className={styles.subititles}>Capacidade e escala</h2>

      <div className={styles.contentCapacity}>
        <div className={styles.descriptionCapacity}>
          <p>
            Atendemos projetos em diferentes regiões do Brasil, com capacidade
            de executar campanhas simultâneas mantendo padronização e qualidade.
          </p>

          <p>
            Nossa estrutura permite presença consistente, independentemente da
            escala.
          </p>
        </div>
        <div className={styles.imageCapacityWrapper}>
          <Image
            className={styles.imageCapacity}
            alt="Mapa do Brasil"
            src="/images/maps.png"
            width={120}
            height={120}
          />
        </div>
      </div>

      <h2 className={styles.subititles}>DIFERENCIAIS</h2>
      <div className={styles.contentDifferencials}>
        <div className={styles.ImageWrapper}>
          <div className={styles.imageCard} />
          <div className={`${styles.imageCard} ${styles.imageCardOffset}`} />
        </div>

        <div className={styles.contentFeatures}>
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon size={20} />
              </div>
              <div className={styles.featureText}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentTag>
  );
};

export default AboutTabComponent;
