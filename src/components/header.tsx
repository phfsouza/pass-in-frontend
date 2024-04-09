import hearderIcon from '../assets/header-icon.svg'

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={hearderIcon} alt='header-icon' />

      <nav className='flex items-center gap-5'>
        <a href='' className='font-medium text-sm text-zinc-300'>Events</a>
        <a href='' className='font-medium text-sm'>Attendees</a>
      </nav>
    </div>
  )
}