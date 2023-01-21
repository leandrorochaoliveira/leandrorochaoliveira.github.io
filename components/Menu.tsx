import MenuItem from './MenuItem'
export default function Menu() {
  return(
    <ul className="flex flex-row items-center justify-around gap-4 lg:mx-16">
      <MenuItem title='Home' />
      <MenuItem title='Sobre' />
      <MenuItem title='Serviços' />
      <MenuItem title='Experiencia' />
      <MenuItem title='Portfolio' />
      <MenuItem title='Home' />
      <MenuItem title='Contato' />
    </ul>
  )
}