// src/components/SignupForm.tsx
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: values => {
      // Your signup logic here (e.g., API request)
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 max-w-lg p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.firstName}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.lastName}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="border border-gray-300 p-2 w-full rounded-md"
              />
              {formik.values.password ? (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? "hide" : "show"}
                </button>
              ) : (
                ""
              )}
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="border border-gray-300 p-2 w-full rounded-md"
              />

              {formik.values.confirmPassword ? (
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              ) : (
                ""
              )}
            </div>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
