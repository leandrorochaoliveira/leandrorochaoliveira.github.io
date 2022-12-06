import SubTitle from "./SubTitle";

type Props = {
  title: string;
  subTitle?: string;
  id: string;
  children: JSX.Element;
};
const Section = ({ title, children, id, subTitle }: Props) => (
  <section id={id} className="text-white font-light border-b border-second p-8">
    <h2 className="text-white text-5xl font-extrabold mb-4">{title}</h2>
    {subTitle ? <SubTitle subTitle={subTitle}></SubTitle> : ""}
    {children}
  </section>
);

export default Section;
