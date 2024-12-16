import html from "../assets/images/logo/html5.svg";
import css from "../assets/images/logo/css3.svg";
import sass from "../assets/images/logo/sass.svg";
import tailwind from "../assets/images/logo/tailwindcss.svg";
import bulma from "../assets/images/logo/bulma.svg";
import javascript from "../assets/images/logo/javascript.svg";
import typescript from "../assets/images/logo/typescript.svg";
import react from "../assets/images/logo/react.svg";
import router from "../assets/images/logo/reactrouter.svg";
import node from "../assets/images/logo/nodedotjs.svg";
import express from "../assets/images/logo/express.svg";
import sequelize from "../assets/images/logo/sequelize.svg";
import vite from "../assets/images/logo/vite.svg";
import github from "../assets/images/logo/github.svg";
import git from "../assets/images/logo/git.svg";
import figma from "../assets/images/logo/figma.svg";
import psql from "../assets/images/logo/postgresql.svg";
import docker from "../assets/images/logo/docker.svg";
import strapi from "../assets/images/logo/strapi.svg";
import nextjs from "../assets/images/logo/nextdotjs.svg";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import anime from "animejs";

function Skills() {

  const { t } = useTranslation();
  
  // Animation d'apparition des éléments de la section "Skills"
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-title-skills");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-title-skills",
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

  // Animation d'apparition des éléments des différentes titre de compétences
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-subtitle-skills");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-subtitle-skills",
            // translateY: [100, 0],
            translateX: [-100, 0],
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

  // Animation d'apparition des éléments des différentes compétences
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-ul-skills");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-ul-skills",
            translateY: [100, 0],
            // translateX: [-100, 0],
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
      id="skills"
      className="mt-40 flex flex-col items-center  pt-28 text-center"
    >
      {/* BLOCK TITRE/ SOUS TITRE */}
      <header id="block-title-skills" className="pb-16">
        <h2 className="mb-4 font-syne text-3xl font-normal text-primary sm:text-5xl md:text-6xl">
          {t("mySkills.title")}
        </h2>
        <h3 className="font-rubik text-xl font-normal text-orange sm:text-2xl md:text-3xl">
          {t("mySkills.subtitle")}
        </h3>
      </header>
      <div>
        {/* BLOCK FRONTEND */}
        <section className="mt-20">
          <h4 id="block-subtitle-skills" className="flex items-center justify-center pb-20 font-syne text-2xl font-semibold text-primary md:text-4xl">
            <div className="mr-4 w-14 border-t-2 border-orange"></div>
            <span>Frontend</span>
            <div className="ml-4 w-14 border-t-2 border-orange"></div>
          </h4>
          <ul id="block-ul-skills" className="grid grid-cols-3 gap-20 px-8 md:grid-cols-4 lg:grid-cols-5">
            {[
              { src: html, alt: "logo-html", name: "HTML" },
              { src: css, alt: "logo-css", name: "CSS" },
              { src: sass, alt: "logo-sass", name: "SASS" },
              { src: tailwind, alt: "logo-tailwind", name: "Tailwind" },
              { src: bulma, alt: "logo-bulma", name: "Bulma" },
              { src: javascript, alt: "logo-javascript", name: "JavaScript" },
              { src: typescript, alt: "logo-typescript", name: "TypeScript" },
              { src: react, alt: "logo-react", name: "React" },
              { src: router, alt: "logo-reactrouter", name: "React Router" },
            ].map(({ src, alt, name }) => (
              // h-60 w-52

              <li
                key={alt}
                className="flex h-14 w-11 flex-col items-center md:h-20 md:w-16 lg:h-24 lg:w-20"
              >
                <img src={src} alt={alt} className="max-h-full max-w-full" />
                <span className="mt-2 font-rubik text-xs font-semibold text-primary  md:text-sm">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </section>
        {/* BLOCK BACKEND */}
        <section className="mt-4">
          <h4 id="block-subtitle-skills" className="flex items-center justify-center py-20 font-syne text-2xl font-semibold text-primary md:text-4xl">
            <div className="mr-4 w-14 border-t-2 border-orange"></div>
            <span>Backend</span>
            <div className="ml-4 w-14 border-t-2 border-orange"></div>
          </h4>
          <ul id="block-ul-skills" className="grid grid-cols-3 gap-20 px-8 md:grid-cols-4 lg:grid-cols-5">
            {[
              { src: node, alt: "logo-node", name: "Node" },
              { src: express, alt: "logo-express", name: "Express" },
              { src: sequelize, alt: "logo-sequelize", name: "sequelize" },
              { src: nextjs, alt: "logo-nextjs", name: "Next.js" },
              { src: psql, alt: "logo-psql", name: "Postgresql" },
            ].map(({ src, alt, name }) => (


              <li
                key={alt}
                className="flex h-14 w-11 flex-col items-center md:h-20 md:w-16 lg:h-24 lg:w-20"
              >
                <img src={src} alt={alt} className="max-h-full max-w-full" />
                <span className="mt-2 font-rubik text-xs font-semibold text-primary  md:text-sm">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </section>
        {/* BLOCK OTHERS */}
        <section className="mt-4">
          <h4 id="block-subtitle-skills" className="flex items-center justify-center py-20 font-syne text-2xl font-semibold text-primary md:text-4xl">
            <div className="mr-4 w-14 border-t-2 border-orange"></div>
            <span>Others</span>
            <div className="ml-4 w-14 border-t-2 border-orange"></div>
          </h4>
          <ul id="block-ul-skills" className="grid grid-cols-3 gap-20 px-8 md:grid-cols-4 lg:grid-cols-5">
            {[
              { src: github, alt: "logo-github", name: "Github" },
              { src: git, alt: "logo-git", name: "Git" },
              { src: docker, alt: "logo-docker", name: "Docker" },
              { src: vite, alt: "logo-vite", name: "Vite" },
              { src: figma, alt: "logo-figma", name: "Figma" },
              { src: strapi, alt: "logo-strapi", name: "Strapi" },
            ].map(({ src, alt, name }) => (


              <li
                key={alt}
                className="flex h-14 w-11 flex-col items-center md:h-20 md:w-16 lg:h-24 lg:w-20"
              >
                <img src={src} alt={alt} className="max-h-full max-w-full" />
                <span className="mt-2 font-rubik text-xs font-semibold text-primary md:text-sm">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </section>
        {/* BLOCK SOFT SKILLS */}
        <section className="mt-4">
          <h4 id="block-subtitle-skills" className="flex items-center justify-center py-20 font-syne text-2xl font-semibold text-primary md:text-4xl">
            <div className="mr-4 w-14 border-t-2 border-orange"></div>
            <span>Soft Skills</span>
            <div className="ml-4 w-14 border-t-2 border-orange"></div>
          </h4>

          <ul id="block-ul-skills"  className="grid grid-cols-1 gap-4 px-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              t("mySkills.softSkills.skill1"),
              t("mySkills.softSkills.skill2"),
              t("mySkills.softSkills.skill3"),
              t("mySkills.softSkills.skill4"),
              t("mySkills.softSkills.skill5"),
              t("mySkills.softSkills.skill6"),
              t("mySkills.softSkills.skill7")
            ].map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-orange bg-[#1E1E1E] p-2 font-rubik text-sm font-normal text-primary transition-colors hover:bg-[#2A2A2A] md:text-base md:font-semibold"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Skills;
