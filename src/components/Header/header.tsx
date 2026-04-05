"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { solucoes } from "@/lib/solucoes/solucoes";
import Link from "next/link";

export const HeaderTag = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const clickMenuMobile = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDrop = () => {
    setDropOpen(!dropOpen);
  };

  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <li className={styles.dropItem} ref={dropRef} onClick={handleDrop}>
              <span>Soluções</span>
              {dropOpen && (
                <ul className={styles.dropMenu}>
                  {solucoes.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/solucoes/${s.slug}`}
                        onClick={() => setDropOpen(false)}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li onClick={() => handleClick("/portfolio")}>Projetos</li>
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
            <li onClick={() => handleClick("/")}>Home</li>
            <li onClick={() => handleClick("/solucoes")}>Soluções</li>
            <li onClick={() => handleClick("/portfolio")}>Projetos</li>
            <li onClick={() => handleClick("/sobre")}>Sobre</li>
            <li onClick={() => handleClick("/contato")}>Fale com a Zoom</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderTag;
