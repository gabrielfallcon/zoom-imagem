"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./solutionsmobile.module.scss";
import Link from "next/link";
import { solucoes } from "@/lib/solucoes/solucoes";
import { FiX } from "react-icons/fi";

export const DropSolutionsMobile = () => {
  const [menuDropOpen, setMenuDropOpen] = useState(true);

  const clickMenuMobile = () => {
    setMenuDropOpen(!menuDropOpen);
  };
  return (
    <>
      {menuDropOpen && (
        <div className={styles.headerMobileOpen}>
          <div className={styles.headerContent}>
            <Image
              alt="Zoom"
              src="/images/logo-zoom.svg"
              width={100}
              height={100}
            />

            <FiX size={32} color="#C4C4C4" onClick={clickMenuMobile} />
          </div>
          <p className={styles.titleSolutions}>Soluções</p>

          <ul className={styles.listMenuMobile}>
            <li className={styles.dropItem}>
              <ul>
                {solucoes.map((s) => (
                  <li onClick={clickMenuMobile} key={s.slug}>
                    <Link href={`/solucoes/${s.slug}`}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default DropSolutionsMobile;
