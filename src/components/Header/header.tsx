"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const HeaderTag = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickMenuMobile = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }
  return (
    <>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <Image
            alt="Zoom"
            src="/images/logo-zoom.svg"
            width={100}
            height={100}
          />

          <ul className={styles.listMenu}>
            <li onClick={() => handleClick("/")}>Home</li>
            <li>Soluções</li>
            <li>Projetos</li>
            <li onClick={() => handleClick("/sobre")}>Sobre</li>
            <li onClick={() => handleClick("/contato")}>Fale com a Zoom</li>
          </ul>
        </header>

        <div className={styles.headerMobile}>
          <Image
            alt="Zoom"
            src="/images/logo-zoom.svg"
            width={100}
            height={100}
          />

          <FiMenu size={36} color="#C4C4C4" onClick={clickMenuMobile} />
        </div>
      </div>

      {menuOpen && (
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

          <ul className={styles.listMenuMobile}>
            <li>Home</li>
            <li>Soluções</li>
            <li>Projetos</li>
            <li>Sobre</li>
            <li>Fale com a Zoom</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderTag;
