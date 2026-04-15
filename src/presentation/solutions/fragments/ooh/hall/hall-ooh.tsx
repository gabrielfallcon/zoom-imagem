"use client";

import styles from "./hall-ooh.module.scss";
import { ButtonTag } from "@/components";
import { FiArrowDownRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Folder } from "lucide-react";

export const OohHall = () => {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Produção e execução de OOH em{" "}
            <span className={styles.heroHighlight}>todo o Brasil</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Planejamos, produzimos e instalamos campanhas de mídia exterior com
            qualidade, escala e controle em cada etapa.
          </p>
          <div className={styles.heroCtas}>
            <ButtonTag
              label="Falar com a Zoom"
              size="lg"
              variant="tertiary"
              icon={<FiArrowDownRight size={24} color="#EE0874" />}
              onClick={() => handleClick("/contato")}
            />
            <ButtonTag
              label="Ver projetos"
              size="lg"
              variant="tertiary"
              icon={<Folder size={20} color="#EE0874" />}
              onClick={() => handleClick("/portfolio")}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OohHall;
