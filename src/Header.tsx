import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="flex w-full items-center justify-around bg-background p-4 pt-5"
      role="banner"
    >
      <h1
        className="font-syne text-3xl font-medium text-primary"
        aria-label="Logo du site"
      >
        Charlie
      </h1>

      {/* Bouton Buger Menu */}
      <button
        className="z-50  flex flex-col items-center md:hidden"
        onClick={handleMenu}
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {isMenuOpen ? (
          <span className="block text-4xl text-primary">✕</span>
        ) : (
          <button>
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
              href="#"
              className="transition-colors duration-300 hover:text-primary"
            >
              ABOUT ME
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
    {isMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-background">
          <div className="flex flex-col items-center">
            <a href="#" className="mb-4 text-2xl font-semibold text-secondary transition-colors duration-300 hover:text-primary">HOME</a>
            <a href="#" className="mb-4 text-2xl font-semibold text-secondary transition-colors duration-300 hover:text-primary">ABOUT ME</a>
            <a href="#" className="mb-4 text-2xl font-semibold text-secondary transition-colors duration-300 hover:text-primary">PROJECTS</a>
            <a href="#" className="mb-4 text-2xl font-semibold text-secondary transition-colors duration-300 hover:text-primary">CONTACT</a>
          </div>
        </div>
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
