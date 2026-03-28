import {
  FiArrowDownRight,
  FiSettings,
  FiMap,
  FiCheckCircle, 
  FiClock
  
} from "react-icons/fi";
import { Content } from "../../components/Content/content";
import styles from "./about.module.scss";
import Image from "next/image";
import { Button } from "../../components/Button/button";

const About = () => {
  return (
    <Content colorBottomPosition="right" colorTopPosition="right">
      <div className={styles.contentPurpose}>
        <span>Aqui, sua marca ganha presença.</span>

        <h2>
          Atuamos com produção de materiais para OOH, PDV e projetos especiais em todo o Brasil, <strong> garantindo padrão, agilidade e execução com qualidade em escala.</strong>
        </h2>
      </div>

      <ul className={styles.contentSkills}>
        <li>
          <FiSettings size={32} color="#ED0874" />

          <h3>Produção própria </h3>

          <p>
            Controle total na produção de materiais publicitários e projetos especiais.
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

          <p>
            Do planejamento à execução, cada etapa é acompanhada de perto.
          </p>
        </li>
      </ul>

      <div className={styles.contentAbout}>
        <Image
          alt="Sobre nós"
          src="/images/about-zoom.png"
          width={586}
          height={500}
        />

        <div className={styles.aboutDescription}>
          <span>Sobre Nós</span>

          <h2>
            Somos a <strong>Zoom</strong>
          </h2>

          <p>
            Uma empresa de transformação digital especializada em criar soluções
            integradas para Branding e Identidade Visual, Design UX/UI e
            Desenvolvimento de Sites, Apps e Sistemas. Combinamos{" "}
            <strong>criatividade</strong> e <strong>tecnologia</strong> para
            entregar projetos excepcionais que atendem às necessidades
            específicas de cada cliente.
            <br /> <br /> <br />
            Nosso diferencial está na nossa abordagem personalizada e na{" "}
            <strong>entrega ágil e eficaz</strong>, garantindo resultados de
            alta performance que impulsionam o crescimento do seu negócio.
            Utilizamos as mais recentes tecnologias e práticas de design para
            garantir que nossos projetos não apenas atendam, mas superem suas
            expectativas.
          </p>

          <Button className={styles.btn}
            label="Impulsionar meu negócio"
            size="lg"
            variant="primary"
            icon={<FiArrowDownRight size={24} color="#0C1132" />}
          />
        </div>
      </div>

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
          <FiCheckCircle size={40} color="#EE0874" />

          <span>100+</span>

          <p>serviços ofertados</p>
        </li>
        <li>
          <FiCheckCircle size={40} color="#EE0874" />

          <span>100+</span>

          <p>anos de experiência</p>
        </li>
        <li>
          <FiCheckCircle size={40} color="#EE0874" />

          <span>100+</span>

          <p>clientes satisfeitos</p>
        </li>
        <li>
          <FiCheckCircle size={40} color="#EE0874" />

          <span>100+</span>

          <p>negócios transformados</p>
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

          <Button className={styles.btnCopy}
            label="Entrar em contato"
            size="lg"
            variant="tertiary"
            icon={<FiArrowDownRight size={24} color="#EE0874" />}
          />
        </div>
      </div>
    </Content>
  );
};

export { About };
