import { useEffect } from "react";
import anime from "animejs";

function Hero() {
  // Animation line drawing title
  useEffect(() => {
    const svgPath = document.querySelector("#demo-svg path");
    const subtitleSvgPath = document.querySelector("#subtitle-svg path");

    // Exécutez l'animation lorsque le composant est monté
    anime({
      targets: svgPath,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 9000,
      loop: false,
      direction: "normal",
    });

    anime({
      targets: subtitleSvgPath,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 9000,
      loop: false,
      direction: "normal",
    });
  }, []);

  // Animation couleur de fond dans les lettres
  useEffect(() => {
    const svgPath = document.querySelector("#demo-svg path");
    const subtitleSvgPath = document.querySelector("#subtitle-svg path");

    anime({
      // Background couleur dans les lettres
      targets: svgPath,
      fill: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.5)"],
      easing: "easeInOutSine",
      duration: 3000,
      delay: 2500,
    });

    anime({
      targets: subtitleSvgPath,
      fill: ["rgba(255, 145, 67, 0)", "rgba(255, 145, 67, 0.5)"],
      easing: "easeInOutSine",
      duration: 3000,
      delay: 2500,
    });
  }, []);

  // Animation d'apparition description avec animejs
  useEffect(() => {
    anime({
      targets: "#description",
      translateY: [100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 3000,
      delay: 1000,
    });
  }, []);

  return (
    <section
      id="hero"
      className="-mt-28 flex h-screen flex-col justify-center text-center "
    >
      {/* TITRE/ SOUS TITRE - LINE DRAWING */}
      <div className="flex flex-col items-center lg:-mb-20 lg:-mt-16">
        <h1 className="w-4/5 sm:w-3/5 lg:w-2/4 xl:w-1/4">
          <svg id="demo-svg" width="100%" height="100%" viewBox="0 0 300 120" aria-label="Titre principal">
            <path
              stroke="#8C8C8C"
              strokeWidth="0.2"
              fill="none"
              d="m 66.53206,102.35513 2.856146,0.33309 q -0.275592,2.73133 -1.991785,4.50336 -1.703666,1.7587 -4.48465,1.7587 -2.34254,0 -3.808194,-1.25241 -1.453127,-1.25241 -2.242325,-3.3975 -0.789198,-2.14509 -0.789198,-4.72986 0,-4.156946 1.853989,-6.755036 1.853989,-2.61141 5.09847,-2.61141 2.542972,0 4.234111,1.66544 1.691139,1.66544 2.129582,4.76983 l -2.856146,0.31976 q -0.789197,-4.11697 -3.482493,-4.11697 -1.72872,0 -2.693295,1.71873 -0.952048,1.70542 -0.952048,4.956362 0,3.304244 1.02721,4.996334 1.02721,1.67876 2.718349,1.67876 1.352911,0 2.30496,-1.1325 0.952048,-1.1325 1.077317,-2.70468 z m 17.988707,6.31536 h -3.081631 v -7.90086 h -6.526543 v 7.90086 H 71.830962 V 90.483854 h 3.081631 v 7.474508 h 6.526543 v -7.474508 h 3.081631 z m 17.174453,0 h -3.294588 l -1.365439,-4.33015 h -6.57665 l -1.340384,4.33015 h -2.630661 l 5.67471,-18.186636 h 3.795668 z m -5.486805,-6.95489 -2.492864,-8.114036 -2.492864,8.114036 z m 20.869905,6.95489 h -3.25701 l -2.65571,-7.47451 h -4.33433 v 7.47451 h -3.08163 V 90.483854 h 7.41596 q 3.09415,0 4.54728,1.49224 1.45312,1.47891 1.45312,3.83718 0,3.504088 -3.08163,4.823116 z M 106.83127,98.571244 h 3.83325 q 1.66609,0 2.48034,-0.746118 0.81425,-0.746122 0.81425,-2.051822 0,-1.19912 -0.80173,-1.93192 -0.80172,-0.74611 -2.24232,-0.74611 h -4.08379 z m 23.92649,10.099246 H 120.23512 V 90.483854 h 3.24448 v 15.215486 h 7.27816 z m 5.349,0 h -3.08163 V 90.483854 h 3.08163 z m 14.8695,0 H 139.86485 V 90.483854 h 10.99866 v 2.70468 h -7.91703 v 4.92971 h 6.36369 v 2.638056 h -6.36369 v 5.0896 h 8.02978 z m 22.04744,-9.299833 v 9.299833 h -1.36544 l -0.93952,-2.45153 q -1.49071,2.73132 -4.62245,2.73132 -3.49502,0 -5.22374,-2.82459 -1.7162,-2.82458 -1.7162,-6.541857 0,-3.930439 1.91664,-6.648449 1.92914,-2.73132 5.38658,-2.73132 2.58056,0 4.24664,1.59882 1.66608,1.5855 2.10453,3.95709 l -2.68077,0.5063 q -0.75161,-3.33089 -3.59523,-3.33089 -1.81641,0 -2.96889,1.57218 -1.13996,1.57218 -1.13996,4.836445 0,6.888281 4.05873,6.888281 1.5784,0 2.60562,-1.15916 1.03973,-1.15914 1.03973,-3.06441 h -3.5326 v -2.638063 z m 17.03666,9.299833 h -3.29459 l -1.36544,-4.33015 h -6.57665 l -1.34039,4.33015 h -2.63065 l 5.6747,-18.186636 h 3.79567 z m -5.48681,-6.95489 -2.49287,-8.114036 -2.49286,8.114036 z M 203.31388,90.483854 V 102.1686 q 0,2.37159 -0.50108,3.65065 -0.50108,1.27907 -1.94168,2.21172 -1.42807,0.91931 -3.49502,0.91931 -2.092,0 -3.44491,-0.7994 -1.34038,-0.79942 -1.92915,-2.18507 -0.58877,-1.39897 -0.58877,-3.55738 V 90.483854 h 3.14427 V 102.1686 q 0,2.39824 0.93952,3.15769 0.95205,0.74611 2.20475,0.74611 1.44059,0 2.30495,-0.79941 0.86436,-0.81274 0.86436,-3.10439 V 90.483854 Z m 10.09673,18.186636 h -3.13175 l -5.27384,-18.186636 h 3.257 l 3.92094,13.936426 4.00863,-13.936426 h 2.56803 z m 10.37231,0 h -3.08163 V 90.483854 h 3.08163 z m 16.67338,0 h -2.99394 L 230.9734,97.052364 q -0.15033,-0.26647 -0.48856,-0.86603 -0.15032,-0.26647 -0.4635,-0.83939 v 13.323546 h -2.48033 V 90.483854 h 3.40733 l 5.98788,10.712126 q 0.0752,0.13324 1.08985,1.95857 V 90.483854 h 2.43023 z" // Votre chemin SVG
            ></path>
          </svg>
        </h1>
        <h2 className="w-3/4 sm:w-3/5 lg:w-2/4 xl:w-2/5">
          <svg
            width="100%"
            height="100%"
            id="subtitle-svg"
            viewBox="0 0 300 120"
            aria-label="Sous-titre"
          >
            <path
              stroke="#FF914380"
              strokeWidth="0.3"
              fill="none"
              d="M 41.621028,12.156476 35.350522,36.93914 H 30.91822 L 26.245404,18.710719 22.002076,36.93914 H 17.65567 L 11.247729,12.156476 h 4.483841 l 4.535379,18.065017 4.22615,-18.065017 h 4.277687 l 4.672815,18.065017 4.449482,-18.065017 z M 59.779724,36.93914 H 44.541536 V 12.156476 h 15.083573 v 3.685627 H 48.767685 v 6.717637 h 8.72717 v 3.594853 h -8.72717 v 6.935516 h 11.012039 z m 3.642046,0 V 12.156476 h 9.139478 q 2.319227,0 3.848199,0.508358 1.528973,0.508367 2.645639,2.124224 1.116665,1.615867 1.116665,3.794567 0,2.051605 -1.133845,3.576687 -1.133844,1.506938 -3.126662,1.924521 2.473843,0.453893 3.745123,2.124224 1.271281,1.670332 1.271281,3.957971 0,2.868616 -1.786665,4.829436 -1.769485,1.942676 -5.463071,1.942676 z m 4.002816,-14.3794 h 5.15384 q 1.580511,0 2.491023,-0.99856 0.927691,-0.99857 0.927691,-2.541817 0,-1.706642 -1.047947,-2.505498 -1.047947,-0.817011 -2.456664,-0.817011 h -5.067943 z m 0,10.657463 h 5.463071 q 1.735126,0 2.731536,-0.96226 1.013588,-0.962261 1.013588,-2.596283 0,-1.561392 -1.030768,-2.559962 -1.013589,-0.99857 -2.697177,-0.99857 h -5.48025 z M 93.468654,36.93914 V 12.156476 h 8.641286 q 4.79307,0 7.6964,3.594843 2.90333,3.576697 2.90333,8.841871 0,5.265185 -2.98923,8.805562 -2.98923,3.540388 -8.55538,3.540388 z m 4.346413,-3.649317 h 3.521793 q 2.83461,0 4.81025,-2.251319 1.97564,-2.251319 1.97564,-6.699492 0,-3.631163 -1.73513,-6.13666 -1.71795,-2.523653 -4.55256,-2.523653 H 97.815067 Z M 131.86478,36.93914 H 116.62659 V 12.156476 h 15.08357 v 3.685627 h -10.85742 v 6.717637 h 8.72716 v 3.594853 h -8.72716 v 6.935516 h 11.01204 z m 12.66126,0 h -4.29487 l -7.23255,-24.782664 h 4.46666 l 5.37717,18.990957 5.49743,-18.990957 h 3.52179 z m 25.23664,0 H 154.52449 V 12.156476 h 15.08357 v 3.685627 h -10.85742 v 6.717637 h 8.72717 v 3.594853 h -8.72717 v 6.935516 h 11.01204 z m 18.0728,0 H 173.40473 V 12.156476 h 4.44948 v 20.733919 h 9.98127 z m 11.11512,0.381273 q -4.67283,0 -7.2841,-3.703792 -2.59409,-3.703782 -2.59409,-9.150515 0,-5.410434 2.76589,-9.041586 2.76589,-3.649317 7.30127,-3.649317 4.56973,0 7.21538,3.649317 2.66282,3.631152 2.66282,9.096051 0,5.737232 -2.76591,9.277609 -2.74871,3.522233 -7.30126,3.522233 z m 0.0343,-3.594852 q 2.28487,0 3.86538,-1.997141 1.58051,-1.99714 1.58051,-7.244159 0,-4.266614 -1.30565,-6.681337 -1.30564,-2.432879 -4.05435,-2.432879 -5.42871,0 -5.42871,9.2413 0,4.484483 1.37435,6.808432 1.39154,2.305784 3.96847,2.305784 z m 18.19305,3.213579 H 212.9518 V 12.156476 h 9.60333 q 4.10589,0 6.08152,2.196844 1.99283,2.1787 1.99283,5.156255 0,3.395129 -2.14743,5.501198 -2.14744,2.10608 -5.4459,2.10608 h -5.8582 z m 0,-13.653163 h 4.99923 q 1.95846,0 2.98922,-1.016725 1.03078,-1.016725 1.03078,-2.705212 0,-1.525093 -0.96205,-2.614437 -0.94488,-1.089345 -3.4359,-1.089345 h -4.62128 z M 249.2692,36.93914 H 234.03105 V 12.156476 h 15.08357 v 3.685627 H 238.2572 v 6.717637 h 8.72717 v 3.594853 h -8.72717 v 6.935516 h 11.01204 z m 21.921,0 h -4.46666 L 263.08149,26.753735 H 257.1374 V 36.93914 h -4.22615 V 12.156476 h 10.17024 q 4.24333,0 6.23614,2.03344 1.99283,2.015295 1.99283,5.228875 0,4.774971 -4.22615,6.572397 z M 257.1374,23.177037 h 5.25691 q 2.28487,0 3.40153,-1.016725 1.11667,-1.016725 1.11667,-2.795986 0,-1.634022 -1.09949,-2.632592 -1.09948,-1.016725 -3.07513,-1.016725 h -5.60049 z"
            ></path>
          </svg>
        </h2>
      </div>

      {/* Format desktop mb-64 */}
      <div id="description" className="mb-24">
        <p className="mb-2 text-base text-secondary sm:text-lg md:text-xl">
          Based in France
        </p>
        <p className="text-sm font-semibold text-secondary sm:text-base md:text-lg">
          Crafting modern and responsive websites
        </p>

        <div>
          <ul className="mt-4 flex justify-center gap-5">
            <li className="transition-transform duration-300 hover:-translate-y-1">
              <a
                href="https://www.linkedin.com/in/charlie-gauvin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  fill="#FFFFFF"
                  width="32px"
                  height="32px"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </li>
            <li className="transition-transform duration-300 hover:-translate-y-1">
              <a
                href="https://github.com/Charlie-Gauvin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  fill="#FFFFFF"
                  width="32px"
                  height="32px"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About section">
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
