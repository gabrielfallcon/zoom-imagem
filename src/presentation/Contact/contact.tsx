"use client";
import styles from "./contact.module.scss";
import { FiInstagram, FiSmartphone, FiMail, FiSend } from "react-icons/fi";
import Image from "next/image";
import { Content } from "../../components/Content/content";
import { Button } from "../../components/Button/button";
import { useState } from "react";
import { Footer } from "../Footer/footer";

export default function Contact() {
  const subjectOptions = [
    "OOH - Out oh home",
    "PDV - Ponto de venda",
    "Design de Produto",
    "Parcerias",
    "Suporte Técnico",
    "Outros",
  ];

  type data = {
    name: string;
    email: string;
    message: string;
  };

  const [data, setData] = useState<data>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Erro ao enviar");
      return;
    }
  };

  const handleClear = () => {
    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.contentContact}>
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
                    placeholder="Informe o nome completo"
                    value={data.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label>E-mail</label>
                    <input
                      type="text"
                      placeholder="Informe o nome completo"
                      value={data.email}
                      onChange={(e) => handleChange("email", e.target.value)}
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
                    placeholder="Digite sua mensagem"
                    value={data.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </div>

                <div className={styles.submitRow}>
                  <Button
                    className={styles.btnSend}
                    label="Enviar mensagem "
                    size="lg"
                    variant="primary"
                    icon={<FiSend size={24} color="#0C1132" />}
                    type="submit"
                    onClick={handleClear}
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
      </form>
      <Footer />
    </>
  );
}

export { Contact };
