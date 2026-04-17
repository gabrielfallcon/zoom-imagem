import { ContentTag } from "@/components";
import { IconType } from "react-icons";
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

interface AmbienteItem {
  icon: IconType;
  texto: string;
  image: string;
}

const items: AmbienteItem[] = [
  { icon: FiMap, texto: "Metrôs e trens" , image: "/images/projects/Chevrolet-01.webp" },
  { icon: FiNavigation, texto: "Túneis e vias urbanas", image:"/images/projects/bauducco1.webp" },
  { icon: FiGrid, texto: "Mobiliário urbano" ,image:"/images/projects/intelbras1.webp"},
  { icon: FiMonitor, texto: "Outdoors e painéis" ,image:"/images/projects/avon1.webp"},
  { icon: FiShoppingBag, texto: "Pontos de venda" ,image:"/images/projects/shopee1.jpg"},
  { icon: FiCalendar, texto: "Eventos e ativações" ,image:""},
  { icon: FiPackage, texto: "Stands e cenografia" ,image:""},
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
          {items.map(({ icon: Icon, texto, image }) => (  
            <li key={texto} className={styles.card} style={{ backgroundImage: `url(${image})`}}>
              
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
