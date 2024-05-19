"use client";

import { socials } from "@/lib/socialsLib";
import Link from "next/link";
import { useMemo } from "react";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const currentMonth = useMemo(
    () => new Date().toLocaleString("default", { month: "long" }),
    []
  );
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-semibold font-secondary text-white sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-hover">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-white font-secondary lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {socials.map((link, index) => {
                return (
                  <Link
                    href={link.href}
                    key={index}
                    className="text-gray-100 transition hover:text-accent-hover "
                  >
                    {link.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-accent"> Services </strong>

              <ul className="mt-6 space-y-1 font-secondary">
                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    {" "}
                    Marketing{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    Graphic Design
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    App Development
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-accent font-secondary">
                {" "}
                About{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    {" "}
                    Our Team{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-accent font-secondary">
                {" "}
                Support{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    {" "}
                    FAQs{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white hover:text-accent-hover duration-200 transition-all"
                    href="#"
                  >
                    {" "}
                    Live Chat{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t  border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed font-secondary text-gray-500">
            Created by{" "}
            <Link
              href="#"
              className="text-white  hover:text-accent-hover duration-200 transition-all"
            >
              Tushar Upadhyay
            </Link>{" "}
            | {currentYear} {currentMonth}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
