import React from 'react';
import Head from "next/head";
import {
  BsFillMoonStarsFill,
  BsLinkedin,
  BsGithub,
  BsBehance,
  BsMedium
} from "react-icons/bs";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-8 mb-2 flex justify-center dark:text-white">
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-blue-600 text-white py-3 px-4  border-none rounded-md ml-8"
                  href="/curriculoWilly-us_compressed.pdf" target="_blank" rel="noopener noreferrer" 
                >Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-4xl py-2 text-blue-600 font-bold dark:text-blue-400 md:text-6xl">
              Willy Fontenelle
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-2xl">
              Designer and developer
            </h3>
            <p className="text-md py-5 leading-6 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I am passionate about how design and technology come together, especially involving design systems in digital products.
            </p>
            <div className="text-4xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/willyfontenelle" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
              <a href="https://github.com/willyfontenelle" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
              <a href="https://www.behance.net/willyfontenelle" target="_blank" rel="noopener noreferrer"><BsBehance /></a>
              <a href="https://medium.com/@willyfontenelle" target="_blank" rel="noopener noreferrer"><BsMedium /></a>
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
