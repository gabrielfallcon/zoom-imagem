"use client";

import Image from "next/image";
import styles from "./hall-pdv.module.scss";

export default function PdvHall() {
   return (
    <section className={styles.hero__container}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__title}>
            Sua marca precisa estar presente no ponto de venda.
          </h1>
          <p className={styles.hero__text}>
            Materiais de PDV bem executados destacam produtos, reforçam a
            marca e influenciam diretamente a decisão de compra.
          </p>
          <p className={styles.hero__text}>
            A Zoom atua na produção de displays, totens, wobblers, faixas
            e estruturas promocionais, garantindo qualidade, padronização
            e impacto em escala.
          </p>
        </div>
 
      
        <div className={styles.hero__right}>
          <div className={styles.hero__imgWrap}>
            <Image
              src="/images/senna.jpg"
              alt="Materiais de PDV"
              fill
              className={styles.hero__img}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
    </section>
  );
}