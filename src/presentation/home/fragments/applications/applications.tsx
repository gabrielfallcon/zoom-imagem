import {
  FiCalendar,
  FiGrid,
  FiMap,
  FiMonitor,
  FiNavigation,
  FiPackage,
  FiShoppingBag,
} from "react-icons/fi";
import styles from "./applications.module.scss";
import { IconType } from "react-icons";
import { ContentTag } from "@/components/content";

interface AmbienteItem {
  icon: IconType;
  texto: string;
}

const items: AmbienteItem[] = [
  { icon: FiMap, texto: "Metrôs e trens" },
  { icon: FiNavigation, texto: "Túneis e vias urbanas" },
  { icon: FiGrid, texto: "Mobiliário urbano" },
  { icon: FiMonitor, texto: "Outdoors e painéis" },
  { icon: FiShoppingBag, texto: "Pontos de venda" },
  { icon: FiCalendar, texto: "Eventos e ativações" },
  { icon: FiPackage, texto: "Stands e cenografia" },
];

const ApplicationsComponent = () => {
  return (
    <ContentTag colorBottomPosition="left">
      <section className={styles.contentAmbientes}>
        <div className={styles.header}>
          <h2 className={styles.title}>Onde sua marca pode estar</h2>
          <p className={styles.sub}>
            Aplicamos nossos projetos em diferentes ambientes, formatos e
            contextos — sempre com foco em presença e execução.
          </p>
        </div>

        <ul className={styles.contentAplications}>
          {items.map(({ icon: Icon, texto }) => (
            <li key={texto} className={styles.card}>
              <span>
                <Icon size={24} />
              </span>
              <span className={styles.texto}>{texto}</span>
            </li>
          ))}
        </ul>
      </section>
    </ContentTag>
  );
};

export default ApplicationsComponent;
