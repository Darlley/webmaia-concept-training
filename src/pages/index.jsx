"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { clsx } from "clsx";
import {
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";

import { Inter } from "next/font/google";


import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function home() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // Atualiza a URL no primeiro render
    setUrl("https://prod.spline.design/yx62WUmQZw67tT6g/scene.splinecode");
  }, []);

  // Define as frases que serão exibidas no componente
  const phrases = [
    "Desenvolvimento de sites, \nGrowth Hacking &\n Marketing",
    "Developer, \nAceleração do crescimento de sua empresa &\n Marketing",
    "Developer, \nGrowth Hacking &\n Automação de Marketing Digital",
  ];

  // Define as cores que serão usadas para destacar as palavras que mudam
  const colors = ["text-light-primary", "text-light-secondary"];

  // Define o estado inicial do texto e da cor
  const [text, setText] = useState(phrases[0]);
  const [color, setColor] = useState(colors[0]);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Define uma função que atualiza o texto e a cor de acordo com o índice da frase
  const updateText = (index) => {
    setText(phrases[index]);
    setColor(colors[index]);
    setPhraseIndex(index);

    return () => clearInterval(interval);
  };

  // Define um efeito que cria um intervalo que alterna entre as frases a cada 3 segundos
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phrases.length; // Incrementa o índice e volta ao início se chegar ao final
      updateText(index); // Atualiza o texto e a cor com o novo índice
    }, 3500);
    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  return (
    <>
      <Head>
        <title>Webmaia - Inicio</title>
        <meta name="description" content="Agência de Automação de Marketing Digital" />
        <meta name="keywords" content="marketing, mkt, automação, sites, whatsapp" />
        <meta property="og:title" content="Webmaia - Inicio" />
        <meta property="og:description" content="Agência de Automação de Marketing Digital" />
        <meta property="og:image" content="/logo-webmaia.svg" />
        <meta property="og:url" content="https://webmaia.com" />
      </Head>

      <div className={`bg-light-secondary dark:text-light-secondary text-dark-primary/90 dark:bg-dark-primary  ${inter.className}`}>
        <header
        id="home"
        className="relative snap-center flex flex-col h-[100svh] py-4 w-full overflow-hidden"
      >
        <svg
          className="absolute inset-x-0 top-0 z-0 h-screen w-full stroke-[#ffffff75] dark:stroke-[#2e2e2e] [mask-image:radial-gradient(80rem_30rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg
            x="50%"
            y={-1}
            className="overflow-visible dark:fill-[#ffffff26] fill-[#74747429]"
          >
            <path
              id="square-1"
              d="M-200 0h201v201h-201Z"
              strokeWidth={0}
              stroke="#EFEFEF"
              strokeLinecap="round"
            />
            <path
              id="square-2"
              d="M-400 600h201v201h-201Z"
              strokeWidth={0}
              stroke="#EFEFEF"
              strokeLinecap="round"
            />
            <path
              id="square-3"
              d="M200 800h201v201h-201Z"
              strokeWidth={0}
              stroke="#EFEFEF"
              strokeLinecap="round"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>

        {/** HEADLINE */}
        <nav className="fixed left-[calc(50%-(335px/2))] top-8 flex w-fit z-10 items-center gap-6 rounded-lg border-[1px] backdrop-blur-md dark:bg-opacity-50 dark:bg-dark-primary dark:border-light-secondary/50 border-dark-primary/20 bg-light-secondary/50 p-2 text-sm text-opacity-80 shadow-2xl vertical-animation">
          <Logo />
          <NavLink url="#home">Inicio</NavLink>
          <NavLink url="#sobre">Sobre</NavLink>
          <NavLink url="#recursos">Recursos</NavLink>
        </nav>

        {/** CONTAINER */}
        <div className="max-w-7xl mx-auto h-full w-full">
          {/** HEADLINE */}
          <div className="pointer-events-none relative z-[1] w-full h-full px-8 py-24 md:px-12  flex items-end justify-center md:items-center md:justify-start ">
            <div className="max-w-[700px] ">
              <div className="pointer-events-none w-full horizontal-animation">
                <h1 className="text-4xl h-52 md:h-80 lg:h-80 font-semibold pointer-events-auto md:text-6xl">
                  <span
                    className={clsx(phraseIndex === 0 && "text-light-primary")}
                  >
                    {text.split("\n")[0]}
                  </span>
                  <br />
                  <span
                    className={clsx(phraseIndex === 1 && "text-light-primary")}
                  >
                    {text.split("\n")[1]}
                  </span>
                  <br />
                  <span
                    className={clsx(phraseIndex === 2 && "text-light-primary")}
                  >
                    {text.split("\n")[2]}
                  </span>
                </h1>

                <p className="max-w-xl text-sm pointer-events-auto md:text-base">
                  Somos a formula do sucesso para sua estratégia digital, desde
                  a criação de landing pages de vendas à implementação de fluxo
                  de automações de vendas no WhatsApp.
                </p>

                <div className="md:mt-6 mt-4 flex gap-4 items-center w-full justify-between md:justify-start">
                  <a
                    href="#contato"
                    className="flex items-center justify-center cursor-pointer pointer-events-auto font-semibold overflow-hidden relative active:scale-95 hover:scale-105 transition-all duration-300 z-100 border border-light-primary group px-8 h-10"
                  >
                    <span className="relative z-[1] dark:text-light-secondary/90 text-light-primary group-hover:text-light-secondary duration-500">
                      Falar com o especialista
                    </span>
                    <span className="absolute w-full h-full bg-light-primary -left-full top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-light-primary -right-full top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                  </a>
                  <div className="isolate flex h-min -space-x-1">
                    <Image
                      src="/employees/darlley.jpg"
                      width={40}
                      height={40}
                      className="relative z-30 inline-block rounded-full ring-2 ring-light-secondary dark:ring-dark-primary"
                      alt="Colaborador Darlley"
                    />
                    <Image
                      src="/employees/darlley.jpg"
                      width={40}
                      height={40}
                      alt="Colaborador Darlley"
                      className="relative z-20 inline-block rounded-full ring-2 ring-light-secondary dark:ring-dark-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** CUBO */}
          {url && (
            <div className="absolute overflow-visible right-0 top-[25%] md:top-[45%] p-0 z-0 w-full md:w-6/12 h-full flex -translate-y-[50%]">
              <Spline scene={url} />
            </div>
          )}
        </div>

        {/** SLIDE */}
        <div className="flex items-center overflow-hidden vertical-animation-reverse translate-y-[100px]">
          <TranslateWrapper reverse>
            <LogoItems />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItems />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItems />
          </TranslateWrapper>
        </div>
      </header>
      </div>
    </>
  );
}

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center dark:text-white/20 text-dark-primary/20 hover:text-dark-primary/50 dark:hover:text-white transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};
const LogoItems = () => (
  <>
    <LogoItem Icon={SiBmw} />
    <LogoItem Icon={SiBurton} />
    <LogoItem Icon={SiBuildkite} />
    <LogoItem Icon={SiCouchbase} />
    <LogoItem Icon={SiDailymotion} />
    <LogoItem Icon={SiDeliveroo} />
    <LogoItem Icon={SiEpicgames} />
    <LogoItem Icon={SiGenius} />
    <LogoItem Icon={SiGodaddy} />
    <LogoItem Icon={SiHeroku} />
  </>
);

const Logo = () => {
  return (
    // <svg
    //   width="24"
    //   height="24"
    //   className="ml-2 fill-white"
    //   viewBox="0 0 38 34"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     id="Vector"
    //     d="M0 22.279V0.546478L3.19377 2.49997V20.3255L16.9516 28.6279V10.8023L18.917 12.0232L20.8824 10.8023V28.6279L34.1488 20.3255V2.49997L37.3426 0.0581055L37.5882 22.279L19.1626 33.5116L0 22.279Z"
    //     fill="currentColor"
    //   />
    // </svg>

    <svg
      viewBox="0 0 287 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4"
    >
      <g id="logo-webmaia">
        <g id="WEBMAIA">
          <path
            d="M12.18 42L0.720001 0.839966H6.84L14.16 28.62C14.28 29.06 14.42 29.7 14.58 30.54C14.78 31.34 14.98 32.18 15.18 33.06C15.38 33.94 15.54 34.72 15.66 35.4H16.08C16.2 34.88 16.3 34.3 16.38 33.66C16.5 33.02 16.62 32.38 16.74 31.74C16.9 31.1 17.04 30.5 17.16 29.94C17.28 29.38 17.36 28.94 17.4 28.62L24.24 0.839966H31.62L38.46 28.62C38.58 29.06 38.72 29.7 38.88 30.54C39.08 31.34 39.26 32.18 39.42 33.06C39.62 33.94 39.78 34.72 39.9 35.4H40.32C40.44 34.88 40.56 34.32 40.68 33.72C40.8 33.08 40.94 32.44 41.1 31.8C41.26 31.16 41.4 30.56 41.52 30C41.68 29.44 41.8 28.98 41.88 28.62L49.26 0.839966H54.66L43.2 42H36.36L29.22 14.04C29.1 13.44 28.96 12.74 28.8 11.94C28.64 11.1 28.48 10.24 28.32 9.35997C28.16 8.47997 28.02 7.71997 27.9 7.07997H27.54C27.46 7.75997 27.34 8.53997 27.18 9.41997C27.02 10.3 26.84 11.16 26.64 12C26.48 12.84 26.34 13.52 26.22 14.04L19.26 42H12.18Z"
            fill="currentColor"
          />
          <path
            d="M60.5897 42V0.839966H92.2697V5.75997H66.2897V18.48H89.6297V23.4H66.2897V37.08H92.6297V42H60.5897Z"
            fill="currentColor"
          />
          <path
            d="M101.195 42V0.839966H122.435C124.795 0.839966 126.835 1.25997 128.555 2.09997C130.275 2.89997 131.595 4.03997 132.515 5.51997C133.475 6.99997 133.955 8.75997 133.955 10.8C133.955 12.36 133.675 13.8 133.115 15.12C132.555 16.44 131.775 17.54 130.775 18.42C129.775 19.3 128.635 19.96 127.355 20.4V20.64C128.795 20.96 130.095 21.54 131.255 22.38C132.415 23.22 133.335 24.34 134.015 25.74C134.735 27.1 135.095 28.78 135.095 30.78C135.095 33.46 134.535 35.62 133.415 37.26C132.295 38.9 130.795 40.1 128.915 40.86C127.035 41.62 124.875 42 122.435 42H101.195ZM106.895 37.08H122.375C124.415 37.08 126.075 36.56 127.355 35.52C128.635 34.44 129.275 32.66 129.275 30.18C129.275 28.66 128.995 27.4 128.435 26.4C127.875 25.36 127.055 24.6 125.975 24.12C124.895 23.6 123.535 23.34 121.895 23.34H106.895V37.08ZM106.895 18.48H121.355C122.715 18.48 123.895 18.22 124.895 17.7C125.895 17.14 126.675 16.38 127.235 15.42C127.835 14.42 128.135 13.3 128.135 12.06C128.135 9.89997 127.555 8.31997 126.395 7.31997C125.235 6.27997 123.695 5.75997 121.775 5.75997H106.895V18.48Z"
            fill="currentColor"
          />
          <path
            d="M143.09 42V0.839966H151.91L161.27 27.54C161.51 28.26 161.75 29.06 161.99 29.94C162.27 30.78 162.51 31.58 162.71 32.34C162.95 33.1 163.13 33.76 163.25 34.32H163.67C163.79 33.72 163.95 33.04 164.15 32.28C164.35 31.48 164.57 30.66 164.81 29.82C165.05 28.98 165.27 28.22 165.47 27.54L174.83 0.839966H183.59V42H177.89V17.88C177.89 16.64 177.91 15.3 177.95 13.86C177.99 12.38 178.03 11.04 178.07 9.83997C178.11 8.59997 178.13 7.71997 178.13 7.19997H177.65C177.53 7.71997 177.33 8.45997 177.05 9.41997C176.77 10.34 176.47 11.32 176.15 12.36C175.87 13.36 175.61 14.26 175.37 15.06L165.71 42H160.79L151.13 15.06C150.89 14.38 150.63 13.6 150.35 12.72C150.11 11.8 149.85 10.86 149.57 9.89997C149.33 8.93997 149.09 8.03997 148.85 7.19997H148.43C148.47 8.07997 148.49 9.17997 148.49 10.5C148.53 11.78 148.55 13.08 148.55 14.4C148.59 15.68 148.61 16.84 148.61 17.88V42H143.09Z"
            fill="currentColor"
          />
          <path
            d="M189.15 42L205.41 0.839966H212.91L229.23 42H223.05L219.03 31.8H198.99L195.03 42H189.15ZM200.85 26.94H217.11L212.13 14.04C212.01 13.68 211.83 13.18 211.59 12.54C211.35 11.9 211.09 11.2 210.81 10.44C210.53 9.63997 210.25 8.83997 209.97 8.03997C209.69 7.19997 209.43 6.43997 209.19 5.75997H208.83C208.55 6.55997 208.23 7.47997 207.87 8.51997C207.51 9.55997 207.15 10.58 206.79 11.58C206.43 12.54 206.13 13.36 205.89 14.04L200.85 26.94Z"
            fill="currentColor"
          />
          <path
            d="M234.789 42V0.839966H240.489V42H234.789Z"
            fill="currentColor"
          />
          <path
            d="M246.045 42L262.305 0.839966H269.805L286.125 42H279.945L275.925 31.8H255.885L251.925 42H246.045ZM257.745 26.94H274.005L269.025 14.04C268.905 13.68 268.725 13.18 268.485 12.54C268.245 11.9 267.985 11.2 267.705 10.44C267.425 9.63997 267.145 8.83997 266.865 8.03997C266.585 7.19997 266.325 6.43997 266.085 5.75997H265.725C265.445 6.55997 265.125 7.47997 264.765 8.51997C264.405 9.55997 264.045 10.58 263.685 11.58C263.325 12.54 263.025 13.36 262.785 14.04L257.745 26.94Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
};

const NavLink = ({ children, url }) => {
  return (
    <a href={url} rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-light-primary">
          {children}
        </span>
      </motion.div>
    </a>
  );
};

const JoinButton = () => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          dark:border-light-secondary border-dark-primary/20 px-4 py-1.5 font-medium
          transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-light-primary hover:border-light-primary
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 dark:hover:text-white hover:text-light-secondary
          hover:before:translate-y-[0%]
          active:scale-100`}
    >
      Join waitlist
    </button>
  );
};
