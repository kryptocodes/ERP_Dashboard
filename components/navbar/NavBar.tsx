import React from "react";
import Link from "next/link";

import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";

interface NavBarProps {
  children?: React.ReactNode;
}

const Data = [
  {
    name: "Dashboard",
    link: "/dashboard",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1 h-5 w-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: "About",
    link: "/about",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1 h-5 w-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
        />
      </svg>
    ),
  },
  {
    name: "Table",
    link: "/table",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1 h-5 w-auto"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Form",
    link: "/form",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1 h-5 w-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const router = useRouter();
  const SideBar = () => (
    <div className="lg:w-48 hidden lg:block md:block pt-16 md:w-1/3 min-h-screen sticky top-0 h-screen text-white">
      <div className="grid grid-row">
        {Data.map((v, i) => (
          <div key={i} className="text-white hover:text-indigo-500 p-2 ">
            <Link href={v?.link}>
              <a
                className={`${
                  router.pathname === v?.link ? `bg-gray-900 text-white` : ``
                } flex rounded-full px-4  hover:bg-indigo-200 mx-auto p-2 space-x-4`}
              >
                {v?.svg}
                <p className="text-lg hidden lg:block md:block font-semibold">
                  {v.name}
                </p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const BottomNavBar = () => (
    <section
      id="bottom-navigation"
      className="lg:hidden md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
    >
      <div id="tabs" className="flex justify-between bg-indigo-500">
        {Data.map((v, i) => (
          <div key={i} className="text-white hover:text-indigo-500 p-2 ">
            <Link href={v?.link}>
              <a
                className={`${
                  router.pathname.includes(v?.link)
                    ? `bg-gray-900 text-white`
                    : ``
                } flex rounded-full px-4  hover:bg-indigo-200 mx-auto p-2 space-x-4`}
              >
                {v?.svg}
                <p className="text-lg hidden lg:block md:block font-semibold">
                  {v.name}
                </p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <div className="bg-indigo-500  fixed w-full text-xl font-semibold text-white z-50 p-4">
        <div className="flex justify-between">
          <h1> ERP Management System </h1>

          <div className="flex justify-end">
            <Menu>
              <Menu.Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-6 w-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>{" "}
              </Menu.Button>

              <Menu.Items className="absolute  p-2 text-black right-0 w-auto mt-8 mr-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <>
                      {
                        <div className="groupflex list-none rounded-md items-center w-full  px-2 py-2 text-lg">
                          <h1>Hello, John</h1>
                          <input
                            className="bg-gray-200 rounded-xl mt-2 p-2 text-black"
                            type="text"
                            placeholder="???? Search"
                          />
                          <div className="p-2 mt-2 rounded-lg ">
                            <button
                              className="flex pb-2 hover:bg-indigo-400 hover:text-white  rounded-lg p-2 w-full"
                              onClick={() => router.push("/accounts")}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              Accounts
                            </button>

                            <button
                              className="flex pb-2 hover:bg-indigo-400 hover:text-white  rounded-lg p-2 w-full"
                              onClick={() => router.push("/")}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                />
                              </svg>
                              Logout
                            </button>
                          </div>
                        </div>
                      }
                    </>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>

      <div className="flex  ">
        <aside className="flex relative bg-indigo-500">
          <SideBar />
        </aside>
        <main className="flex-auto overflow-y-auto pt-20 mx-auto relative h-full min-h-screen mx-auto p-2 pb-20">
          {children}
        </main>
        <BottomNavBar />
      </div>
    </>
  );
};

export default NavBar;
