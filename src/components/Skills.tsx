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

function Skills() {
  return (
    <section
      id="skills"
      className="mt-40 flex flex-col items-center  pt-28 text-center"
    >
      {/* BLOCK TITRE/ SOUS TITRE */}
      <div className="pb-16">
        <h3 className="mb-4 font-syne text-3xl font-normal text-primary sm:text-5xl md:text-6xl">
          My Skills
        </h3>
        <p className="font-rubik text-xl font-normal text-orange sm:text-2xl md:text-3xl">
          Skills that shape my code
        </p>
      </div>
      <div>
        {/* BLOCK FRONTEND */}
        <div className="mt-20">
          <h4 className="flex items-center justify-center pb-20 font-syne text-2xl font-semibold text-primary md:text-4xl">
            <div className="mr-4 w-14 border-t-2 border-orange"></div>
            <span>Frontend</span>
            <div className="ml-4 w-14 border-t-2 border-orange"></div>
          </h4>
          {/* A voir pour laisser grid ou pas */}
          <ul className="grid grid-cols-3 gap-20 px-8 md:grid-cols-4 lg:grid-cols-5">
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
        </div>
        {/* BLOCK BACKEND */}
        <div className="mt-4">
          <h4 className="flex items-center justify-center py-20 font-syne text-2xl font-semibold text-primary md:text-4xl">
            <div className="mr-4 w-14 border-t-2 border-orange"></div>
            <span>Backend</span>
            <div className="ml-4 w-14 border-t-2 border-orange"></div>
          </h4>
          <ul className="grid grid-cols-3 gap-20 px-8 md:grid-cols-4 lg:grid-cols-5">
            {[
              { src: node, alt: "logo-node", name: "node" },
              { src: express, alt: "logo-express", name: "express" },
              { src: sequelize, alt: "logo-sequelize", name: "sequelize" },
              { src: psql, alt: "logo-psql", name: "postgresql" },
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
        </div>
        {/* BLOCK OTHERS */}
        <div className="mt-4">
          <h4 className="flex items-center justify-center py-20 font-syne text-2xl font-semibold text-primary md:text-4xl">
            <div className="mr-4 w-14 border-t-2 border-orange"></div>
            <span>Others</span>
            <div className="ml-4 w-14 border-t-2 border-orange"></div>
          </h4>
          <ul className="grid grid-cols-3 gap-20 px-8 md:grid-cols-4 lg:grid-cols-5">
            {[
              { src: github, alt: "logo-github", name: "github" },
              { src: git, alt: "logo-git", name: "git" },
              { src: vite, alt: "logo-vite", name: "vite" },
              { src: figma, alt: "logo-figma", name: "figma" },
            ].map(({ src, alt, name }) => (
              // h-60 w-52

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
        </div>
        {/* BLOCK SOFT SKILLS */}
        <div className="mt-4">
          <h4 className="flex items-center justify-center py-20 font-syne text-2xl font-semibold text-primary md:text-4xl">
            <div className="mr-4 w-14 border-t-2 border-orange"></div>
            <span>Soft Skills</span>
            <div className="ml-4 w-14 border-t-2 border-orange"></div>
          </h4>
          {/* grid grid-cols-3 gap-20 px-8 md:grid-cols-4 lg:grid-cols-5 */}
          <ul className="grid grid-cols-1 gap-4 px-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Esprit d'équipe",
              "Communication",
              "Adaptabilité",
              "Résolution de problèmes",
              "Créativité",
              "Curiosité",
              "Méthode Agile",
            ].map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-orange bg-[#1E1E1E] p-2 font-rubik text-sm font-normal text-primary transition-colors hover:bg-[#2A2A2A] md:text-base md:font-semibold"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
