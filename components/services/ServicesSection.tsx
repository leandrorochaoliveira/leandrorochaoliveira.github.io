import { SiJavascript } from "react-icons/si"
import { DiAndroid, DiCode } from "react-icons/di";
import { FaDatabase } from "react-icons/fa"
import Section from "../Section";

export default function Services() {
  return (<Section title="Serviços" id="Services" subTitle="O que eu faço">
    <>
      <div className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="icon">
            <SiJavascript />
          </div>
          <h4>Frontend</h4>
          <p>
            Desenvolvimento de aplicativos, sites e sistemas web.
            Tenho experiência em ferramentas de web design e conhecimento em SEO
          </p>
        </div>
        {/*       <div>
          <div className="icon">
            <FaDatabase />
          </div>
          <h4>Backend</h4>
          <p>
            Desenvolvimento de aplicativos, sites e sistemas web.
            Tenho experiência em ferramentas de web design e conhecimento em SEO
          </p>
        </div> */}
        <div>
          <div className="icon">
            <DiAndroid />
          </div>
          <h4>Mobile</h4>
          <p>
            Desenvolvimento de aplicativos IOS e Android utilizando React Native e Ionic/Cordova
            Tenho experiência em publicação nas principais lojas de apps (App Store e Play Store)
          </p>
        </div>
      </div>
    </>
  </Section>)
}