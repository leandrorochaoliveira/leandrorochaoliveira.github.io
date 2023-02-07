import SubTitle from "../SubTitle";
import Image from "next/image"

type portfolioProps = {
  image: string
  subTitle: string
  url?1: string
}

export default function PortfolioItem({ image, subTitle, url }: portfolioProps) {
  return (
    <div>
      <div>
        <Image src={image} alt={subTitle} width={680} height={680} />
      </div>
      <div className="text-center mt-3">
        {subTitle && <SubTitle subTitle={subTitle}></SubTitle>}
      </div>

    </div>
  )
}