import { useState } from 'react'
import './App.css'
import Button from './components/common/Button'
import Description from './components/Description'
import Memories from './components/Memories'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { FaPlus } from 'react-icons/fa6'
import Modal from './components/common/Modal'
import { ToastContainer } from 'react-toastify'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className='flex text-black font-sans'>
      <SideBar />
      <div className='mx-20 sm:mx-5 md:mx-10 lg:mx-14 my-10 w-full'>
        <NavBar />
        <Description />
        <section className='flex justify-end items-center text-xs mb-10'>
          <Button onClick={() => setModalOpen(true)}>
            <div className='flex items-center px-3 whitespace-nowrap  '>
              <FaPlus size={12} className='mr-2' />
              <div>New Memory</div>
            </div>
          </Button>
        </section>
        <Memories />
      </div>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <div>asdasdasd</div>
        </Modal>
      )}
      <ToastContainer />
    </main>
  )
}

export default App
