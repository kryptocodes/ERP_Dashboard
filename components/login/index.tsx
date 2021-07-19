import React, { Children } from "react";
import { useRouter } from "next/router";
import { Formik } from "formik";

interface LoginProps {
  values: {
    email: string;
    password: string;
  };
  onSubmit: (values: any) => void;
}

const LoginPage:React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const ErrorMessage = (props) => (
    <p className="text-red-600 text-sm flex p-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {props.errors}
    </p>
  );

  const Form = () => (
    <>
      <div className="min-h-screen mx-auto flex items-center justify-center py-12 px-8 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto  h-12 w-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in
            </h2>
          </div>

          <Formik
            initialValues={{ email: "demo@gmail.com", password: "demo@123" }}
            validate={(values) => {
              const errors = {};
              switch(values){
                case !values.email: {
                  errors.email = "Please enter email";
                  break;
                }
                case !values.password:
                  {
                    errors.password = "Please enter password";
                    break;
                  }
                default: {
                  errors.email = "Please enter email";
                  errors.password = "Please enter password";
           
              }
            }}}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                router.push('/dashboard')
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      defaultValue={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />

                    {errors.email && touched.email && (
                      <ErrorMessage errors={errors.email} />
                    )}
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      defaultValue={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                    {errors.password && touched.password && (
                      <ErrorMessage errors={errors.password} />
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      {isSubmitting ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="animate-spin h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
  return (
    <div className="flex">
      <div className="hidden lg:block w-2/3 h-screen bg-blue-500"></div>
      <div className="w-full lg:w-2/4 md:w-full mx-auto">
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
