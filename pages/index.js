import React from "react";
import Head from "next/head";
import {
  BsFillMoonStarsFill,
  BsLinkedin,
  BsGithub,
  BsBehance,
  BsMedium,
  BsSunFill,
} from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { useState } from "react";
import avatar from "../public/avatar.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Willy Fontenelle</title>
        <meta name="description" content="Designer and developer" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Willy Fontenelle" />
        <meta property="og:description" content="Designer and developer" />
        <meta
          property="og:image"
          content="https://willyfontenelle.github.io/image.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900 md:px-20 lg:px-40 transition-color duration-700">
        <section className="grid max-w-screen-md mx-auto">
          <section className="min-h-64">
            <nav className="py-8 mb-2 flex justify-center">
              <ul className="flex items-center">
                <li>
                  <div
                    className={`cursor-pointer text-2xl ${
                      darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                    } transition-color duration-700 `}
                    onClick={() => setDarkMode(!darkMode)}
                    title="Switch mode"
                  >
                    {darkMode ? <BsFillMoonStarsFill /> : <BsSunFill />}
                  </div>
                </li>
                <li>
                  <a
                    className={`bg-blue-600 text-white py-3 px-4 border-none rounded-md ml-8 ${
                      darkMode
                        ? "hover:bg-blue-700 active:bg-blue-800"
                        : "hover:bg-blue-700 active:bg-blue-800"
                    } focus:outline-none`}
                    href="/resumeWilly-en_compressed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="PDF Curriculum Vitae"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            <div className="text-center p-10 py-10">
              <h2 className="text-4xl py-2 text-blue-600 font-bold dark:text-blue-500 md:text-6xl transition-color duration-700">
                Willy Fontenelle
              </h2>

              <h3 className="text-2xl py-2 text-gray-500 dark:text-gray-400 md:text-2xl transition-color duration-700">
                Designer and developer
              </h3>
              <p className="text-md py-5 leading-6 text-gray-600 dark:text-gray-200 max-w-xl mx-auto md:text-md transition-color duration-700">
                I am passionate about how design and technology come together,
                especially involving design systems in digital products.
              </p>
              <div className="text-4xl flex justify-center gap-4 py-3">
                <a
                  href="https://www.linkedin.com/in/willyfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${
                      darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                    } transition-color duration-700`}
                  >
                    <BsLinkedin />
                  </span>
                </a>
                <a
                  href="https://github.com/willyfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${
                      darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                    } transition-color duration-700`}
                  >
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://www.behance.net/willyfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${
                      darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                    } transition-color duration-700`}
                  >
                    <BsBehance />
                  </span>
                </a>
                <a
                  href="https://medium.com/@willyfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${
                      darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                    } transition-color duration-700`}
                  >
                    <BsMedium />
                  </span>
                </a>
                <a
                  href="https://www.figma.com/@willyfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${
                      darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                    } transition-color duration-700`}
                  >
                    <FiFigma />
                  </span>
                </a>
              </div>
            </div>

            <div>
              <ul className="flex justify-center">
                <li className="rounded-full w-56 h-56 relative overflow-hidden mb-16 md:h-80 md:w-80">
                  <Image src={avatar} layout="fill" alt="avatar" />
                </li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <div>
              <h3 className="text-2xl font-medium px-5 pb-2 text-gray-600 dark:text-white">
                Portfolio
              </h3>
            </div>

            <div className="block gap-4">

              <div className="text-left pt-4 pb-4 px-5 dark:text-white md:space-x-4">
                <div className="md:flex md:flex-1 md:gap">
                  <div className="rounded-md overflow-hidden relative h-48 w-full object-cover md:w-1/2 md:h-auto">
                    <Image
                      src="/suitcase.png"
                      layout="fill"
                      alt="Suitcase Design System"
                    />
                  </div>
                  <div className="pt-4 md:pt-0 md:w-1/2 md:pl-4">
                  <h3 className="text-lg font-medium pb-1 text-gray-800 dark:text-white">
                    Suitcase Design System
                  </h3>
                  <p className="text-md text-gray-600 dark:text-gray-200">
                    Creating the first version of a design system from theory to practice
                  </p>
                  <p className="text-gray-400 py-1 text-sm dark:text-gray-400">
                    #designsystem #productmanagement #userinterface
                    #userexperience #figma #designtokens #frontend-development
                    #react
                  </p>
                  <a
                    href="https://willyfontenelle.medium.com/suitcase-design-system-from-theory-to-practice-ba41c56c87ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Access project on Medium (English)
                  </a>
                </div>
                </div>
              </div>

              <div className="text-left pt-4 pb-4 px-5 dark:text-white md:space-x-4">
                <div className="md:flex md:flex-1 md:gap">
                  <div className="rounded-md overflow-hidden relative h-48 w-full object-cover md:w-1/2 md:h-auto">
                    <Image
                      src="/wine.jpg"
                      layout="fill"
                      alt="Wine Eventos (We Wine)"
                    />
                  </div>
                  <div className="pt-4 md:pt-0 md:w-1/2 md:pl-4">
                  <h3 className="text-lg font-medium pb-1 text-gray-800 dark:text-white">
                  Wine Eventos (We Wine)
                  </h3>
                  <p className="text-md text-gray-600 dark:text-gray-200">
                  Redesigning the experience of recommending drinks for events and monitoring its transition and results
                  </p>
                  <p className="text-gray-400 py-1 text-sm dark:text-gray-400">
                    #userinterface #userexperience #designthinking #research #designsystem #figma
                    #react
                  </p>
                  <a
                    href="https://willyfontenelle.medium.com/wine-eventos-ux-case-bd47eea18fec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Access project on Medium (Portuguese)
                  </a>
                </div>
                </div>
              </div>

              <div className="text-left pt-4 pb-4 px-5 dark:text-white md:space-x-4">
                <div className="md:flex md:flex-1 md:gap">
                  <div className="rounded-md overflow-hidden relative h-48 w-full object-cover md:w-1/2 md:h-auto">
                    <Image
                      src="/shopfood.png"
                      layout="fill"
                      alt="Parmê & Shopfood"
                    />
                  </div>
                  <div className="pt-4 md:pt-0 md:w-1/2 md:pl-4">
                  <h3 className="text-lg font-medium pb-1 text-gray-800 dark:text-white">
                  Parmê & Shopfood
                  </h3>
                  <p className="text-md text-gray-600 dark:text-gray-200">
                    Redesigning white-label e-commerce platform for restaurants and food deliveries
                  </p>
                  <p className="text-gray-400 py-1 text-sm dark:text-gray-400">
                    #userinterface #userexperience #designsystem #figma
                  </p>
                  <a
                    href="https://www.behance.net/gallery/98124739/Shopfood"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Access project on Behance
                  </a>
                </div>
                </div>
              </div>

            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
