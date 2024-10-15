import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //* Fermer le menu
  const closeMenu = () => { 
    setIsMenuOpen(false);
  };

  return (
    <header
      className="flex w-full items-center justify-around bg-background p-4 pt-5"
      role="banner"
    >
      <span
        className="font-syne text-3xl font-medium text-primary"
        aria-label="Logo du site"
      >
        Charlie
      </span>

      {/* Bouton Buger Menu */}
      <button
        className="z-50 flex flex-col items-center md:hidden"
        onClick={handleMenu}
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
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
          <button className="fixed right-4 top-6">
              <span className="mb-1 block h-0.5 w-6 rounded-md bg-primary"></span>
              <span className="mb-1 block h-0.5 w-6 rounded-md bg-primary"></span>
              <span className="block h-0.5 w-6 rounded-md bg-primary"></span>
          </button>
        )}
      </button> 

      
      {/* Navigation classique pour écrans normal md et plus */}
      <nav className="hidden md:block" aria-label="navigation principale">
        <ul className="flex gap-14 font-rubik text-sm font-semibold text-secondary opacity-50">
          <li>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-primary"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-primary"
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="transition-colors duration-300 hover:text-primary"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-primary"
            >
              PROJECTS
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
          <a href="#" className="mb-4 text-2xl font-semibold text-secondary transition-colors duration-300 hover:text-primary" onClick={closeMenu}>HOME</a>
          <a href="#about" className="mb-4 text-2xl font-semibold text-secondary transition-colors duration-300 hover:text-primary" onClick={closeMenu}>ABOUT ME</a>
          <a href="#skills" className="mb-4 text-2xl font-semibold text-secondary transition-colors duration-300 hover:text-primary" onClick={closeMenu}>SKILLS</a>
          <a href="#" className="mb-4 text-2xl font-semibold text-secondary transition-colors duration-300 hover:text-primary" onClick={closeMenu}>PROJECTS</a>
          <a href="#" className="mb-4 text-2xl font-semibold text-secondary transition-colors duration-300 hover:text-primary" onClick={closeMenu}>CONTACT</a>
        </div>
      </div>

      {/* Couche opaque */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black opacity-50" onClick={closeMenu} />
      )}

      {/* Bouton "CONTACT" uniquement visible à partir de md */}
      <button
        className="hidden rounded-full border-2 border-secondary bg-btn px-9 py-4 font-rubik text-sm font-bold text-primary transition-colors duration-300 hover:border-orange hover:bg-orange md:block"
        aria-label="Contactez-moi"
      >
        CONTACT
      </button>
    </header>
  );
}

export default Header;
