import { ModalProps } from '../../types/Modal.type'
import 'react-toastify/dist/ReactToastify.css'

const Modal = (props: ModalProps) => {
  return (
    <div className='fixed h-full w-full flex items-center justify-center'>
      <div
        className='flex justify-center items-center fixed h-full w-full bg-black/50'
        onClick={() => props.setModalOpen(false)}
      />
      <div className='flex fixed flex-col bg-white p-4 rounded-md space-y-2'>
        {props.children}
      </div>
    </div>
  )
}

export default Modal
