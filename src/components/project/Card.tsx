// import code from "../../assets/images/Card-logo/code.png";

type CardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  siteUrl?: string;
};

function Card({ src, alt, title, description, tags, codeUrl, siteUrl }: CardProps) {
  return (
    <section className="flex max-w-72 flex-col overflow-hidden rounded bg-bgcard font-rubik shadow-lg hover:cursor-pointer sm:max-w-xs">
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          className="h-60 w-full object-cover transition hover:blur-sm"
          src={src}
          alt={alt}
          aria-label={alt}
        />
      </a>
      <div className="flex grow flex-col px-6 py-4">
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
      <div className="mt-auto flex justify-between px-6 py-4">
  {codeUrl && (
    <a
      href={codeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-md border border-secondary bg-btn px-4 py-2 text-sm font-medium text-primary hover:border hover:border-btn hover:bg-orange hover:font-semibold hover:text-btn"
    >
      Code
    </a>
  )}
  {siteUrl && (
    <a
      href={siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-md border border-secondary bg-btn px-4 py-2 text-sm font-medium text-primary hover:border hover:border-btn hover:bg-orange hover:font-semibold hover:text-btn"
    >
      Site
    </a>
  )}
</div>
    </section>
  );
}

export default Card;
