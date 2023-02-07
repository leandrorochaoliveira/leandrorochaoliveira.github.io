import SubTitle from "../SubTitle";
import Image from "next/image"
import { BiLinkExternal } from "react-icons/bi"

type portfolioProps = {
  image: string
  subTitle: string
  url?: string
}

export default function PortfolioItem({ image, subTitle, url }: portfolioProps) {
  return (
    <div>
      <div className="group relative">
        <Image src={image} alt={subTitle} width={680} height={680} />
        <a href={url} target={"_blank"} rel="noopener noreferrer" className="absolute top-0 left-0 right-0 bottom-0 bg-primary bg-opacity-60 text-white flex items-center justify-center scale-0 transition-transform group-hover:scale-100 ">
          <BiLinkExternal className="text-white text-7xl" />
        </a>

      </div>
      {subTitle &&
        <div className="text-center mt-3">
          {url ?
            <a href={url} target={"_blank"} rel="noopener noreferrer">
              <SubTitle subTitle={subTitle}></SubTitle>
            </a>
            :
            <SubTitle subTitle={subTitle}></SubTitle>}
        </div>
      }


    </div>
  )
}