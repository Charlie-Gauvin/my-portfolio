import EmailButton from "../Contact/EmailButton";
import Form from "../Contact/Form";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import anime from "animejs";

function Contact() {
  const { t } = useTranslation();

  // Animation d'apparition du titre + sous titre
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("block-title-contact");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-title-contact",
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
      const aboutSection = document.getElementById("block-content-contact");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Permet de déclencher l'animation lorsque la section est visible, c'est à dire que le haut de la section est inférieur ou égal à la hauteur de la fenêtre et que le bas de la section est supérieur ou égal à 0
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          anime({
            targets: "#block-content-contact",
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
      id="contact"
      className="my-40 flex flex-col items-center  pt-28 text-center"
    >
      {/* BLOCK TITRE/ SOUS TITRE */}
      <header id="block-title-contact" className="pb-16">
        <h2 className="mb-4 font-syne text-3xl font-normal text-primary sm:text-5xl md:text-6xl">
          {t("contact.title")}
        </h2>
        <h3 className="font-rubik text-xl font-normal text-orange sm:text-2xl md:text-3xl">
          {t("contact.subtitle")}
        </h3>
      </header>

      {/* FORMULAIRE DE CONTACT */}
      {/* 1ère partie du formulaire */}
      <div
        id="block-content-contact"
        className="mx-5 mt-20 grid max-w-5xl items-start gap-16 p-4 sm:grid-cols-2 lg:mx-10"
      >
        <div className="text-left">
          <h4 className="text-center font-syne text-2xl font-bold text-primary md:text-left md:text-3xl">
            {t("contact.titleParagraph")}
          </h4>
          <div className="mx-auto mt-2 h-1 w-32 bg-orange sm:mx-0 sm:w-40"></div>{" "}
          <p className="mt-4 font-rubik text-sm text-primary md:text-base">
            {t("contact.paragraph")}
          </p>
          <div className="mt-10">
            <h5 className="mb-4 font-syne text-sm font-bold text-primary md:text-base">
              {t("contact.email")}
            </h5>

            <EmailButton />
          </div>
          <div className="mt-10">
            <h5 className="font-syne text-sm font-bold text-primary md:text-base">
              {t("contact.socials")}
            </h5>
            <ul className="mt-4 flex gap-5 pl-8">
              <li>
                <a
                  href="https://www.linkedin.com/in/charlie-gauvin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="32px"
                    height="32px"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path
                      fill="#FFFFFF"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Charlie-Gauvin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    width="32px"
                    height="32px"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path
                      fill="#FFFFFF"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* 2ème partie du formulaire */}
        <div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
