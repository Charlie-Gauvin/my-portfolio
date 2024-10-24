import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
  
    // Définis un seuil (threshold) basé sur la hauteur de la fenêtre
    let threshold;
  if (window.innerWidth >= 1440) {
      threshold = 4000;
    } else if (window.innerWidth >= 1024) {
      threshold = 4850;
      // console.log(scrollY);
      
    } else if (window.innerWidth >= 768) {
      threshold = 5100;
    } else if (window.innerWidth >= 425) {
      threshold = 6150;
    } else if (window.innerWidth >= 375) {
      threshold = 6200;
    } else {
      threshold = 6300;
    }
  
    // Affiche ou cache la flèche
    setIsVisible(scrollTop > threshold);
  };

  const scrollToTop = () => {
    // Faire défiler vers le haut de manière fluide
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-36 right-7 p-2 text-primary hover:text-orange ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ display: isVisible ? "block" : "none" }}
      aria-label="scroll-to-top"
    >
      {/* ↑ Flèche vers le haut */}
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 18L12 13L7 18M17 11L12 6L7 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
