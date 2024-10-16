function Contact() {
  return (
    <section
      id="contact"
      className="mt-40 flex flex-col items-center pt-16 text-center"
    >
      {/* BLOCK TITRE/ SOUS TITRE */}
      <div className="pb-16">
        <h3 className="mb-4 font-syne text-3xl font-normal text-primary sm:text-5xl md:text-6xl">
          Contact Me
        </h3>
        <p className="font-rubik text-xl font-normal text-orange sm:text-2xl md:text-3xl">
          Let's work together
        </p>
      </div>

      {/* FORMULAIRE DE CONTACT */}
      {/* 1ère partie du formulaire */}
      <div className="mx-5 mt-20 grid max-w-5xl items-start gap-16 p-4 sm:grid-cols-2 lg:mx-10">
        <div className="text-left">
          <h4 className="text-center font-syne text-2xl font-bold text-primary md:text-left md:text-3xl">
            Let's Talk !
          </h4>
          <div className="mx-auto mt-2 h-1 w-32 bg-orange sm:mx-0 sm:w-40"></div> {/* Ajoute un div pour la couleur */}
          <p className="mt-4 font-rubik text-sm text-primary md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            consequuntur possimus. Aut, beatae unde? Sapiente quod optio
            numquam. Ea eius numquam, obcaecati ex temporibus porro architecto
            quae quidem at perferendis.
          </p>
          <div className="mt-10">
            <h5 className="mb-4 font-syne text-sm font-bold text-primary md:text-base">
              My Email
              
            </h5>
            

            <a
              href="#"
              className="flex items-center gap-4 pl-8 font-rubik text-primary underline underline-offset-4"
            >
              <svg
                width="32px"
                height="32px"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Gmail</title>
                <path
                  fill="#FFFFFF"
                  d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                />
              </svg>
              Monemail@gmail.com
            </a>
          </div>
          <div className="mt-10">
            <h5 className="font-syne text-sm font-bold text-primary md:text-base">
              Socials
            </h5>
            <ul className="mt-4 flex gap-5 pl-8">
              <li>
                <a href="#">
                  <svg
                    width="32px"
                    height="32px"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path
                      fill="#FFFFFF"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="32px"
                    height="32px"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path
                      fill="#FFFFFF"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* 2ème partie du formulaire */}
        <div>
          <form className="ml-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md bg-primary px-4 py-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md bg-primary px-4 py-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md bg-primary px-4 py-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
            />
            <textarea
              placeholder="Message"
              maxLength={500}
              rows={6}
              className="w-full resize-none rounded-md bg-primary px-4 pt-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
            ></textarea>
            <button
              type="button"
              className="!mt-6 rounded-md  border border-orange bg-orange px-5 py-3 text-sm font-semibold tracking-wide text-primary hover:border hover:border-secondary hover:bg-btn md:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
