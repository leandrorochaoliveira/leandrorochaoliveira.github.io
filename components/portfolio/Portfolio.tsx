import Section from "../Section";
import PortfolioItem from "./PortfolioItem";

import datacamp from '../../public/portfolio/datacamp.jpg'
import andressa_salomone from '../../public/portfolio/andressa_salomone.jpg'
import unifor from '../../public/portfolio/unifor.jpg'
import trackerup from '../../public/portfolio/trackerup.jpg'
import newvalue from '../../public/portfolio/newvalue.jpg'
import jamef from '../../public/portfolio/jamef.jpg'



export default function Portfolio() {
  return (
    <Section title="Portfolio" id="Portfolio" subTitle="Projetos realizados">
      <>
        <p>Alguns dos projetos que tive a chance de participar</p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <PortfolioItem image={datacamp.src} url="" subTitle="Datacamp" />
          <PortfolioItem image={andressa_salomone.src} url="Andressa Salomone" />
          <PortfolioItem image={unifor.src} url="" subTitle="Unifor" />
          <PortfolioItem image={trackerup.src} url="" subTitle="TrackerUp" />
          <PortfolioItem image={newvalue.src} url="" subTitle="NewValue" />
          <PortfolioItem image={jamef.src} url="" subTitle="Jamef" />
        </div>
      </>
    </Section>
  )
}


