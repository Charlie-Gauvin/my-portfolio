type CardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
};

function Card({ src, alt, title, description, tags, url }: CardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-72 overflow-hidden rounded bg-bgcard font-rubik shadow-lg hover:cursor-pointer sm:max-w-xs"
    >
      <img
        className="h-60 w-full object-cover transition hover:blur-sm"
        src={src}
        alt={alt}
        aria-label={alt}
      />
      <div className="px-6 py-4">
        <h2 className="mb-4 text-lg font-bold text-primary md:text-xl">
          {title}
        </h2>
        <p className="text-left text-sm text-gris md:text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pb-2 pt-4">
        {tags.map((tags, index) => (
          <span
            key={index}
            className="mb-2 mr-2 inline-block rounded-full border border-secondary bg-btn px-3 py-1 text-xs font-normal text-primary md:text-sm"
          >
            {tags}
          </span>
        ))}
      </div>
    </a>
  );
}

export default Card;
