import Image from "next/image";
import React from "react";
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

interface Stage {
  id: string;
  phase?: string;
  icon: IconType;
  label: string;
  tools: string[];
  variant: "dashed" | "light" | "medium" | "dark" | "accent";
}

const stages: Stage[] = [
  {
    id: "plan",
    phase: "Planejamento",
    icon: FiClipboard,
    label: "Planejamento técnico",
    tools: ["Cada projeto é pensado para funcionar na prática"],
    variant: "light",
  },
  {
    id: "prod",
    phase: "Produção",
    icon: FiSettings,
    label: "Produção própria",
    tools: ["Controle total sobre qualidade, prazo e execução"],
    variant: "medium",
  },

  {
    id: "exec",
    phase: "Execução",
    icon: FiPlay,
    label: "Execução em campo",
    tools: ["Equipe preparada para implementar com padrão"],
    variant: "dark",
  },
  {
    id: "acc",
    phase: "Acompanhamento",
    icon: FiEye,
    label: "Acompanhamento",
    tools: ["Monitoramento para garantir qualidade"],
    variant: "accent",
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
            className={styles.btn}
            label="Impulsionar meu negócio"
            size="lg"
            variant="primary"
            icon={<FiArrowDownRight size={24} color="#0C1132" />}
          />
        </div>
      </div>
      <h2 className={styles.howOperations}>Como operamos</h2>
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

                <div className={`${styles.bubble} ${styles[stage.variant]}`}>
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
    </ContentTag>
  );
};

export default AboutTabComponent;
