import {
  FiArrowDownRight,
  FiEye,
  FiMapPin,
  FiTarget,
  FiTool,
} from "react-icons/fi";
import { Content } from "../../components/Content/content";
import styles from "./cases.module.scss";
import { Button } from "../../components/Button/button";
const steps = [
  {
    icon: FiTarget,
    title: "Planejamento de campanha",
    description:
      "Definição da melhor estratégia para presença em mídia OOH, PDV ou ativações.",
  },
  {
    icon: FiTool,
    title: "Produção de materiais",
    description:
      "Desenvolvimento técnico e produção com controle de qualidade.",
  },
  {
    icon: FiMapPin,
    title: "Instalação e execução",
    description: "Implementação em campo com equipe especializada.",
  },
  {
    icon: FiEye,
    title: "Monitoramento e acompanhamento",
    description: "Garantia de padrão e funcionamento correto das ações",
  },
];

const projects = [
  {
    title: "Metrô - Vila Sônia",
    image: "/images/process/metro.png",
  },
  {
    title: "Intelbras - Rua Pamplona",
    image: "/images/process/urbano.png",
  },
  {
    title: "Metrô - Vila Sônia",
    image: "/images/process/metro.png",
  },
  {
    title: "Metrô - Vila Sônia",
    image: "/images/process/metro.png",
  },
];

const Cases = () => {
  

  return (
    <Content colorTopPosition="right">
      <div className={styles.contentTitle}>
        <h2>Projetos de OOH, PDV e ativações executados em todo o Brasil</h2>

        <span>
          Atuamos na produção e execução de campanhas publicitárias com foco em
          presença de marca, impacto visual e padronização em diferentes
          localidades.
        </span>
      </div>
      <ul className={styles.listCases}>
        {projects.map((item, index) => (
          <li
            key={index}
            className={styles.listCaseItem}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>

      <div className={styles.process}>
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={index} className={styles.step}>
              <div className={styles.iconWrapper}>
                <Icon size={20} />
              </div>

              <div className={styles.content}>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.contentCopy}>
        <h3> Sua marca já deveria estar sendo vista. </h3>

        <div className={styles.copyDescription}>
          <p>
            Fale com uma equipe especializada em produção de{" "}
            <strong>OOH, PDV e projetos especiais </strong>e leve sua marca para
            os principais pontos de contato com o público.
          </p>
          

          <Button
            label="Falar com a Zoom"
            size="lg"
            variant="tertiary"
            icon={<FiArrowDownRight size={24} color="#EE0874" />}
          />
        </div>
      </div>
    </Content>
  );
};

export { Cases };
