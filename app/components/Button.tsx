"use client";

import React from "react";

export const PrimaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  onClick,
  prefix,
}: {
  children: React.ReactNode;
  onClick: () => void;
  prefix?: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-blue-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 flex"
    >
      <div>{prefix}</div>
      <div>{children}</div>
    </button>
  );
};

// export default Button;
{
  /* <button
          type="button"
          className="text-gray-900 gap-4 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            id="google"
          >
            <path
              fill="#00ac47"
              d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
            ></path>
            <path
              fill="#4285f4"
              d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
            ></path>
            <path
              fill="#ffba00"
              d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
            ></path>
            <polygon
              fill="#2ab2db"
              points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
            ></polygon>
            <path
              fill="#ea4435"
              d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
            ></path>
            <polygon
              fill="#2ab2db"
              points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
            ></polygon>
            <path
              fill="#4285f4"
              d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
            ></path>
          </svg>
          Sign up with Google
        </button> */
}
