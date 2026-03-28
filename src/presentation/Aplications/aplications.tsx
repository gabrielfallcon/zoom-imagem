import { Content } from "../../components/Content/content";
import styles from "./aplications.module.scss";

interface AmbienteItem {
  icone: string;
  texto: string;
}

const items: AmbienteItem[] = [
  { icone: "🚇", texto: "Metrôs e trens" },
  { icone: "🛣️", texto: "Túneis e vias urbanas" },
  { icone: "🪑", texto: "Mobiliário urbano" },
  { icone: "🖼️", texto: "Outdoors e painéis" },
  { icone: "🛍️", texto: "Pontos de venda" },
  { icone: "🎪", texto: "Eventos e ativações" },
  { icone: "🏛️", texto: "Stands e cenografia" },
];

const Aplications = () => {
  return (
    <Content colorBottomPosition="left">
      <section className={styles.ambientes}>
        <div className={styles.header}>
          <h2 className={styles.title}>Onde sua marca pode estar</h2>
          <p className={styles.sub}>
            Aplicamos nossos projetos em diferentes ambientes, formatos e
            contextos — sempre com foco em presença e execução.
          </p>
        </div>

        <ul className={styles.lista}>
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
