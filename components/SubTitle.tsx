type Props = {
  subTitle: string;
};
const SubTitle = ({ subTitle }: Props) => (
  <h3 className="text-primary ">{subTitle}</h3>
);

export default SubTitle;
