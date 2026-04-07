"use client";

import { solucoes } from "@/lib/solucoes/solucoes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import styles from "./solutionsmobile.module.scss";

type Props = {
  onClose: () => void;
};

export const DropSolutionsMobile = ({ onClose }: Props) => {
  const [menuDropOpen, setMenuDropOpen] = useState(true);

  const clickMenuMobile = () => {
    setMenuDropOpen(prev => !prev);
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
                  <li onClick={onClose} key={s.slug}>
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
