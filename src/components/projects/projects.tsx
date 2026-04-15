"use client";

import { ButtonTag } from "@/components";
import { Expand, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import styles from "./projects.module.scss";

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
  {
    id: 7,
    title: "Stopper de Prateleira",
    aplication: "Materiais de apoio",
    image: "/images/senna.jpg",
    tag: "Projetos especiais",
  },
  {
    id: 8,
    title: "Stopper de Prateleira",
    aplication: "Materiais de apoio",
    image: "/images/senna.jpg",
    tag: "Projetos especiais",
  },
  {
    id: 9,
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
        <div className={styles.projectsContainer}>
          <div className={styles.projectsHeader}>

            <h2 className={styles.projectsTitle}>
              Confira alguns dos nossos trabalhos
            </h2>
            <p className={styles.projectsSubtitle}>
              Conheça alguns dos projetos desenvolvidos pela nossa equipe para
              diferentes marcas e campanhas.
            </p>
          </div>

          <div className={styles.projectsFilters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.projectsFilterBtn} ${activeFilter === cat ? styles["projectsFilterBtn--active"] : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            className={`${styles.projectsGrid} ${inView ? styles["projectsGrid--visible"] : ""}`}
          >
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className={styles.projectsCard}
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => setSelectedProject(project)}
                aria-label={`Expandir projeto ${project.title}`}
              >
                <div className={styles.projectsImageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.projectsImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.projectsOverlay}>
                    <span className={styles.projectsOverlayTag}>
                      {project.tag}
                    </span>
                    <div className={styles.projectsOverlayContent}>
                      <h3 className={styles.projectsCardTitle}>
                        {project.title}
                      </h3>
                      <p className={styles.projectsCardCategoty}>
                        {project.aplication}
                      </p>
                    </div>
                    <button className={styles.projectsOverlayIcon}>
                      <Expand size={16} />
                    </button>
                  </div>
                </div>

                <div className={styles.projectsCardFooter}>
                  <div>
                    <h3 className={styles.projectsCardFooterTitle}>
                      {project.title}
                    </h3>
                    <p className={styles.projectsCardFooterCat}>
                      {project.aplication}
                    </p>
                  </div>
                  <span className={styles.projectsCardTag}>
                    {project.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.projectsEmpty}>
              <p>Nenhum projeto encontrado para este filtro.</p>
            </div>
          )}

          <div className={styles.projectsCta}>
            <p className={styles.projectsCtaText}>
              Quer ver mais projetos ou discutir o seu?
            </p>
            <ButtonTag
              label="Falar com a Zoom"
              size="sm"
              variant="glass"
              icon={<FiArrowRight size={24} color="#EE0874" />}
              onClick={() => handleClick("/portfolio")}
            />
            <ButtonTag
          label="Ver mais projetos"
          size="lg"
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
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar modal"
            >
              <X size={20} />
            </button>

            <div className={styles.modalImageWrap}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className={styles.modalImage}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <span className={styles.modalTag}>{selectedProject.tag}</span>
            </div>

            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <p className={styles.modalCategory}>
                {selectedProject.aplication}
              </p>
              <p className={styles.modalDescription}>
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
