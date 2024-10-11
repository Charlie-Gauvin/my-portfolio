// import vector from "../assets/images/Vector 8.svg";
// import vectorpng from "./../assets/images/vector-8.png";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="-mt-28 flex h-screen flex-col justify-center text-center ">
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
        {/* SVG de l'ellipse */}
      {/* <figure className="absolute left-3/4 top-16 -translate-x-1/2">
        <img src={vector} alt="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg" />
      </figure> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#FFFFFF"
        className="absolute bottom-8 left-1/2 size-6 -translate-x-1/2 animate-bounce cursor-pointer sm:size-8 md:size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
        />
      </svg>
    </section>
  );
}

export default Hero;
