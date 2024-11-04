import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  // Initialize useNavigate
  const navigate = useNavigate();

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // remember: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Form data", values);
      try {
        const response = await axios.post("http://localhost:8000/api/login", {
          email: values.email,
          password: values.password,
        },{headers: {
          "Content-Type": "application/json"
      }, withCredentials: true,});

        console.log("Response:", response.data);
        if (response.data.success === true) {
          // navigate("/serviceform");
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }

      // Redirect to ServiceForm after successful login
      // navigate("/serviceform");
    },
  });

  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url("https://html.ditsolution.net/drtheme/dreamhub/purify/assets/images/slider/hero-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-96 h-auto max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-6">
          {/* <Link to="/" className="flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            <img className="w-6 h-6 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Aqua-Fresh    
          </Link> */}
          <h1
            className="text-bold text-xl text-gray-900 dark:text-white mb-4 "
            style={{ fontSize: 22 }}
          >
            Sign In
          </h1>
          <form onSubmit={formik.handleSubmit} className="space-y-3">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`bg-gray-50 border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
                placeholder=""
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="mt-1 text-xs text-red-600">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder=""
                className={`bg-gray-50 border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="mt-1 text-xs text-red-600">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  onChange={formik.handleChange}
                  checked={formik.values.remember}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-xs text-gray-600 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-xs font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-4 py-2"
            >
              Sign in
            </button>

            {/* Sign Up Link */}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Don’t have an account yet?{" "}
              <Link
                to="/signup"
                className="text-pink-700 font-semibold text-xs"
              >
                Sign-up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
