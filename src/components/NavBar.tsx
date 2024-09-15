import ShareButton from './ShareButton'

const NavBar = () => {
  return (
    <section className='sticky top-0 flex items-center h-min py-4 justify-between bg-white/50 backdrop-blur-sm'>
      <h1 className='text-3xl sm:text-2xl font-semibold'>Jae's Memory Lane</h1>
      <ShareButton />
    </section>
  )
}

export default NavBar
