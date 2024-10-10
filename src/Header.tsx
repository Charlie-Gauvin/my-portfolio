function Header () {
  return (
    <header className="flex w-full items-center justify-around bg-background p-4" role="banner">
      <h1 className="font-syne text-3xl font-medium text-primary" aria-label="Logo du site">Charlie</h1>
      <nav aria-label="navigation principale">
      <ul className="flex gap-14 font-rubik text-sm font-semibold text-secondary opacity-50">
          <li>
            <a href="#" className="transition-colors duration-300 hover:text-primary">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="transition-colors duration-300 hover:text-primary">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#" className="transition-colors duration-300 hover:text-primary">
              PROJECTS
            </a>
          </li>
        </ul>
      </nav>
      <button className="rounded-full border-2 border-secondary bg-btn px-9 py-4 font-rubik text-sm font-bold text-primary transition-colors duration-300 hover:border-orange hover:bg-orange" aria-label="Contactez-moi">CONTACT</button>
    </header>
  )
}

export default Header;