import { useState } from 'react'
import './App.css'
import Button from './components/common/Button'
import Description from './components/Description'
import Memories from './components/memories/Memories'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { FaPlus, FaAngleDown } from 'react-icons/fa6'
import { ToastContainer } from 'react-toastify'
import AddMemory from './components/AddMemory'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className='flex text-black font-sans'>
      <SideBar />
      <div className='mx-20 sm:mx-5 md:mx-10 lg:mx-14 my-10 w-full'>
        <NavBar />
        <Description />
        <section className='flex justify-between items-center text-xs mb-10'>
          <Menu>
            <MenuButton>
              <Button onClick={() => {}}>
                <>
                  <div className='mr-2'>Sort By</div>
                  <FaAngleDown size={12} />
                </>
              </Button>
            </MenuButton>
            <MenuItems
              transition
              anchor='bottom end'
              className='p-1 text-xs text-black border border-solid border-black rounded-md px-2 mt-1'
            >
              <MenuItem>
                <div>Most Recent</div>
              </MenuItem>
            </MenuItems>
          </Menu>
          <Button onClick={() => setModalOpen(true)}>
            <>
              <FaPlus size={12} className='mr-2' />
              <div>New Memory</div>
            </>
          </Button>
        </section>
        <Memories />
      </div>
      {modalOpen && <AddMemory setModalOpen={setModalOpen} />}
      <ToastContainer />
    </main>
  )
}

export default App
