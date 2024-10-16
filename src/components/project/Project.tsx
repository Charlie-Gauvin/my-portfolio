import Card from "./Card";

function Project() {

const projects = [
  {
    src: "https://v1.tailwindcss.com/img/card-top.jpg",
    alt: "Sunset in the mountains",
    title: "Mountain",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["react", "tailwind"],
  },
  {
    src: "https://images.photowall.com/products/64251/green-trees-in-forest.jpg?h=699&q=85",
    alt: "Forest and mountains",
    title: "Forest",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["react", "tailwind"],
  },
  {
    src: "https://images.photowall.com/products/62526/in-the-forest-1.jpg?h=699&q=85",
    alt: "Sunset in the mountains",
    title: "Mountain",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["react", "tailwind"],
  },
];



  return (
    <section
      id="projects"
      className="mt-40 flex flex-col items-center pt-16 text-center"
    >
      <div className="pb-16">
        <h3 className="mb-4 font-syne text-3xl font-normal text-primary sm:text-5xl md:text-6xl">
          My Projects
        </h3>
        <p className="font-rubik text-xl font-normal text-orange sm:text-2xl md:text-3xl">
          Crafted with Passion
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
        <Card
        key={index}
        src={project.src}
        alt={project.alt}
        title={project.title}
        description={project.description}
        tags={project.tags}       
        />
      ))}
      </div>
    </section>
  );
}

export default Project;
