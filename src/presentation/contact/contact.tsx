"use client";
import styles from "./contact.module.scss";
import { FiArrowDown, FiSend } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import { ButtonTag, ContentTag } from "@/components";

const ContactComponent = () => {
  const subjectOptions = [
    "OOH - Out oh home",
    "PDV - Ponto de venda",
    "Projetos especiais",
    // "Linha Eco",
    "Parcerias",
    "Suporte",
    "Outros",
  ];

  type DataType = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };

  const initialData: DataType = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [data, setData] = useState<DataType>(initialData);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (field: keyof DataType, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.phone && !PHONE_REGEX.test(data.phone)) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.error("Erro ao enviar");
        setStatus("error");
        return;
      }

      setStatus("success");
      setData(initialData); // só limpa o formulário quando o envio DEU CERTO
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setStatus("error");
    }
  };

  const handleScroll = () => {
    const next = document.getElementById("role");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  const PHONE_REGEX = /^\(\d{2}\) \d{4,5}-\d{4}$/;

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) return digits.length ? `(${digits}` : "";
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  return (
    <>
      <section className={styles.wrapper}>
        <section className={styles.hallWrapper}>
          <div className={styles.contentHeader}>
            <h2>
              <strong> Coloque suas ideias em prática: </strong>
              Agende um atendimento
            </h2>
            <div className={styles.contentButtonOvalMobile}>
              <a onClick={() => handleScroll()} className={styles.buttonDown}>
                <FiArrowDown size={36} color="#1E1E1E" />
              </a>
            </div>
          </div>
        </section>

        <ContentTag colorTopPosition="right">
          <form
            onSubmit={handleSubmit}
            className={styles.contentContact}
            id="role"
          >
            <strong> Fale conosco </strong>
            <p>
              Preencha o formulário abaixo ou use os nossos canais de contato
              para falar diretamente com um de nossos especialistas.
            </p>

            <div className={styles.contentCentral}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  alt="Fale conosco"
                  src="/images/contato.webp"
                  width={1920}
                  height={1080}
                />
              </div>

              <div className={styles.contentForm}>
                <div className={styles.form}>
                  <div className={styles.fieldFull}>
                    <label>Nome completo</label>
                    <input
                      type="text"
                      placeholder="Informe o nome completo"
                      value={data.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label>E-mail</label>
                      <input
                        type="email"
                        placeholder="Informe o e-mail"
                        value={data.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label>Celular</label>
                      <input
                        type="tel"
                        name="celular"
                        placeholder="(11) 91234-5678"
                        value={data.phone}
                        onChange={(e) =>
                          handleChange("phone", formatPhone(e.target.value))
                        }
                        inputMode="numeric"
                        maxLength={15}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldFull}>
                    <label>Assunto</label>
                    <div className={styles.selectWrapper}>
                      <select
                        name="assunto"
                        value={data.subject}
                        onChange={(e) =>
                          handleChange("subject", e.target.value)
                        }
                      >
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
                      required
                    />
                  </div>

                  {status === "success" && (
                    <p className={styles.successMessage}>
                      Mensagem enviada com sucesso!
                    </p>
                  )}
                  {status === "error" && (
                    <p className={styles.errorMessage}>
                      Não foi possível enviar. Tente novamente.
                    </p>
                  )}

                  <div className={styles.submitRow}>
                    <ButtonTag
                      label={
                        status === "sending" ? "Enviando..." : "Enviar mensagem"
                      }
                      size="lg"
                      variant="primary"
                      icon={<FiSend size={24} color="#191919" />}
                      type="submit"
                      disabled={status === "sending"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ContentTag>
      </section>
    </>
  );
};

export default ContactComponent;
