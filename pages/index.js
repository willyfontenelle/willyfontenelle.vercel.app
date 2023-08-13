import React from 'react';
import Head from "next/head";
import {
  BsFillMoonStarsFill,
  BsLinkedin,
  BsGithub,
  BsBehance,
  BsMedium,
  BsSunFill
} from "react-icons/bs";
import {
  FiFigma,
} from "react-icons/fi";
import { useState } from "react";
import avatar from "../public/avatar.jpg"
import Image from "next/image";

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
        <meta property="og:image" content="https://willyfontenelle.github.io/image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white dark:bg-gray-900 md:px-20 lg:px-40 transition-color duration-700">
        <section className="min-h-screen">
          <nav className="py-8 mb-2 flex justify-center">
            <ul className="flex items-center">
              <li>
                <div
                  className={`cursor-pointer text-2xl ${darkMode
                    ? 'text-white hover:text-gray-200 active:text-gray-400'
                    : 'text-gray-500 hover:text-gray-700 active:text-black'
                    } transition-color duration-700 `}
                  onClick={() => setDarkMode(!darkMode)}
                  alt="Switch mode" // Adicionar a descrição alternativa do ícone
                  title="Switch mode" // Adicionar uma dica de ferramenta (tooltip)
                >
                  {darkMode ? <BsFillMoonStarsFill /> : <BsSunFill />}
                </div>
              </li>
              <li>
                <a
                  className={`bg-blue-600 text-white py-3 px-4 border-none rounded-md ml-8 ${darkMode
                    ? 'hover:bg-blue-700 active:bg-blue-800'
                    : 'hover:bg-blue-700 active:bg-blue-800'
                    } focus:outline-none`}
                  href="/resumeWilly-en_compressed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="PDF Curriculum Vitae" // Adicionar a descrição alternativa do link
                  title="PDF Curriculum Vitae" // Adicionar uma dica de ferramenta (tooltip)
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
            <p className="text-md py-5 leading-6 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl transition-color duration-700">
              I am passionate about how design and technology come together, especially involving design systems in digital products.
            </p>
            <div className="text-4xl flex justify-center gap-4 py-3">
              <a href="https://www.linkedin.com/in/willyfontenelle" target="_blank" rel="noopener noreferrer">
                <span
                  alt="LinkedIn"
                  title="LinkedIn"
                  className={`cursor-pointer ${darkMode
                    ? 'text-white hover:text-gray-200 active:text-gray-400'
                    : 'text-gray-500 hover:text-gray-700 active:text-black'
                    } transition-color duration-700`}
                >
                  <BsLinkedin />
                </span>
              </a>
              <a href="https://github.com/willyfontenelle" target="_blank" rel="noopener noreferrer">
                <span
                  alt="GitHub"
                  title="GitHub"
                  className={`cursor-pointer ${darkMode
                    ? 'text-white hover:text-gray-200 active:text-gray-400'
                    : 'text-gray-500 hover:text-gray-700 active:text-black'
                    } transition-color duration-700`}
                >
                  <BsGithub />
                </span>
              </a>
              <a href="https://www.behance.net/willyfontenelle" target="_blank" rel="noopener noreferrer">
                <span
                  alt="Behance"
                  title="Behance"
                  className={`cursor-pointer ${darkMode
                    ? 'text-white hover:text-gray-200 active:text-gray-400'
                    : 'text-gray-500 hover:text-gray-700 active:text-black'
                    } transition-color duration-700`}
                >
                  <BsBehance />
                </span>
              </a>
              <a href="https://medium.com/@willyfontenelle" target="_blank" rel="noopener noreferrer">
                <span
                  alt="Medium"
                  title="Medium"
                  className={`cursor-pointer ${darkMode
                    ? 'text-white hover:text-gray-200 active:text-gray-400'
                    : 'text-gray-500 hover:text-gray-700 active:text-black'
                    } transition-color duration-700`}
                >
                  <BsMedium />
                </span>
              </a>
              <a href="https://www.figma.com/@willyfontenelle" target="_blank" rel="noopener noreferrer">
                <span
                  alt="Figma"
                  title="Figma"
                  className={`cursor-pointer ${darkMode
                    ? 'text-white hover:text-gray-200 active:text-gray-400'
                    : 'text-gray-500 hover:text-gray-700 active:text-black'
                    } transition-color duration-700`}
                >
                  <FiFigma />
                </span>
              </a>

            </div>
          </div>
          <div>
            <ul className="flex justify-center">
              <li className='rounded-full w-56 h-56 relative overflow-hidden mb-10 md:h-80 md:w-80'>
                <Image src={avatar} objectFit="cover" alt='avatar' />
              </li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}