import Head from "next/head";
import styles from "../styles/Home.module.css";

import ImageProfile from "../components/ImageProfile";
import Navbar from "../components/navbar/Navbar";
import Section from "../components/Section";
import SubTitle from "../components/SubTitle";
import Button from "../components/Button";
import ExperienciaItem from "../components/experiencia/ExperienciaItem";
import PortfolioItem from "../components/portfolio/PortfolioItem";

import { DiAndroid, DiCode, DiPhotoshop } from "react-icons/di";
import { BiMailSend, BiChevronsDown } from "react-icons/bi";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leandro Rocha</title>
      </Head>

      <Navbar />

      <main className="flex flex-col ">


        <div className="bg-back ">
          <div id="pageIndex" className="lg:h-screen text-center flex flex-col lg:flex-row items-center">
            <ImageProfile></ImageProfile>
            <div className="lg:w-1/2 mt-10">
              <div className="relative top-[-50px] z-10 flex justify-center">
                <h1 className="text-white text-5xl leading-tight font-extrabold w-[80vw] rounded-t-full bg-back pt-14">
                  Leandro
                  <br />
                  Rocha
                </h1>
              </div>
              <Section id="Index" subTitle="Programmer">
                <>
                  <p>Olá, sou um desenvolvedor Full Stack apaixonado por criar soluções funcionais e atrativas tanto no frontend quanto no backend</p>

                  <p className="text-center lg:text-left">
                    <Button click={() => { }} title="Entre em Contato"></Button>
                  </p>
                </>
              </Section>

              <div className="text-center w-full">
                <a href="" className="text-white inline-block text-3xl mt-8">
                  <BiChevronsDown />
                </a>
              </div>

            </div>
          </div>

          <Section title="Sobre" id="About" subTitle="Minha história">
            <>
              <p>Com mais de uma década de experiência e desde 2012 dedicado especificamente ao desenvolvimento de software, possuo uma sólida base de conhecimento e habilidades para atuar com sucesso em projetos de programação.</p>
              <p>Com minha experiência em HTML, CSS e JavaScript, além de minha familiaridade com ferramentas e bibliotecas como Vue.js e React, sou capaz de criar interfaces interativas e elegantes, garantindo um bom desempenho e usabilidade para os usuários. No backend, possuo experiência com PHP e integrações com API Rest.</p>
              <p>Meu objetivo é sempre oferecer a melhor experiência possível para os usuários e estou sempre em busca de aprender novas tecnologias e técnicas para melhorar meus projetos.
              </p>
              <div className="grid gap-x-16 gap-y-1 grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
                <SubTitle subTitle={"Idade"}></SubTitle>
                <span className="col-span-3">32</span>

                <SubTitle subTitle={"Endereço"}></SubTitle>
                <span className="col-span-3">
                  Formiga - Minas Gerais - Brasil
                </span>

                <SubTitle subTitle={"Email"}></SubTitle>
                <span className="col-span-3">
                  <a href="mailto:leandrorochaoliveira@icloud.com">
                    leandrorochaoliveira@icloud.com
                  </a>
                </span>

                <SubTitle subTitle={"Telefone"}></SubTitle>
                <span className="col-span-3">
                  <a href="tel:+5537999110817">(37) 9 9911-0817</a>
                </span>
              </div>
            </>
          </Section>
          <Section title="Serviços" id="Services" subTitle="O que eu faço">
            <>
              <div className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="icon">
                    <DiCode />
                  </div>
                  <h4>Web Development</h4>
                  <p>
                    Desenvolvimento de aplicativos, sites e sistemas web.
                    Tenho experiência em ferramentas de web design e conhecimento em SEO
                  </p>
                </div>
                <div>
                  <div className="icon">
                    <DiAndroid />
                  </div>
                  <h4>App Development</h4>
                  <p>
                    Desenvolvimento de aplicativos IOS e Android utilizando React Native e Ionic/Cordova
                    Tenho experiência em publicação nas principais lojas de apps(App Store e Play Store)
                  </p>
                </div>
                {/*<div>
                  <div className="icon">
                    <DiPhotoshop />
                  </div>
                  <h4>Web Design</h4>
                  <p>
                    Da The web development process includes: web design, web
                    content, client-side / server-side scripting and network
                    security configuration.
                  </p>
                </div>*/}
              </div>
            </>
          </Section>
          <Section title="Experiencia" id="Experience" subTitle="WORKING WITH">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
              <ExperienciaItem
                title="TrackerUp"
                period="2019 - Presente"
                description="Desenvolvimento de aplicativo e sistema de monitoramento de equipes externas"
                link="https://trackerup.com.br"
              />
              <ExperienciaItem
                title="PullUp Tecnologia"
                period="2017 - 2019"
                description="Desenvolvimento de sites, aplicativos e e-commerce para todos os tipos de negocios"
                link="https://pullup.tech"
              />
              <ExperienciaItem
                title="Celula Web"
                period="2012 - 2017"
                description="Desenvolvimento de sites, manutenção, monitoramento, atualizações de layout e funcionalidades"
                link="https://celulaweb.com.br"
              />
              <ExperienciaItem
                title="Plug Informática"
                period="2007 - 2011"
                description="Montagem e assistência técnica em computadores, redes, vendas, atendimento ao cliente"
              />
            </div>
          </Section>
          <Section title="Skills" id="Skills">
            <>
              <p>paragrafo 1</p>
              <p>paragrafo 2</p>
            </>
          </Section>
          <Section title="Portfolio" id="Portfolio" subTitle="ALGUNS TRABALHOS">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
            </div>
          </Section>
          <Section title="Contato" id="Contact" subTitle="LET'S TALK">
            <div className="grid gap-8 grid-cols-2">
              <div>
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    placeholder="Your contact name"
                    className="block w-full p-4 text-white text-sm  outline-none border border-[#585d65] rounded-3xl bg-back sm:text-md focus:ring-white focus:border-white"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    placeholder="example@domain.com"
                    className="block w-full p-4 text-white text-sm  outline-none border border-[#585d65] rounded-3xl bg-back sm:text-md focus:ring-white focus:border-white"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 ml-6 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-3 w-full text-sm outline-none text-white rounded-3xl border  border-[#585d65]  bg-back sm:text-md focus:ring-white focus:border-white"
                    placeholder="To Write"
                  ></textarea>
                </div>

                <div>
                  <Button click={() => { }} title="Send Message"><BiMailSend className="" /></Button>
                </div>
              </div>
              <div className="rounded-3xl py-16 px-8 border  border-[#585d65] ">
                <div className="grid gap-x-16 gap-y-1 grid-cols-4">
                  <SubTitle subTitle={"Idade"}></SubTitle>
                  <span className="col-span-3">32</span>

                  <SubTitle subTitle={"Endereço"}></SubTitle>
                  <span className="col-span-3">
                    Formiga - Minas Gerais - Brasil
                  </span>

                  <SubTitle subTitle={"Email"}></SubTitle>
                  <span className="col-span-3">
                    <a href="mailto:leandrorochaoliveira@icloud.com">
                      leandrorochaoliveira@icloud.com
                    </a>
                  </span>

                  <SubTitle subTitle={"Telefone"}></SubTitle>
                  <span className="col-span-3">
                    <a href="tel:+5537999110817">(37) 9 9911-0817</a>
                  </span>
                </div>
              </div>
            </div>
          </Section>
          <footer></footer>
        </div>
      </main>
    </div>
  );
}
