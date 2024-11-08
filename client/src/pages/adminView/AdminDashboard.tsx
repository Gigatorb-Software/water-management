import React from 'react';
import { FaBoxOpen, FaHardHat } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';
 
const AdminDashboard = () => {
  const cardData = [
    {
      title: 'Maintenance',
      value: '$16,689',
      icon: 'mdi:tools',
      bgColor: 'bg-teal-100',
      iconBg: 'bg-teal-500',
    },
    {
      title: 'Installation',
      value: '$148',
      icon: 'mdi:cog-transfer',
      bgColor: 'bg-yellow-100',
      iconBg: 'bg-yellow-500',
    },
    {
      title: 'Repair',
      value: '$156K',
      icon: 'mdi:wrench',
      bgColor: 'bg-pink-100',
      iconBg: 'bg-pink-500',
    },
    {
      title: 'Exchange',
      value: '$64',
      icon: 'mdi:cached',
      bgColor: 'bg-green-100',
      iconBg: 'bg-green-500',
    },
  ];
 
  return (
    <div className="space-y-4 px-4 mt-0 sm:px-8">
      <Typography
        variant="h2"
        sx={{
          color: '#00acc1',
          fontFamily: 'serif',
          fontWeight: 'medium',
          fontSize: { xs: '1.875rem', md: '2.25rem' },
        }}
      >
        Dashboard
      </Typography>
 
      {/* First Row - Original Three Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
          <div className="p-4 bg-teal-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider font-serif">Total Users</h3>
            <p className="text-3xl">12,768</p>
          </div>
        </div>
 
        <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
          <div className="p-4 bg-yellow-500">
            <FaBoxOpen className="h-12 w-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider font-serif">Total Products</h3>
            <p className="text-3xl">39,265</p>
          </div>
        </div>
 
        <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
          <div className="p-4 bg-green-500">
            <FaHardHat className="h-12 w-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider font-serif">Total Technicians</h3>
            <p className="text-3xl ">142,334</p>
          </div>
        </div>
      </div>
 
      {/* Second Row - Responsive Card Grid */}
      <div className="container bg-white px-6 rounded-md shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`p-6 ${card.bgColor} rounded-lg shadow-lg text-center`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 ${card.iconBg} rounded-full mx-auto mb-4`}
              >
                <Icon icon={card.icon} className="text-white text-2xl" />
              </div>
              <h6 className="text-gray-700 font-medium mb-2 font-serif">{card.title}</h6>
              <h4 className="text-gray-900 font-medium text-xl mb-4">{card.value}</h4>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-1 px-4 rounded shadow-md hover:shadow-lg transition font-serif">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default AdminDashboard;
 



// ---------------------------------------------------------------------------------------

// import React from 'react';
// import { FaBoxOpen } from 'react-icons/fa'; // Import FaBoxOpen for Total Products
// import { FaHardHat } from 'react-icons/fa'; // Import FaHelmetSafety for Total Technicians


// const AdminDashboard = () => {
//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-3 sm:px-8">
//       <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
//         <div className="p-4 bg-green-400">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         </div>
//         <div className="px-4 text-gray-700">
//           <h3 className="text-sm tracking-wider">Total Users</h3>
//           <p className="text-3xl">12,768</p>
//         </div>
//       </div>

//       <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
//         <div className="p-4 bg-blue-400">
//           {/* FaBoxOpen icon for Total Products */}
//           <FaBoxOpen className="h-12 w-12 text-white" />
//         </div>
//         <div className="px-4 text-gray-700">
//           <h3 className="text-sm tracking-wider">Total Products</h3>
//           <p className="text-3xl">39,265</p>
//         </div>
//       </div>

//       <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
//         <div className="p-4 bg-indigo-400">
//           {/* FaHelmetSafety icon for Total Technicians */}
//           <FaHardHat className="h-12 w-12 text-white" />
//         </div>
//         <div className="px-4 text-gray-700">
//           <h3 className="text-sm tracking-wider">Total Technicians</h3>
//           <p className="text-3xl">142,334</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
