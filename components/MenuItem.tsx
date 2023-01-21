type Props = {
   title: string;
}
export default function MenuItem({title}: Props) {
  return( 
      <li><a href="" className="font-semibold uppercase">{title}</a></li>
  )
}