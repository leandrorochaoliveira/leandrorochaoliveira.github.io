import Section from "../Section";
import PortfolioItem from "./PortfolioItem";

import datacamp from '../../public/portfolio/datacamp.jpg'
import andressa_salomone from '../../public/portfolio/andressa_salomone.jpg'
import unifor from '../../public/portfolio/unifor.jpg'
import trackerup from '../../public/portfolio/trackerup.jpg'
import newvalue from '../../public/portfolio/newvalue.jpg'
import jamef from '../../public/portfolio/jamef.jpg'
import bem_engenharia from '../../public/portfolio/bem_engenharia.jpg'
import casa_cruzeiro from '../../public/portfolio/casa_cruzeiro.jpg'
import eugenio_locacoes from '../../public/portfolio/eugenio_locacoes.jpg'
import exata5 from '../../public/portfolio/exata5.jpg'
import hiperagro from '../../public/portfolio/hiperagro.jpg'
import matuete_villas from '../../public/portfolio/matuete_villas.jpg'
import odsalling from '../../public/portfolio/odsalling.jpg'
import play_boutique from '../../public/portfolio/play_boutique.jpg'
import politruck from '../../public/portfolio/politruck.jpg'
import prefeitura_luminarias from '../../public/portfolio/prefeitura_luminarias.jpg'
import prefeitura_pains from '../../public/portfolio/prefeitura_pains.jpg'
import santa_marta from '../../public/portfolio/santa_marta.jpg'
import scorpions_fitness from '../../public/portfolio/scorpions_fitness.jpg'
import tv_catia_fonseca from '../../public/portfolio/tv_catia_fonseca.jpg'

import { useState } from "react";

export default function Portfolio() {

  const portfolios = [
    { image: trackerup.src, url: 'http://trackerup.com.br', subTitle: 'TrackerUp' },
    { image: play_boutique.src, url: 'https://playboutique.com.br', subTitle: 'Loja Play Boutique' },
    { image: tv_catia_fonseca.src, url: 'https://www.tvcatiafonseca.com.br', subTitle: 'TV Catia Fonseca' },
    { image: unifor.src, url: 'https://www.uniformg.edu.br', subTitle: 'Unifor MG' },
    { image: andressa_salomone.src, url: 'http://portal.andressasalomone.com.br', subTitle: 'Andressa Salomone' },
    { image: newvalue.src, url: 'http://newvalue.com.br', subTitle: 'NewValue' },
    { image: datacamp.src, url: 'https://datacamp.net.br', subTitle: 'Datacamp' },
    { image: matuete_villas.src, url: 'https://www.matuetevillas.com/', subTitle: 'Matueté Villas' },
    { image: jamef.src, url: 'https://www.jamef.com.br', subTitle: 'Jamef Transportes' },
    { image: bem_engenharia.src, url: 'https://bemengenharia.com.br', subTitle: 'BEM Engenharia' },
    { image: odsalling.src, url: 'https://www.odsalling.org', subTitle: 'Chagdud Gonpa Odsal Ling' },
    { image: casa_cruzeiro.src, url: 'https://casacruzeiroveiculos.com.br', subTitle: 'Casa Cruzeiro' },
    { image: eugenio_locacoes.src, url: 'https://eugeniolocacoes.com.br', subTitle: 'Eugenio Locações' },
    { image: exata5.src, url: 'https://www.exata5.com.br', subTitle: 'Exata5' },
    { image: hiperagro.src, url: 'https://redehiperagro.com.br', subTitle: 'Rede HiperAgro' },
    { image: politruck.src, url: 'https://politruck.com.br', subTitle: 'Politruck' },
    { image: prefeitura_luminarias.src, url: 'https://luminarias.mg.gov.br', subTitle: 'Prefeitura de Luminarias' },
    { image: prefeitura_pains.src, url: 'https://pains.mg.gov.br', subTitle: 'Prefeitura de Pains' },
    { image: santa_marta.src, url: 'https://labsantamarta.com.br', subTitle: 'Laboratório Santa Marta' },
    { image: scorpions_fitness.src, url: 'https://scorpionsfitness.com.br', subTitle: 'Scorpions Fitness' },
  ]

  const [amount, setAmount] = useState(9)

  return (
    <Section title="Portfolio" id="Portfolio" subTitle="Projetos realizados">
      <>
        <p>Alguns dos projetos que tive a chance de participar</p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-auto">
          {portfolios.slice(0, amount).map((portfolio, index) => (
            <PortfolioItem key={index} image={portfolio.image} url={portfolio.url} subTitle={portfolio.subTitle} />
          ))}
        </div>

      </>
    </Section>
  )
}


