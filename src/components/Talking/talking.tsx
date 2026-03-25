import styles from "./talking.module.scss";
import { FiInstagram, FiSmartphone, FiMail, FiSend } from "react-icons/fi";
import Image from "next/image";
import { Content } from "../Content/content";
import { Button } from "../Button/button";

const Talking = () => {
  const subjectOptions = [
    "Consultoria",
    "Desenvolvimento de App",
    "Design de Produto",
    "Parcerias",
    "Suporte Técnico",
    "Outros",
  ];

  return (
    <section className={styles.contentTalking}>
      <Content colorTopPosition="right">
        <div className={styles.contentHeader}>
          <p>FALE CONOSCO</p>
          <h2>
            <strong> Coloque suas ideias em prática: </strong>
            Agende um atendimento
          </h2>
        </div>

        <div className={styles.contentCentral}>
          <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                alt="Fale conosco"
                src="/images/talking.jpg"
                width={334}
                height={621}
              />
          </div>

          <div className={styles.contentForm}>
            <p>
              Preencha o formulário abaixo ou use os nossos canais de contato
              para falar diretamente com um de nossos especialistas.
            </p>

            <div className={styles.form}>
              <div className={styles.fieldFull}>
                <label>Nome completo</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Informe o nome completo"
                />
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Informe um e-mail"
                  />
                </div>

                <div className={styles.field}>
                  <label>Celular</label>
                  <input
                    type="tel"
                    name="celular"
                    placeholder="Informe um telefone"
                  />
                </div>
              </div>

              <div className={styles.fieldFull}>
                <label>Assunto</label>
                <div className={styles.selectWrapper}>
                  <select name="assunto">
                    <option value="" disabled>
                      Selecione um assunto
                    </option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  <span className={styles.selectArrow}>▾</span>
                </div>
              </div>

              <div className={styles.fieldFull}>
                <label className={styles.label}>Mensagem</label>
                <textarea
                  name="mensagem"
                  placeholder="Digite sua mensagem"
                  rows={4}
                />
              </div>

              <div className={styles.submitRow}>
                <Button
                  className={styles.btnSend}
                  label="Enviar mensagem "
                  size="lg"
                  variant="primary"
                  icon={<FiSend size={24} color="#0C1132" />}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentFooter}>
          <FiInstagram size={32} color="#ED0874" />
          <span> @zoomimage </span>
          <FiSmartphone size={32} color="#ED0874" />
          <span> (11) 95798-2407 </span>
          <FiMail size={32} color="#ED0874" />
          <span> contato@zoom.com </span>
        </div>
      </Content>
    </section>
  );
};

export { Talking };
