import { Parisienne } from "next/font/google";

interface HeroSectionProps {
  title: string;
  content: string;
  button: string;
  href: string;
  backgroundImage: string;
}

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection() {
  const heroData: HeroSectionProps = {
    title: "Welcome",
    content: "Main Site is currently under Construction!",
    button: "Book Here",
    href: "https://ignite-life-bowen-therapy.square.site/",
    backgroundImage:
        "/rocks.jpg",
  };

  return (
      <div
          className="relative isolate flex h-[36rem] items-center justify-center overflow-hidden bg-ignite-cream md:h-[48rem] lg:h-[64rem]"
          style={{
            backgroundImage: `url(${heroData.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 -z-10 bg-black opacity-25" />

        {/* Slogan Image in top-right corner (responsive) */}
        <div
            className="
            absolute
            top-4 right-4
            sm:top-8 sm:right-8
            md:top-16 md:right-16
            flex items-center justify-center
            h-36 w-36
            md:h-48 md:w-48
            lg:h-72 lg:w-72
            rounded-full bg-white shadow-md
          "
        >
          <img
              src="/slogan.png"
              alt="Slogan"
              className="h-full w-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-2xl py-32 text-center sm:py-48 lg:py-56 lg:space-y-6">
          <h1 className={`text-4xl text-shadow ${parisienne.className} tracking-tight text-white sm:text-6xl`}
              style={{
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
              }}
          >
            {heroData.title}
          </h1>
          <p className="mt-4 text-3xl text-shadow leading-8 text-gray-100"
             style={{
                 textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
             }}
                 >
            {heroData.content}
          </p>
          <div className="mt-8">
              <a
                  href={heroData.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block rounded-md border-2 border-white/75 bg-[#bd9479] px-6 py-3 font-bold uppercase tracking-wide text-white shadow-button transition-transform duration-500 ease-in-out hover:scale-110 hover:bg-[#b5896f] hover:text-gray-100 hover:border-gray-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  style={{
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
                      transformOrigin: "center center",
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                  }}
              >
                  {heroData.button}
              </a>

          </div>
        </div>
      </div>
  );
}
