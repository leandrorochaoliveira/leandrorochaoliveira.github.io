type Props = {
  title: string;
  linkref: string;
}
export default function MenuItem({ title, linkref }: Props) {
  return (
    <li><a href={linkref} className="font-semibold uppercase">{title}</a></li>
  )
}