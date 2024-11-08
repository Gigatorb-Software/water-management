// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Products = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 500, // Animation duration in milliseconds
//     });
//   }, []);

//   return (
//     <div className=" w-full  mt-0 bg-slate-100   py-16 justify-items-center">
//       <div className='text-5xl text-center font-serif font-medium text-cyan-600 mb-10'>
//         Our Products
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-items-center gap-8">
        
//         {/* Card 1 */}
//         <div 
//           className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-72 h-96" 
//           data-aos="fade-up"
//         >
//           <div className=" p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border flex justify-center">
//             <img
//               src="https://www.yudaah.com/demo/water-purifier-website-template/assets/images/product/p4.webp"
//               alt="Apple AirPods"
//               className="h-3/2 w-3/2 object-cover rounded-md"
//             />
//           </div>
//           <div className="p-2">
//             <div className="mb-1 flex p-2 items-center justify-between">
//               <p className="text-slate-800 text-lg font-semibold">Heat Boat Wifi</p>
//               <p className="text-cyan-600 text-lg font-semibold">$95.00</p>
//             </div>
//             <p className="text-slate-600 leading-normal p-2 font-light text-sm">
//               Pureit Copper+ Eco Mineral RO+UV+MF Water Purifier with 8L Storage (Black)
//             </p>
//             <button
//               className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
//               type="button"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
        
//         {/* Card 2 */}
//         <div 
//           className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-72 h-96"
//           data-aos="fade-up" 
//           data-aos-delay="200"
//         >
//           <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border flex justify-center">
//             <img
//               src="/Aqua1.jpg"
//               alt="Apple AirPods"
//               className="h-3/2 w-3/2 object-cover rounded-md"
//             />
//           </div>
//           <div className="p-2">
//             <div className="mb-1 flex p-2 items-center justify-between">
//               <p className="text-slate-800 text-lg font-semibold">Xpress Clean</p>
//               <p className="text-cyan-600 text-lg font-semibold">$95.00</p>
//             </div>
//             <p className="text-slate-600 p-2 leading-normal font-light text-sm">
//               Pureit Vital Max (Blue) RO+UV+MP, 7L Storage with FiltraPower Technology
//             </p>
//             <button
//               className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
//               type="button"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
        
//         {/* Card 3 */}
//         <div 
//           className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-72 h-96"
//           data-aos="fade-up" 
//           data-aos-delay="400"
//         >
//           <div className="relative p-3.5 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl bg-clip-border flex justify-center">
//             <img
//               src="/image5.jpg"
//               alt="Apple AirPods"
//               className="h-full w-full object-cover  rounded-md"
//             />
//           </div>
//           <div className="p-2">
//             <div className="mb-1 flex p-2 items-center justify-between">
//               <p className="text-slate-800 text-lg font-semibold">Fitness Pulse</p>
//               <p className="text-cyan-600 text-lg font-semibold">$95.00</p>
//             </div>
//             <p className="text-slate-600 leading-normal p-2 font-light text-sm">
//               Pureit Copper+ Eco Mineral RO+UV+MF Water Purifier with 8L Storage
//             </p>
//             <button
//               className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
//               type="button"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
        
//         {/* Card 4 */}
//         <div 
//           className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-72 h-96"
//           data-aos="fade-up" 
//           data-aos-delay="600"
//         >
//           <div className="relative p-2 h-48 sm:h-56 lg:h-72 overflow-hidden rounded-xl bg-clip-border flex justify-center">
//             <img
//               src="/image6.jpg"
//               alt="Apple AirPods"
//               className="h-full w-full object-cover rounded-md"
//             />
//           </div>
//           <div className="p-2">
//             <div className="mb-1 flex p-2 items-center justify-between">
//               <p className="text-slate-800 text-lg font-semibold">Alkaline Ultra</p>
//               <p className="text-cyan-600 text-lg font-semibold">$95.00</p>
//             </div>
//             <p className="text-slate-600 leading-normal p-2  font-light text-sm">
//               Pureit Copper+ Eco Mineral RO+UV+MF Water Purifier with 8L Storage (Black)
//             </p>
//             <button
//               className="mt-6 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
//               type="button"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Products;



import React from 'react';

function Products({ title, description, time, comments, imageUrl, tag } : any) {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <a href="#">
        <div className="relative">
          <img className="w-full h-72" src={imageUrl} alt={title} />
          <div className="bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 hover:bg-gray-400 opacity-25"></div>
          <div className="text-xs absolute top-0 right-0 bg-cyan-600 hover:bg-white px-4 py-2 text-white hover:text-cyan-600 mt-3 mr-3   transition duration-500 ease-in-out rounded-md hover:border-cyan-600">
            {tag}
          </div>
        </div>
      </a>
      <div className="px-6 py-4 mb-auto">
        <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
          {title}
        </a>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <svg height="13px" width="13px" viewBox="0 0 512 512" className="mr-1">
            <path
              d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
            ></path>
          </svg>
          <span className="ml-1">{time} mins ago</span>
        </span>
        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <svg className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
          </svg>
          <span className="ml-1">{comments} Comments</span>
        </span>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const blogs = [
    {
      title: "Skyline Aqua (Xpress Clean)",
      description: " Pureit Copper+ Eco Mineral RO+UV+MF Water Purifier with 8L Storage.",
      time: 6,
      comments: 39,
      imageUrl: "/Aqua1.jpg",
      tag: "Book Now"
    },
    {
      title: "Skyline Aqua (Fitness Pulse)",
      description: "Pureit Vital Max (Blue) RO+UV+MP, 7L Storage with FiltraPower Technology.",
      time: 12,
      comments: 45,
      imageUrl: "/image5.jpg",
      tag: "Book Now"
    },
    {
      title: "Skyline Aqua (Alkaline Ultra)",
      description: " Pureit Copper+ Eco Mineral RO+UV+MF Water Purifier with 8L Storage (Black).",
      time: 12,
      comments: 45,
      imageUrl: "/image6.jpg",
      tag: "Book Now"
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="text-center mb-8">
      <h2 className="text-5xl text-center font-serif font-medium text-cyan-600 mb-10 mt-10">Our Products</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {blogs.map((blog, index) => (
        <Products key={index} {...blog} />
      ))}
    </div>
  </div>
  );
}
