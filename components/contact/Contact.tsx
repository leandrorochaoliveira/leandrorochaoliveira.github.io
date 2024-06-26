import { FaWhatsapp } from "react-icons/fa";
import Section from "../Section";
import SubTitle from "../SubTitle";


export default function Contact() {
  return (
    <Section title="Contato" id="Contact" subTitle="Vamos tomar um café?">
      <div className="grid gap-8 lg:grid-cols-1 relative">
        { /*<EmailForm /> */}
        <div className="rounded-3xl py-8 md:py-8 px-8 border  border-[#585d65] bg-back ">
          <div className="grid gap-x-16 gap-y-1 lg:grid-cols-4">
            <SubTitle subTitle={"Whatsapp"}></SubTitle>
            <span className="col-span-3 mb-3 md:mb-0">
              <a className="flex items-center gap-1" href="https://wa.me/5537999110817" target={"_blank"} rel="noopener noreferrer">Envie uma mensagem<FaWhatsapp /></a>
            </span>

            {/*   <SubTitle subTitle={"Endereço"}></SubTitle>
            <span className="col-span-3">
              Formiga - Minas Gerais - Brasil
            </span>
 */}
            <SubTitle subTitle={"Email"}></SubTitle>
            <span className="col-span-3  mb-3 md:mb-0">
              <a href="mailto:leandrorochaoliveira@icloud.com">
                leandrorochaoliveira@icloud.com
              </a>
            </span>

            <SubTitle subTitle={"Telefone"}></SubTitle>
            <span className="col-span-3 mb-3 md:mb-0">
              <a href="tel:+5537999110817">(37) 9 9911-0817</a>
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}