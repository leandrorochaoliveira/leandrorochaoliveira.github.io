import { type } from "os";
import SubTitle from "../SubTitle";

type portfolioProps = {
  image?: string
  subTitle?: string
  url?: string
}

export default function PortfolioItem({ }: portfolioProps) {
  let subTitle = 'Portfolio item';
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/680" alt="" />
      </div>
      <div className="text-center mt-3">
        {subTitle && <SubTitle subTitle={subTitle}></SubTitle>}
      </div>

    </div>
  )
}