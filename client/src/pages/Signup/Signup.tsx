import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate()
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
    address: Yup.string().required('Address is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Sending form data to the API
      const response = await axios.post('http://localhost:8000/api/signup', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        address: values.address,
        phoneNumber: values.phone,
        password: values.password,
      });

      console.log('Response:', response.data);
     if(response.data.success === true){
      navigate('/login')
     }
      
      // Reset the form after successful signup
      resetForm();
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed, please try again.');
    } finally {
      setSubmitting(false);
    }
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
                address: '',
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-0.5" />
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-0.5" />
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-0.5" />
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-0.5" />
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-0.5" />
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
                      Address
                    </label>
                    <Field
                      type="text"
                      name="address"
                      id="address"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-xs mt-0.5" />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 font-medium rounded-md text-sm px-4 py-1.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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
