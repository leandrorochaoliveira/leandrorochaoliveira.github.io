type Props = {
  title: string;
  linkref: string;
}

import { scrollToElement } from '../../shared/scroll'

export default function MenuItem({ title, linkref }: Props) {
  return (
    <li><a onClick={(e) => scrollToElement(e, linkref)} href={linkref} className="font-semibold uppercase">{title}</a></li >
  )
}