// import profil from "../assets/images/profil.png";
import guillemets from "../assets/images/about/“.svg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import anime from "animejs";
import profil from "../assets/images/about/profil-img.png";
import CV from "../assets/images/about/Charlie-CV.pdf";

function About() {
  const { t } = useTranslation();

  // Animation d'apparition des éléments de la section Titre + Sous titre
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-title-about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-title-about",
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

  // Animation d'apparition des éléments de la section Texte de présentation
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-content-about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-content-about",
            translateY: [100, 0], // Change this to match the first animation direction
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

  // Animation de l'image de profil
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-img-about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-img-about",
            translateX: [100, 0], // Change this to match the first animation direction
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

  // Anmation du SVG guillemets
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-svg-about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-svg-about",
            translateX: [-100, 0], // Change this to match the first animation direction
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
      id="about"
      className="flex flex-col items-center pt-28 text-center"
    >
      {/* Titre et sous titre de la page */}
      <header id="block-title-about" className="pb-16">
        <h2 className="mb-4 font-syne text-3xl font-normal text-primary sm:text-5xl md:text-6xl">
          {/* About Me */}
          {t("aboutMe.title")}
        </h2>
        <h3 className="mb-2 font-rubik text-xl font-normal text-orange sm:text-2xl md:text-3xl">
          {/* Get to know me */}
          {t("aboutMe.subtitle")}
        </h3>
      </header>

      {/* Texte de présentation */}
      <div className="mx-auto flex flex-col-reverse items-center justify-center gap-16 sm:flex-col md:flex-row lg:pt-32">
        <div id="block-content-about" className="w-full px-6 md:w-1/2">
          <p className="pb-8 text-justify font-rubik text-base font-normal tracking-wide text-secondary sm:text-sm md:text-base lg:text-base xl:text-lg">
            {t("aboutMe.Presentation1")} <br />
            {t("aboutMe.Presentation2")}
          </p>

          <a
            href={CV}
            download
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full border border-orange bg-orange px-5 py-4 font-rubik text-sm font-semibold text-primary transition-colors duration-300 hover:border hover:border-secondary hover:bg-btn md:px-9 md:py-4 md:text-base"
            aria-label="Télécharger mon CV"
            title="Télécharger mon CV"
          >
            {t("aboutMe.Resume")}
          </a>
        </div>

        {/* Photo de profil */}
        <div
          id="block-img-about"
          className="w-40 sm:w-48 md:w-64 lg:w-72 xl:w-80"
        >
          <img src={profil} alt="Profile picture" />
        </div>
      </div>

      {/* Guillemets SVG */}
      <figure className="absolute hidden md:bottom-24 md:left-32 lg:-bottom-96 lg:left-14 lg:block xl:-bottom-96 xl:left-36">
        <img id="block-svg-about" src={guillemets} alt="Quotation" />
      </figure>
    </section>
  );
}

export default About;
