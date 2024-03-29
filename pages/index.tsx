import Head from "next/head";
import styles from "../styles/Home.module.css";

import ImageProfile from "../components/ImageProfile";
import Navbar from "../components/navbar/Navbar";
import Section from "../components/Section";

import { BiChevronsDown } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import Portfolio from "../components/portfolio/Portfolio";
import Experiencia from "../components/experiencia/Experiencia";
import { scrollToElement } from "../shared/scroll";
import Contact from "../components/contact/Contact";
import Services from "../components/services/ServicesSection";
import About from "../components/about/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leandro Rocha</title>
      </Head>

      <Navbar />

      <main className="flex flex-col ">


        <div className="bg-back ">
          <div id="Home" className="lg:h-screen text-center flex flex-col lg:flex-row items-center">
            <ImageProfile></ImageProfile>
            <div className="lg:w-1/2 mt-10">
              <div className="relative top-[-50px] z-10 flex justify-center">
                <h1 className="text-white text-5xl leading-tight font-extrabold w-[80vw] rounded-t-full bg-back pt-14">
                  Leandro
                  <br />
                  Rocha
                </h1>
              </div>
              <Section id="Index" subTitle="Programador">
                <>
                  <p>Olá, sou um desenvolvedor Full Stack apaixonado por criar soluções funcionais e atrativas tanto no frontend quanto no backend</p>
                  <div className="flex items-center flex-col">
                    <div>

                      <p >
                        <a href="https://www.linkedin.com/in/leandrorochaoliveira/" target={"_blank"} rel="noreferrer" className="text-primary text-xl">
                          <FaLinkedin className="inline-block mr-1" />leandrorochaoliveira
                        </a>
                      </p>
                      <p >
                        <a href="https://github.com/leandrorochaoliveira" target={"_blank"} rel="noreferrer" className="text-primary text-xl">
                          <FaGithubSquare className="inline-block mr-1" />leandrorochaoliveira</a>
                      </p>
                    </div>

                  </div>
                </>
              </Section>

              <div className="text-center w-full">
                <a href="" onClick={(e) => scrollToElement(`#About`, e)} className="text-white inline-block text-3xl mt-8">
                  <BiChevronsDown />
                </a>
              </div>

            </div>
          </div>

          <About />
          <Services />
          <Experiencia />
          {/* <Section title="Skills" id="Skills">
            <>
              <p>paragrafo 1</p>
              <p>paragrafo 2</p>
            </>
          </Section> */}
          <Portfolio />
          <Contact />
          <footer></footer>
        </div>
      </main>
    </div>
  );
}
