import SubTitle from "./SubTitle";

type Props = {
  title?: string;
  subTitle?: string;
  id: string;
  children: JSX.Element;
};
const Section = ({ title, children, id, subTitle }: Props) => (
  <section id={id} className="font-light border-b border-second p-8">
    {title && (
      <h2 className="text-white text-4xl font-extrabold mb-4 text-center lg:text-left">
        {title}
      </h2>
    )}
    {subTitle && <div className="uppercase"><SubTitle subTitle={subTitle}></SubTitle></div>}
    <div className="text-left text-white ">{children}</div>
  </section>
);

export default Section;
