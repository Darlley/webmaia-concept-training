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
        <title>3DAgency - Inicio</title>
        <meta name="description" content="Agência de Automação de Marketing Digital" />
        <meta name="keywords" content="marketing, mkt, automação, sites, whatsapp" />
        <meta property="og:title" content="agency - Inicio" />
        <meta property="og:description" content="Agência de Automação de Marketing Digital" />
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
            <NavLink url="#home">Inicio</NavLink>
            <NavLink url="#sobre">Sobre</NavLink>
            <NavLink url="#recursos">Recursos</NavLink>
            <JoinButton />
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
