import { FiArrowDown } from "react-icons/fi";
import { Center } from "../../../../components/Center/center";
import { Checkbox } from "../../../../components/Checkbox/checkbox";
import styles from "./hall.module.scss";

const Hall = () => {
  return (
    <Center>
      <div className={styles.hallWrapper}>
        <h1 className={styles.hallTitle}>
          Transformamos presença em percepção de marca com projetos de OOH, PDV
          e ativações em todo o Brasil.
        </h1>

        <h1 className={styles.hallTitleDesktop}>
          Transformamos presença em percepção de marca com projetos de OOH, PDV
          e ativações em todo o Brasil. <br />
        </h1>

        <p className={styles.hallDescriptionMobile}>
          Planejamos, produzimos e executamos projetos que colocam sua marca no
          mundo real — com impacto, consistência e controle em cada etapa
        </p>

        <ul className={styles.listServicesDektop}>
          <li>
            <Checkbox
              label={
                <span className={styles.labelCheck}>Falar com a Zoom</span>
              }
              onChange={function () {}}
            />{" "}
          </li>
          <li>
            <Checkbox
              label={<span className={styles.labelCheck}>Ver projetos</span>}
              onChange={function () {}}
            />{" "}
          </li>
        </ul>

        <div className={styles.boxInfo}>
          <div className={styles.hallContentDescriptionDesktop}>
            <p>
              Planejamos, produzimos e executamos projetos que colocam sua marca
              no mundo real — com impacto, consistência e controle em cada etapa
            </p>
          </div>

          <a href="" className={styles.buttonDown}>
            <FiArrowDown size={40} color="#1E1E1E" />
          </a>
        </div>
      </div>
    </Center>
  );
};

export { Hall };
