import Section from "../Section";
import SubTitle from "../SubTitle";

export default function About() {
  return (
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
  )
}