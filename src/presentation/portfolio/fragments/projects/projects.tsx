"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./projects.module.scss";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { ButtonTag } from "@/components";
import { Expand, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  aplication: string;
  image: string;
  tag: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Linha ECO",
    aplication: "Eventos e ativações",
    image: "/images/senna.jpg",
    tag: "Linha ECO",
  },
  {
    id: 2,
    title: "Out of home",
    aplication: "Mobiliario urbano",
    image: "/images/senna.jpg",
    tag: "OOH",
  },
  {
    id: 3,
    title: "Pontos de venda - PDV",
    aplication: "Pontos de venda",
    image: "/images/senna.jpg",
    tag: "PDV",
  },
  {
    id: 4,
    title: "Pontos de venda",
    aplication: "Materiais de apoio",
    image: "/images/senna.jpg",
    tag: "PDV",
  },
  {
    id: 5,
    title: "Projeto Personalizado",
    aplication: "Campanhas especiais",
    image: "/images/senna.jpg",
    tag: "OOH",
  },
  {
    id: 6,
    title: "Stopper de Prateleira",
    aplication: "Materiais de apoio",
    image: "/images/senna.jpg",
    tag: "Projetos especiais",
  },
];

const categories = ["Todos", "OOH", "PDV", "Projetos especiais", "Linha ECO"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [inView, setInView] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

 
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  const router = useRouter();

  function handleClick(link: string) {
    router.push(link);
  }

  return (
    <>
      <section className={styles.projects} ref={sectionRef}>
        <div className={styles.projects__container}>
          <div className={styles.projects__header}>
            <span className={styles.projects__eyebrow}>Nosso portfólio</span>
            <h2 className={styles.projects__title}>
              Confira alguns dos nossos trabalhos
            </h2>
            <p className={styles.projects__subtitle}>
              Conheça alguns dos projetos desenvolvidos pela nossa equipe para
              diferentes marcas e campanhas.
            </p>
          </div>

          <div className={styles.projects__filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.projects__filterBtn} ${activeFilter === cat ? styles["projects__filterBtn--active"] : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            className={`${styles.projects__grid} ${inView ? styles["projects__grid--visible"] : ""}`}
          >
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className={styles.projects__card}
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => setSelectedProject(project)}
                aria-label={`Expandir projeto ${project.title}`}
              >
                <div className={styles.projects__imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.projects__image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.projects__overlay}>
                    <span className={styles.projects__overlayTag}>
                      {project.tag}
                    </span>
                    <div className={styles.projects__overlayContent}>
                      <h3 className={styles.projects__cardTitle}>
                        {project.title}
                      </h3>
                      <p className={styles.projects__cardCategoty}>
                        {project.aplication}
                      </p>
                    </div>
                    <button className={styles.projects__overlayIcon}>
                      <Expand size={16} />
                    </button>
                  </div>
                </div>

                <div className={styles.projects__cardFooter}>
                  <div>
                    <h3 className={styles.projects__cardFooterTitle}>
                      {project.title}
                    </h3>
                    <p className={styles.projects__cardFooterCat}>
                      {project.aplication}
                    </p>
                  </div>
                  <span className={styles.projects__cardTag}>
                    {project.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.projects__empty}>
              <p>Nenhum projeto encontrado para este filtro.</p>
            </div>
          )}

          <div className={styles.projects__cta}>
            <p className={styles.projects__ctaText}>
              Quer ver mais projetos ou discutir o seu?
            </p>
            <ButtonTag
              label="Falar com a Zoom"
              size="sm"
              variant="glass"
              icon={<FiArrowRight size={24} color="#EE0874" />}
              onClick={() => handleClick("/portfolio")}
            />
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className={styles.modal}
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div
            className={styles.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modal__close}
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar modal"
            >
              <X size={20} />
            </button>

            <div className={styles.modal__imageWrap}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className={styles.modal__image}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <span className={styles.modal__tag}>{selectedProject.tag}</span>
            </div>

            <div className={styles.modal__body}>
              <h3 className={styles.modal__title}>{selectedProject.title}</h3>
              <p className={styles.modal__category}>
                {selectedProject.aplication}
              </p>
              <p className={styles.modal__description}>
                Projeto desenvolvido pela equipe Zoom para aplicação em{" "}
                <strong>{selectedProject.aplication.toLowerCase()}</strong>. Uma
                solução criativa e impactante que une design, tecnologia e
                sustentabilidade para destacar a marca no ponto de contato com o
                consumidor.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
