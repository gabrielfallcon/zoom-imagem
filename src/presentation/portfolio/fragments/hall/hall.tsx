"use client";

import { ButtonTag } from "@/components";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import styles from "./hall.module.scss";


export default function PortfolofioHall() {
  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
  <>
  <section className={styles.contentHall}>
    <div className={styles.contentLeft}>
      <h2></h2>
      <p></p>
      <div className={styles.ctaHall}>
        <ButtonTag 
          label="Fale com a Zoom"
          size="lg"
          variant="glass"
          icon={<FiArrowRight size={24} color="#EE0874" />}
          onClick={() => handleClick("/portfolio")}
        />
        <p></p>
      </div>
    </div>
    <div className={styles.contentRight}>
      <div className={styles.imageHall}>
        <div className={styles.ctaBadge}>
          <div className={styles.ctaBadgeIcon}>
            <FiCheck/>
          </div>
          <div>
            <p className={styles.ctaBadgeTitle}>+500 projetos</p>
            <p className={styles.ctaBadgeSub}>entregues com sucesso</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  </>
  );
}
