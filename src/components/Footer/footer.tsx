import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.content}>
        <div className={styles.contentLogo}>
          {/* <img src="/images/plinapps-white.png" alt="PlinApps" /> */}
        </div>

        <ul className={styles.listPolicy}>
          <li>Política de Privacidade</li>
          <li>Termos de Uso</li>
          <li>Política de Cookies</li>
        </ul>

        <p className={styles.policy}>
          Zoom © 2026 Todos os direitos reservados
        </p>

        <ul className={styles.listSocialMobile}>
          <li>
            <div>
              <FiInstagram size={16} color="#000000" />
            </div>

            <span>@zoomimage</span>
          </li>
          <li>
            <div>
              <FiPhone size={16} color="#000000" />
            </div>

            <span>(11) 95798-2407</span>
          </li>
          <li>
            <div>
              <FiMail size={16} color="#000000" />
            </div>

            <span>contato@plinapps.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
