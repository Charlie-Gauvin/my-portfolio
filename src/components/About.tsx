import profil from "../assets/images/profil.png";
import guillemets from "../assets/images/“.svg";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center pt-28 text-center"
    >
      {/* Titre et sous titre de la page */}
      <div className="pb-16">
        <h3 className="mb-4 font-syne text-3xl font-normal text-primary sm:text-5xl md:text-6xl">
          About Me
        </h3>
        <p className="mb-2 font-rubik text-xl font-normal text-orange sm:text-2xl md:text-3xl">
          Get to know me
        </p>
      </div>

      {/* Texte de présentation */}
      <div className="mx-auto flex flex-col-reverse items-center justify-center gap-16 sm:flex-col md:flex-row lg:pt-32">
        <div className="w-full px-6 md:w-1/2">
          {/* <p className="pb-8 text-justify font-rubik text-base font-normal tracking-wide text-secondary sm:text-sm md:text-base lg:text-base xl:text-lg">
            I am a passionate web developer undergoing a career transition from
            a previous background as a nurse. I completed an intensive 6-month
            training program at O'clock school, where I specialized in fullstack
            development with a particular focus on React. <br />
            Upon completion, I earned the title of Web Developer and Mobile Web
            Developer. I am immediately available for new challenges and highly
            value teamwork. My communication skills and adaptability make me a
            valuable asset to any project.
   
          </p> */}
          <p className="pb-8 text-justify font-rubik text-base font-normal tracking-wide text-secondary sm:text-sm md:text-base lg:text-base xl:text-lg">
            Après avoir exercé comme infirmier, j'ai décidé de me reconvertir
            dans le développement web, un domaine qui m'intéresse depuis
            longtemps. J'ai complété une formation de 6 mois en développement
            JavaScript, spécialisée en ReactJS, ce qui m'a permis d'obtenir le
            titre professionnel de développeur web et web mobile. <br />
            Mon parcours m’a permis de développer ma capacité d’adaptation, ma
            rigueur et mon aptitude à travailler en équipe. Je suis
            immédiatement disponible pour de nouvelles opportunités et reste à
            votre disposition pour tout échange ou collaboration.
          </p>
          {/* px-9 py-4 */}
          <a href="#" className="inline-block rounded-full bg-orange px-5 py-4 font-rubik text-sm font-semibold text-primary md:px-9 md:py-4 md:text-base">
            Download Resume
          </a>
        </div>

        {/* Photo de profil */}
        <div className="w-40 sm:w-48 md:w-64 lg:w-72 xl:w-80">
          <img src={profil} alt="Profile" />
        </div>
      </div>

      {/* Guillemets */}
      <figure className="absolute hidden md:bottom-24 md:left-32 lg:-bottom-96 lg:left-14 lg:block xl:-bottom-96 xl:left-36">
        <img src={guillemets} alt="“" />
      </figure>
    </section>
  );
}

export default About;
