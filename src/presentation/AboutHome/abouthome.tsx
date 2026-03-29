import {
  FiArrowDownRight,
  FiSettings,
  FiMap,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import { Content } from "../../components/Content/content";
import styles from "./abouthome.module.scss";
import { Button } from "../../components/Button/button";
import Carousel from "@/components/Carousel/carousel";
import {
  LuAward,
  LuBriefcaseBusiness,
  LuMapPinCheck,
  LuWrench,
} from "react-icons/lu";

export default function AboutHome() {
  return (
    <Content colorBottomPosition="right" colorTopPosition="right">
      <div className={styles.contentPurpose}>
        <span>Aqui, sua marca ganha presença.</span>

        <h2>
          Atuamos com produção de materiais para OOH, PDV e projetos especiais
          em todo o Brasil,{" "}
          <strong>
            {" "}
            garantindo padrão, agilidade e execução com qualidade em escala.
          </strong>
        </h2>
      </div>
      <ul className={styles.contentSkills}>
        <li>
          <FiSettings size={32} color="#ED0874" />

          <h3>Produção própria </h3>

          <p>
            Controle total na produção de materiais publicitários e projetos
            especiais.
          </p>
        </li>
        <li>
          <FiMap size={32} color="#ED0874" />

          <h3>Cobertura nacional</h3>

          <p>
            Execução de campanhas e instalações em diferentes regiões do Brasil.
          </p>
        </li>
        <li>
          <FiClock size={32} color="#ED0874" />

          <h3>Agilidade na entrega</h3>

          <p>
            Processos otimizados para produção e instalação dentro do prazo.
          </p>
        </li>
        <li>
          <FiCheckCircle size={32} color="#ED0874" />

          <h3>Qualidade de ponta a ponta</h3>

          <p>Do planejamento à execução, cada etapa é acompanhada de perto.</p>
        </li>
      </ul>
      <p className={styles.ourClients}>Nossos clientes</p>
      <Carousel />
      <div className={styles.weResults}>
        <span>Nossos Resultados</span>

        <h2 className={styles.subtitleMob}>
          <strong>Confira alguns números do que </strong>
          somos capazes de fazer
        </h2>

        <h2 className={styles.subtitleDesk}>
          <strong>Confira alguns números do que </strong>
          <br /> somos capazes de fazer
        </h2>
      </div>
      <ul className={styles.contentNumberServices}>
        <li>
          <LuBriefcaseBusiness size={40} color="#EE0874" />

          <span>+2.000</span>

          <p>projetos executados</p>
        </li>
        <li>
          <LuMapPinCheck size={40} color="#EE0874" />

          <span>+120</span>

          <p>cidades atendidas</p>
        </li>
        <li>
          <LuWrench size={40} color="#EE0874" />

          <span>+15.000</span>

          <p>pontos instalados</p>
        </li>
        <li>
          <LuAward size={40} color="#EE0874" />

          <span>+24</span>

          <p>anos de atuação</p>
        </li>
      </ul>
      <div className={styles.contentCopy}>
        <h3>
          <strong>Acelere os resultados</strong> da sua empresa
        </h3>

        <div className={styles.copyDescription}>
          <p>
            Descubra como podemos criar soluções digitais sob medida e
            impulsionar seu negócio.{" "}
            <strong>Entre em contato agora mesmo!</strong>
          </p>

          <Button
            className={styles.btnCopy}
            label="Entrar em contato"
            size="lg"
            variant="tertiary"
            icon={<FiArrowDownRight size={24} color="#EE0874" />}
          />
        </div>
      </div>
    </Content>
  );
}

export { AboutHome };
