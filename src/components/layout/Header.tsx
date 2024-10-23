import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Header() {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //* Fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //* Gestion de l'état du menu burger - Fermeture du menu si la largeur de l'écran est supérieure ou égale à 768px
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className="sticky top-0 z-10 flex w-full items-center justify-around border-b-2 border-secondary/50 bg-background p-4 pt-5"
      role="banner"
    >
      <span
        className="font-syne text-xl font-medium text-primary lg:text-2xl"
        aria-label="Logo du site"
      >
        {/* {t("job")} */}
        Charlie
        {/* &lt; /&gt; */}
      </span>

      {/* Bouton Buger Menu */}
      <button
        className="z-50 flex flex-col items-center md:hidden"
        onClick={handleMenu}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isMenuOpen ? (
          <button
            className="fixed right-4 top-4 text-4xl text-primary"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            ✕
          </button>
        ) : (
          <span className="absolute right-4 top-7">
            <span className="mb-1 block h-0.5 w-6 rounded-md bg-primary"></span>
            <span className="mb-1 block h-0.5 w-6 rounded-md bg-primary"></span>
            <span className="block h-0.5 w-6 rounded-md bg-primary"></span>
          </span>
        )}
      </button>

      {/* Navigation classique pour écrans normal md et plus */}
      <nav className="hidden md:block" aria-label="Navigation principale">
        <ul className="flex font-rubik font-semibold text-secondary opacity-50 sm:gap-8 sm:text-xs lg:gap-14 lg:text-sm 3xl:text-lg">
          <li>
            <a
              href="#hero"
              className="transition-colors duration-300 hover:text-primary"
            >
              {/* HOME */}
              {t("header.home")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-primary"
            >
              {/* ABOUT ME */}
              {t("header.aboutMe")}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="transition-colors duration-300 hover:text-primary"
            >
              {/* SKILLS */}
              {t("header.skills")}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-primary"
            >
              {/* PROJECTS */}
              {t("header.projects")}
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu burger */}
      <div
        className={`fixed left-0 top-0 z-40 w-full bg-background p-4 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-16 flex flex-col items-center">
          <a
            href="#hero"
            className="mb-4 text-xl font-semibold text-secondary transition-colors duration-300 hover:text-primary"
            onClick={closeMenu}
          >
            {t("header.home")}
          </a>
          <a
            href="#about"
            className="mb-4 text-xl font-semibold text-secondary transition-colors duration-300 hover:text-primary"
            onClick={closeMenu}
          >
            {t("header.aboutMe")}
          </a>
          <a
            href="#skills"
            className="mb-4 text-xl font-semibold text-secondary transition-colors duration-300 hover:text-primary"
            onClick={closeMenu}
          >
            {t("header.skills")}
          </a>
          <a
            href="#projects"
            className="mb-4 text-xl font-semibold text-secondary transition-colors duration-300 hover:text-primary"
            onClick={closeMenu}
          >
            {t("header.projects")}
          </a>
          <a
            href="#contact"
            className="mb-4 text-xl font-semibold text-secondary transition-colors duration-300 hover:text-primary"
            onClick={closeMenu}
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Couche opaque */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={closeMenu}
        />
      )}

      <a
        href="#contact"
        className="hidden rounded-full border-2 border-secondary bg-btn px-4 py-2 font-rubik text-sm font-bold text-primary transition-colors duration-300 hover:border-orange hover:bg-orange md:mr-2 md:block md:text-xs lg:mr-1 lg:px-9 lg:py-4 lg:text-sm "
        aria-label="Contactez-moi"
      >
        CONTACT
      </a>
      <select
        className="absolute right-14 ml-4 cursor-pointer rounded-md border-none bg-background p-2 text-xs font-bold text-primary transition-colors duration-300 sm:right-14 sm:p-2 md:right-1 lg:right-3 xl:right-9"
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        aria-label="Changer de langue"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </header>
  );
}

export default Header;
