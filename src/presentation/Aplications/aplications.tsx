import {
  FiCalendar,
  FiGrid,
  FiMap,
  FiMonitor,
  FiNavigation,
  FiPackage,
  FiShoppingBag,
} from "react-icons/fi";
import { Content } from "../../components/Content/content";
import styles from "./aplications.module.scss";
import { IconType } from "react-icons";

interface AmbienteItem {
  icone: IconType;
  texto: string;
}

const items: AmbienteItem[] = [
  { icone: <FiMap />, texto: "Metrôs e trens" },
  { icone: <FiNavigation />, texto: "Túneis e vias urbanas" },
  { icone: <FiGrid />, texto: "Mobiliário urbano" },
  { icone: <FiMonitor />, texto: "Outdoors e painéis" },
  { icone: <FiShoppingBag />, texto: "Pontos de venda" },
  { icone: <FiCalendar />, texto: "Eventos e ativações" },
  { icone: <FiPackage />, texto: "Stands e cenografia" },
];

const Aplications = () => {
  return (
    <Content colorBottomPosition="left">
      <section className={styles.contentAmbientes}>
        <div className={styles.header}>
          <h2 className={styles.title}>Onde sua marca pode estar</h2>
          <p className={styles.sub}>
            Aplicamos nossos projetos em diferentes ambientes, formatos e
            contextos — sempre com foco em presença e execução.
          </p>
        </div>

        <ul className={styles.contentAplications}>
          {items.map(({ icone, texto }) => (
            <li key={texto} className={styles.card}>
              <span className={styles.icone}>{icone}</span>
              <span className={styles.texto}>{texto}</span>
            </li>
          ))}
        </ul>
      </section>
    </Content>
  );
};

export { Aplications };
