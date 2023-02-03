import Section from "../Section";
import ExperienciaItem from "./ExperienciaItem";

export default function Experiencia() {
  return (
    <Section title="Experiencia" id="Experience" subTitle="Trabalhos">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
        <ExperienciaItem
          title="TrackerUp"
          period="2019 - 2023"
          description="Tech Lead na TrackerUp, fui responsável por um time de desenvolvedores e QA no desenvolvimento de aplicativo e sistema de monitoramento de equipes externas."
          link="https://trackerup.com.br"
        />
        <ExperienciaItem
          title="PullUp Tecnologia"
          period="2017 - 2019"
          description="Principal desenvolvedor Front-End, responsável pelo desenvolvimento de sites, aplicativos e e-commerce para todos os tipos de negócios."
          link="https://pullup.tech"
        />
        <ExperienciaItem
          title="Celula Web"
          period="2012 - 2017"
          description="Desenvolvimento de sites, incluindo manutenção, monitoramento e atualizações de layout e funcionalidades, para empresas, instituições publicas, eventos e profissionais liberais."
          link="https://celulaweb.com.br"
        />
        <ExperienciaItem
          title="Plug Informática"
          period="2007 - 2011"
          description="Montagem e assistência técnica em computadores, redes, vendas, atendimento ao cliente"
        />
      </div>
    </Section>
  )
}