type Props = {
  title: string
  period: string
  description: string
  link?: string
}
export default function ExperienciaItem({ title, period, description, link }: Props) {
  return (
    <div className="md:w-1/2">
      <h4 className="text-lg mb-1">
        {link ? <a className="hover:text-primary" href={link} target="_blank" rel="noopener noreferrer">{title}</a> : title}
      </h4>
      <h6 className="text-primary mb-4 text-xs font-light">{period}</h6>
      <p>{description}</p>
    </div>
  )
}
