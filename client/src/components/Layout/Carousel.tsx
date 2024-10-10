import { Carousel } from "flowbite-react";

const CarouselComponent = () => {
    return (
        <div className="w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[480px] 2xl:h-[600px]">
            <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
                {/* First slide with background and overlay image */}
                <div className="relative flex h-full items-center justify-center dark:text-white">
                    {/* Background image */}
                    <img
                        // src="/bg1.jpg"
                        src="https://www.kentrosystems.com/images/banner/Water-Purifier-Main-Category-Page-Banner.jpg"
                        className="w-full h-full object-cover"
                        alt="Slide 1"
                        loading="lazy"
                    />
                    {/* Overlay image */}
                    {/* You can uncomment and adjust the overlay image here if needed */}
                    {/* <img
                        src="/overlay1.png"
                        className="absolute inset-0 w-full h-full object-contain"
                        alt="Overlay Image"
                        loading="lazy"
                    /> */}
                </div>

                {/* Second slide */}
                <div className="relative flex h-full items-center justify-center  dark:text-white">
                    <img
                        src="/bg2.jpg"
                        className="w-full h-full object-cover"
                        alt="Slide 2"
                        loading="lazy"
                    />
                    {/* Overlay image */}
                    {/* Uncomment and adjust the overlay image here if needed */}
                    {/* <img
                        src=""
                        className="absolute inset-0  w-1/2 h-full object-contain"
                        alt="Overlay Image"
                        loading="lazy"
                    /> */}
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
