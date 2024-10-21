import { useTranslation } from 'react-i18next';

function Footer() {

const { t } = useTranslation();

  return (
    <footer className="bg-footer py-10 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 md:flex-row md:justify-between lg:px-8">
        {/* Pseudo ou Logo à gauche */}
        <span className="pb-2 font-syne text-xl font-medium text-primary md:text-3xl" aria-label="Logo du site">
          Charlie Gauvin
        </span>
        {/* "All rights reserved" à droite */}
        <span className="font-rubik text-xs text-secondary md:text-sm">
        © 2024 Charlie Gauvin. {t("footer.rights")}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
