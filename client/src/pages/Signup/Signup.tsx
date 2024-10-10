import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('First Name is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(
        /^(\+?\d{1,3}[- ]?)?\d{10}$/,
        'Phone number is not valid'
      )
      .required('Phone Number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Here, you can handle the form data, e.g., send it to your backend
    console.log('Form data', values);
    // Simulate a server response delay
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      // Optionally, redirect the user or show a success message
    }, 1000);
  };

  return (
    <section 
      className="bg-gray-50 dark:bg-gray-900"
      style={{
        backgroundImage: `url('https://html.ditsolution.net/drtheme/dreamhub/purify/assets/images/slider/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto min-h-screen">
        {/* <Link to="/" className="flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-6 h-6 mr-1"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Aqua-Fresh
        </Link> */}
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-xs xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 space-y-3 sm:p-4">
            <h1 className="text-bold text-xl text-gray-900 dark:text-white mb-4 " style={{ fontSize: 22 }}>
              SignUp
            </h1>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-3">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                      dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="firstName">
                      {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                      dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="lastName">
                      {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                      dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="email">
                      {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                      dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="phone">
                      {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                      dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="password">
                      {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="confirmPassword" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
                      Confirm Password
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                      dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="confirmPassword">
                      {(msg) => <div className="text-red-500 text-xs mt-0.5">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 
                    font-medium rounded-md text-sm px-4 py-1.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    {isSubmitting ? 'Registering...' : 'Register'}
                  </button>

                  {/* Sign In Link */}
                  <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-pink-700 font-semibold hover:underline">
                      Sign In
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
