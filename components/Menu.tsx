import MenuItem from './MenuItem'
export default function Menu() {
  return (
    <ul className="flex flex-row items-center justify-around gap-4 lg:mx-16">
      <MenuItem linkref="#pageIndex" title='Home' />
      <MenuItem linkref="#About" title='Sobre' />
      <MenuItem linkref="#Services" title='Serviços' />
      <MenuItem linkref="#Experience" title='Experiencia' />
      <MenuItem linkref="#Skills" title='Skills' />
      <MenuItem linkref="#Portfolio" title='Portfolio' />
      <MenuItem linkref="#Contact" title='Contato' />
    </ul>
  )
}