// import vector from "../assets/images/Vector 8.svg";
// import vectorpng from "./../assets/images/vector-8.png";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section id="hero" className="-mt-28 flex h-screen flex-col justify-center text-center ">
      <h1 className="mb-4 font-syne text-3xl font-normal text-primary sm:text-5xl md:text-6xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Charlie Gauvin")
              // .pauseFor(2500)
              .callFunction(() => {
                // Fonction qui peut être utilisée si tu souhaites faire quelque chose après l'animation
              })
              .start();
          }}
          options={{
            autoStart: false, // Désactive le démarrage automatique
            loop: false,
            cursor: "", // Enlève le curseur
          }}
        />
      </h1>
      <h2 className="mb-2 font-rubik text-xl font-semibold text-orange sm:text-2xl md:text-3xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString("Web Developer")
              // .pauseFor(2500)
              .callFunction(() => {
                // Fonction qui peut être utilisée si tu souhaites faire quelque chose après l'animation
              })
              .start();
          }}
          options={{
            autoStart: false, // Désactive le démarrage automatique
            loop: false,
            cursor: "", // Enlève le curseur
          }}
        />
      </h2>
      <p className="mb-2 text-base text-secondary sm:text-lg md:text-xl">
        Based in France
      </p>
      <p className="text-sm font-semibold text-secondary sm:text-base md:text-lg">
        Crafting modern and responsive websites
      </p>
      <div>
            <ul className="mt-4 flex justify-center gap-5">
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <a href="https://www.linkedin.com/in/charlie-gauvin" target="_blank" rel="noopener noreferrer">

                  <svg
                    fill="#FFFFFF"
                    width="32px"
                    height="32px"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path
                      
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>

                </a>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <a href="https://github.com/Charlie-Gauvin" target="_blank" rel="noopener noreferrer">
                  <svg
                  fill="#FFFFFF"
                    width="32px"
                    height="32px"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path
                     
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        {/* SVG de l'ellipse */}
      {/* <figure className="absolute left-3/4 top-16 -translate-x-1/2">
        <img src={vector} alt="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg" />
      </figure> */}
      <a href="#about">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#FFFFFF"
        className="absolute bottom-8 left-1/2 -ml-3 size-6 -translate-x-1/2 animate-bounce sm:-ml-5 sm:size-8 md:size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
        />
      </svg>
      </a>
    </section>
  );
}

export default Hero;
