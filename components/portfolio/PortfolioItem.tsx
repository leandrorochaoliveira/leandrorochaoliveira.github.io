import SubTitle from "../SubTitle";

type portfolioProps = {
  image?: string
  subTitle?: string
  url?: string
}

export default function PortfolioItem({ image, subTitle, url }: portfolioProps) {
  return (
    <div>
      <div>
        <img src={image} alt={subTitle} />
      </div>
      <div className="text-center mt-3">
        {subTitle && <SubTitle subTitle={subTitle}></SubTitle>}
      </div>

    </div>
  )
}