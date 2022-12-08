type Props = {
  subTitle: string;
};
const SubTitle = ({ subTitle }: Props) => (
  <h3 className="text-primary font-semibold mb-6 uppercase text-base ">
    {subTitle}
  </h3>
);

export default SubTitle;
