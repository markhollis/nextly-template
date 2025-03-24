"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  type NavigationItem = {
    name: string;
    href: string;
  };

  const navigation: NavigationItem[] = [
    { name: "AVAILABILITY", href: "/availability" },
    { name: "LOFTS", href: "/lofts" },
    { name: "LOCATION", href: "/location" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <div className="w-full">
      <nav className="w-full relative flex flex-col items-center justify-center lg:justify-center">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl mt-5 mb-5 pl-3 pr-3 font-medium text-primary dark:text-secondary-100">
            <Image
              src="/img/banner.png"
              width="500"
              alt="B&B"
              height="100"
              className=""
            />
          </span>
        </Link>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-primary focus:text-primary focus:bg-primary-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="w-full px-4 py-2  text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-primary-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu */}
        <div className="hidden text-center lg:flex lg:items-center justify-center w-full bg-black ">
          <ul className="flex flex-col items-center list-none lg:flex-row">
            {navigation.map((menu, index) => (
              <li className="w-full" key={index}>
                <Link
                  href={menu.href}
                  className="block w-full px-10 pt-3 pb-3 py-2 text-lg font-mulish text-white no-underline rounded-md text-center dark:text-primary hover:text-primary focus:text-primary focus:bg-primary-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
