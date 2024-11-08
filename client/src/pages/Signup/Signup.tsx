// import React from 'react';
// import Layout from '../../components/Layout/Layout';
// import { Link } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const Signup = () => {
//   // Define the validation schema using Yup
//   const validationSchema = Yup.object({
//     firstName: Yup.string()
//       .max(15, 'Must be 15 characters or less')
//       .required('First Name is required'),
//     lastName: Yup.string()
//       .max(20, 'Must be 20 characters or less')
//       .required('Last Name is required'),
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     phone: Yup.string()
//       .matches(
//         /^(\+?\d{1,3}[- ]?)?\d{10}$/,
//         'Phone number is not valid'
//       )
//       .required('Phone Number is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm Password is required'),
//   });

//   // Handle form submission
//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     // Here, you can handle the form data, e.g., send it to your backend
//     console.log('Form data', values);
//     // Simulate a server response delay
//     setTimeout(() => {
//       setSubmitting(false);
//       resetForm();
//       // Optionally, redirect the user or show a success message
//     }, 1000);
//   };

//   return (
//     <section 
//       className="bg-gray-50 dark:bg-gray-900"
//       style={{
//         backgroundImage: 'url(/WaterBackground.jpg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto min-h-screen">
//         {/* <Link to="/" className="flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white">
//           <img
//             className="w-6 h-6 mr-1"
//             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//             alt="logo"
//           />
//           Aqua-Fresh
//         </Link> */}
//         <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-xs xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-4 space-y-3 sm:p-4">
//             <h1 className="text-bold text-xl text-gray-900 dark:text-white mb-4 " style={{ fontSize: 22 }}>
//               SignUp
//             </h1>
//             <Formik
//               initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 phone: '',
//                 password: '',
//                 confirmPassword: '',
//               }}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ isSubmitting }) => (
//                 <Form className="space-y-3">
//                   {/* First Name */}

//                   <div>
                    
//                   <div>
//                     <label htmlFor="firstName" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
//                       First Name
//                     </label>
//                     <Field
//                       type="text"
//                       name="firstName"
//                       id="firstName"
//                       placeholder=""
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
//                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
//                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage name="firstName">
//                       {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
//                     </ErrorMessage>
//                   </div>

//                   {/* Last Name */}
//                   <div>
//                     <label htmlFor="lastName" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
//                       Last Name
//                     </label>
//                     <Field
//                       type="text"
//                       name="lastName"
//                       id="lastName"
//                       placeholder=""
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
//                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
//                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage name="lastName">
//                       {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
//                     </ErrorMessage>
//                   </div>
                  
//                   </div>
                 

//                   {/* Email */}
//                   <div>
//                     <label htmlFor="email" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
//                       Email
//                     </label>
//                     <Field
//                       type="email"
//                       name="email"
//                       id="email"
//                       placeholder=""
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
//                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
//                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage name="email">
//                       {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
//                     </ErrorMessage>
//                   </div>

//                   {/* Phone Number */}
//                   <div>
//                     <label htmlFor="phone" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
//                       Phone Number
//                     </label>
//                     <Field
//                       type="tel"
//                       name="phone"
//                       id="phone"
//                       placeholder=""
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
//                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
//                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage name="phone">
//                       {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
//                     </ErrorMessage>
//                   </div>

//                   {/* Password */}
//                   <div>
//                     <label htmlFor="password" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
//                       Password
//                     </label>
//                     <Field
//                       type="password"
//                       name="password"
//                       id="password"
//                       placeholder=""
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
//                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
//                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage name="password">
//                       {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
//                     </ErrorMessage>
//                   </div>

//                   {/* Confirm Password */}
//                   <div>
//                     <label htmlFor="confirmPassword" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
//                       Confirm Password
//                     </label>
//                     <Field
//                       type="password"
//                       name="confirmPassword"
//                       id="confirmPassword"
//                       placeholder=""
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
//                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
//                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     />
//                     <ErrorMessage name="confirmPassword">
//                       {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
//                     </ErrorMessage>
//                   </div>

//                   {/* Submit Button */}
                  // <button
                  //   type="submit"
                  //   disabled={isSubmitting}
                    // className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 
                    // font-medium rounded-md text-sm px-4 py-1.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  // >
                  //   {isSubmitting ? 'Registering...' : 'Register'}
                  // </button>

                  // {/* Sign In Link */}
                  // <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                  //   Already have an account?{' '}
                  //   <Link to="/login" className="text-pink-700 font-semibold hover:underline">
                  //     Sign In
                  //   </Link>
                  // </p>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiSignUp } from '../../services/AuthenticationAPIs/authenticationService';

const Signup = () => {
  const navigate = useNavigate();

  // State variables to handle form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending form data to the API
      const response = await apiSignUp( {
        firstName,
        lastName,
        phone,
        email,
        password,
        roleId : 2,
        street,
        city,
        state,
        postalCode,
        country
        
      });

      console.log('Response:', response.data);
     
        navigate('/login');
     
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed, please try again.');
    }
  };

  return (
    <section className="flex justify-center w-full  bg-sky-50">
      <div className="flex w-3/6 my-5 items-center justify-center px-4 py-6 mx-auto ">
        <div className="w-full bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 space-y-8 sm:p-4">
            <h1
              className="text-bold text-xl flex justify-center my-4 text-gray-900 dark:text-white mb-4 font-serif"
              style={{ fontSize: 22 }}
            >
              SignUp
            </h1>
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="street"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              {/* City, State, PostalCode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="postalCode"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block mb-1 text-xs font-medium text-gray-900 dark:text-white font-serif"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 
                    font-medium rounded-md text-sm px-4 py-1.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 font-serif"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 font-serif">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-pink-700 font-semibold hover:underline font-serif"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
