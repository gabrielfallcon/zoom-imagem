import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin, FiX } from "react-icons/fi";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.content}>
        <div className={styles.contentLogo}>
          <Image src="/images/logo-zoom.svg" alt="PlinApps" width={200}
          height={60}/>
        </div>

        <ul className={styles.listInstitucional}>
          <span>Zoom</span>
          <li>Sobre</li>
          <li>Notícias</li>
          <li>Portifólio</li>
          <li>Linha Eco</li>
        </ul>

        <p className={styles.localization}>
          <strong>São Paulo</strong><br/>
          Rua Paulo Emílio Salles Gomes, 45, - Limão
          São Paulo - SP, 02710-110, Brasil
        </p>

        <p className={styles.localization}>
          <strong>Lauro de Freitas</strong><br/>
          R. Prisco José de Souza, s/n - Lote Amp Recreio Ipitanga, Q 28 - Caji - Lauro de Freitas - BA, 42700-130, Brasil
        </p>

        <ul className={styles.listSocialMobile}>
          <li>
            <div>
              <FiInstagram size={22} color="#000000" />
            </div>

            <span>@zoomimagebr</span>
          </li>
          <li>
            <div>
              <FiX size={22} color="#000000" />
            </div>

            <span>@zoomimagem</span>
          </li>
          <li>
            <div>
              <FiFacebook size={22} color="#000000" />
            </div>

            <span>zoomimagembr/</span>
          </li>

          <li>
            <div>
              <FiLinkedin size={22} color="#000000" />
            </div>

            <span>zoom-imagem/</span>
          </li>
        </ul>

        
      </div>
      <div className={styles.contentSEO}>
        <ul className={styles.listSEO}>
          <li>Produção de OOH no Brasil</li>
          <li>Materiais para PDV</li>
          <li>Projetos especiais de comunicação visual</li>
          <li>Execução de campanhas publicitárias</li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };

