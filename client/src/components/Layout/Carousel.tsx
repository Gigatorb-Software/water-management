import { Carousel } from "flowbite-react";
import img from "/skybg2.png";
import img2 from "/bg1.jpg";

const CarouselComponent = () => {
  return (
    <section
      className="relative bg-white dark:bg-gray-900 bg-cover bg-center"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to reduce background opacity */}
      <div className="absolute inset-0 bg-white opacity-70 dark:bg-gray-900 dark:opacity-60"></div>

      <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h3 className="max-w-2xl mb-4 text-2xl text-[#2b97b5] font-extrabold tracking-tight md:text-5xl md:leading-[3.5rem] dark:text-white">
            Water Purification Solutions for Every Home
          </h3>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From high-quality filters to comprehensive maintenance plans,
            Skyline ensures safe and pure water for all. Simplify your access to
            clean water with Skyline's trusted solutions.
          </p>
          {/* Uncomment if needed */}
          {/* <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a> */}
        </div>
        <div className="hidden md:mt-[-2rem] lg:col-span-5 md:flex justify-center">
          <img src={img} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
