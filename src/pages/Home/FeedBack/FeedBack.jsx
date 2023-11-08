import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FeedBack = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"What's Our Student Say"}
          heading={"Student's Feedback"}
        ></SectionTitle>
      </section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="p-8 bg-indigo-950 text-white border rounded shadow-sm animate-pulse">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              ></a>{" "}
              <span className="text-white">— 1 Feb 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Jingle Bells"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Right Place For Study
            </a>
            <p className="mb-5 text-white">
              Smart Academy is right place for getting desired college.. Some
              dont, become nothing.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Vasile Melinte
                </a>
                <p className="text-sm font-medium leading-4 text-white">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-indigo-950 border rounded shadow-sm animate-bounce">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              ></a>{" "}
              <span className="text-white">— 15 Nov 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Happy new Year"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              I Like Smart Academy
            </a>
            <p className="mb-5 text-white">
              Pommy ipsum smeg head whizz morris dancers come hither, bugger
              codswallop gob. Taking the mick middle class bog.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  John Doe
                </a>
                <p className="text-sm font-medium leading-4 text-white">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-indigo-950 border rounded shadow-sm animate-pulse">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              ></a>{" "}
              <span className="text-white">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Article"
              title="Why i love C++"
              className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Why i love Smart Academy
            </a>
            <p className="mb-5 text-white">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap rowsdower.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Andrew Larkin
                </a>
                <p className="text-sm font-medium leading-4 text-white">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
