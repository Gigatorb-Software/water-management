// import React, { useEffect, useState } from "react";
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';
// import axios from "axios";

// const Card = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8000/api/admin/products",
//         {
//           withCredentials: true, // Send the cookie along with the request
//         }
//       );
//       console.log("response", response);
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   // useEffect(() => {
//   //   AOS.init({
//   //     duration: 500, // Animation duration in milliseconds
//   //   });
//   // }, []);
// console.log("first",products)
//   return (
//     <div className="container mx-auto mt-0 bg-slate-100 px-28 py-16 justify-items-center">
//       <div className="text-5xl text-center font-serif font-medium text-cyan-600 mb-10">
//         Our Products
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-items-center">
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
//               <p className="text-slate-800 text-lg font-semibold">
//                 Heat Boat Wifi
//               </p>
//               <p className="text-cyan-600 text-lg font-semibold">$95.00</p>
//             </div>
//             <p className="text-slate-600 leading-normal p-2 font-light text-sm">
//               Pureit Copper+ Eco Mineral RO+UV+MF Water Purifier with 8L Storage
//               (Black)
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

// export default Card;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  salePrice: number;
  totalStock: number;
  averageReview: number;
  createdAt: string;
  updatedAt: string;
}

const Card: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate(); // Initialize the navigate function

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/admin/products",
        {
          withCredentials: true,
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mt-0 bg-slate-100 px-10 py-16 justify-items-center">
      <div className="text-5xl text-center font-serif font-medium text-cyan-600 mb-10">
        Our Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-72 h-96"
            data-aos="fade-up"
            onClick={() => navigate(`/product/${product.id}`)} // Navigate to product detail on click
          >
            <div className="w-full p-3.5 h-64 sm:h-72 lg:h-64 overflow-hidden rounded-xl bg-clip-border flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-3/2 w-3/2 object-cover rounded-md"
              />
            </div>
            <div className="p-2">
              <p className="text-slate-800 text-md font-semibold">
                {product.title}
              </p>
              <div className="mb-1 flex p-2 items-center justify-between">
                <p className="text-cyan-600 text-lg font-semibold">
                  ₹{product.salePrice}
                </p>
                <p className="text-slate-600 leading-normal p-0 font-light text-lg line-through">
                  ₹{product.price}
                </p>
              </div>
              <div className="mb-1 flex p-2 items-center justify-between">
                <p className="text-slate-600 leading-normal p-0 font-light text-md">
                  {product.brand}
                </p>
                <p className="text-slate-600 leading-normal p-0 font-light text-sm">
                  Rating {product.averageReview}
                </p>
              </div>
              <button
                className="my-1 w-full bg-cyan-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
