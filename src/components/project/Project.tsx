import Card from "./Card";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import anime from "animejs";
import portfolio from "../../assets/images/project-cards/portfolio.png"
import converter from "../../assets/images/project-cards/converter.png"
import API from "../../assets/images/project-cards/API-olast.png"
import artportfolio from "../../assets/images/project-cards/art-portfolio.png"


function Project() {
  const { t } = useTranslation();

  const projects = [
    {
      src: portfolio,
      alt: "Portfolio",
      title: "Portfolio",
      description: t("projects.card.card1.description"),
      tags: ["React", "TailwindCSS"],
      codeUrl: "https://github.com/Charlie-Gauvin/my-portfolio", // Lien vers le code source
      siteUrl: "https://www.charliegauvin.com/", // Lien vers le site en ligne
    },
    {
      src: converter,
      alt: "Converter",
      title: "Converter",
      description: t("projects.card.card2.description"),
      tags: ["React", "Sass", "Docker"],
      codeUrl: "https://github.com/Charlie-Gauvin/React-converter",
      siteUrl: "https://react-converter-upqi.onrender.com/",
    },
    {
      src: API,
      alt: "Backend API",
      title: "Backend API",
      description: t("projects.card.card3.description"),
      tags: ["JavaScript", "PostgreSQL", "Express","Docker"],
      codeUrl: "https://github.com/Charlie-Gauvin/O-last-back",
    },
    {
      src: artportfolio,
      alt: "Online Art Galery",
      title: t("projects.card.card4.title"),
      description: t("projects.card.card4.description"),
      tags: ["Nextjs", "Strapi", "TailwindCSS","PostgreSQL"],
      codeUrl: "https://github.com/Charlie-Gauvin/art-porfolio-frontend",
      siteUrl: "https://www.patrickgauvinart.com/",
    },


  ];

  // Animation d'apparition du titre + sous titre
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-title-projects");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-title-projects",
            // translateY: [100, 0],
            translateX: [100, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1500,
            delay: anime.stagger(500),
          });
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation d'apparition des cards
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-cards-projects");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-cards-projects",
            translateY: [100, 0],
            // translateX: [100, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1500,
            delay: anime.stagger(500),
          });
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="projects"
      className="mt-40 flex flex-col items-center  pt-28 text-center"
    >
      <header id="block-title-projects" className="pb-16">
        <h2 className="mb-4 font-syne text-3xl font-normal text-primary sm:text-5xl md:text-6xl">
          {t("projects.title")}
        </h2>
        <h3 className="font-rubik text-xl font-normal text-orange sm:text-2xl md:text-3xl">
          {t("projects.subtitle")}
        </h3>
      </header>
      <section
        id="block-cards-projects"
        className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            src={project.src}
            alt={project.alt}
            title={project.title}
            description={project.description}
            tags={project.tags}
            codeUrl={project.codeUrl}
            siteUrl={project.siteUrl}
          />
        ))}
      </section>
    </section>
  );
}

export default Project;
