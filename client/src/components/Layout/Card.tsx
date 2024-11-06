import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="container mx-auto mt-0 bg-slate-100 px-28 py-16 justify-items-center">
      <div className='text-5xl text-center font-serif font-medium text-cyan-600 mb-10'>
        Our Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-items-center gap-10">
        
        {/* Card 1 */}
        <div 
          className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-56 h-96" 
          data-aos="fade-up"
        >
          <div className=" p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border flex justify-center">
            <img
              src="https://www.yudaah.com/demo/water-purifier-website-template/assets/images/product/p4.webp"
              alt="Apple AirPods"
              className="h-3/2 w-3/2 object-cover rounded-md"
            />
          </div>
          <div className="p-2">
            <div className="mb-1 flex p-2 items-center justify-between">
              <p className="text-slate-800 text-lg font-semibold">Heat Boat Wifi</p>
              <p className="text-cyan-600 text-lg font-semibold">$95.00</p>
            </div>
            <p className="text-slate-600 leading-normal p-2 font-light text-sm">
              Pureit Copper+ Eco Mineral RO+UV+MF Water Purifier with 8L Storage (Black)
            </p>
            <button
              className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Card 2 */}
        <div 
          className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-56 h-96"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border flex justify-center">
            <img
              src="https://www.yudaah.com/demo/water-purifier-website-template/assets/images/product/p1.webp"
              alt="Apple AirPods"
              className="h-3/2 w-3/2 object-cover rounded-md"
            />
          </div>
          <div className="p-2">
            <div className="mb-1 flex p-2 items-center justify-between">
              <p className="text-slate-800 text-lg font-semibold">Xpress Clean</p>
              <p className="text-cyan-600 text-lg font-semibold">$95.00</p>
            </div>
            <p className="text-slate-600 p-2 leading-normal font-light text-sm">
              Pureit Vital Max (Blue) RO+UV+MP, 7L Storage with FiltraPower Technology
            </p>
            <button
              className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Card 3 */}
        <div 
          className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-56 h-96"
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border flex justify-center">
            <img
              src="/image5.jpg"
              alt="Apple AirPods"
              className="h-full w-full object-cover  rounded-md"
            />
          </div>
          <div className="p-2">
            <div className="mb-1 flex p-2 items-center justify-between">
              <p className="text-slate-800 text-lg font-semibold">Fitness Pulse</p>
              <p className="text-cyan-600 text-lg font-semibold">$95.00</p>
            </div>
            <p className="text-slate-600 leading-normal p-2 font-light text-sm">
              Pureit Copper+ Eco Mineral RO+UV+MF Water Purifier with 8L Storage
            </p>
            <button
              className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Card 4 */}
        <div 
          className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-56 h-96"
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          <div className="relative p-2 h-48 sm:h-56 lg:h-72 overflow-hidden rounded-xl bg-clip-border flex justify-center">
            <img
              src="/image6.jpg"
              alt="Apple AirPods"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-2">
            <div className="mb-1 flex p-2 items-center justify-between">
              <p className="text-slate-800 text-lg font-semibold">Alkaline Ultra</p>
              <p className="text-cyan-600 text-lg font-semibold">$95.00</p>
            </div>
            <p className="text-slate-600 leading-normal p-2  font-light text-sm">
              Pureit Copper+ Eco Mineral RO+UV+MF Water Purifier with 8L Storage (Black)
            </p>
            <button
              className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
