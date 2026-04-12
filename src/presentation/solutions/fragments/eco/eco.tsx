import styles from "./eco.module.scss";
import EcoHall from "./hall/eco-hall";
import EcoDescription from "./description/eco-desc";

export const EcoComponent = () => {
  return (
    <div className={styles.ecoWrapper}>
      <EcoHall />

      <EcoDescription />
    </div>
  );
};

export default EcoComponent;
