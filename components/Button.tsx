type Props = {
  title: string;
  click: Function;
  children?: JSX.Element;

};
export default function Button({title,click,children}:Props) {
  return (
    <button className="button" onClick={()=> {click()}}>
      <span className="relative">{title}</span>
      {children}
    </button>
  )

}