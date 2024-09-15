import { useState } from 'react'
import { ModalProps } from '../../types/Modal.type'
import Button from './Button'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from '../../axios'
import { Memory } from '../../types/memories.type'

const Modal = (props: ModalProps) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [desc, setDesc] = useState('')

  const handleSubmit = async () => {
    if (!name || !date || !desc) {
      toast.error('Please fill out all fields')
      return
    }

    const addMemory = async () => {
      try {
        await axios.post<Memory>('/memories', {
          name,
          description: desc,
          timestamp: date.toISOString(),
        })

        toast.success('New memory added successfully!')
      } catch (error) {
        toast.error('An error occurred while adding the memory.')
        console.error('API Error', error)
      }
    }

    await addMemory()
    props.setModalOpen(false)
  }

  return (
    <div className='fixed h-full w-full flex items-center justify-center'>
      <div
        className='flex justify-center items-center fixed h-full w-full bg-black/50'
        onClick={() => props.setModalOpen(false)}
      />
      <div className='flex fixed flex-col bg-white p-4 rounded-md space-y-2'>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-solid border-gray rounded-md hover:shadow-sm px-2 py-0.5'
          placeholder='Name'
        />
        <input
          type='date'
          name='date'
          value={date?.toISOString().split('T')[0] || ''}
          onChange={(e) => setDate(new Date(e.target.value))}
          className='border-2 border-solid border-gray rounded-md hover:shadow-sm px-2 py-0.5'
        />
        <textarea
          name='description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className='border-2 border-solid border-gray rounded-md hover:shadow-sm px-2 py-0.5 h-20'
          placeholder='Description'
        />
        <div className='ml-auto'>
          <Button color='blue' onClick={handleSubmit}>
            <div className='px-2 text-sm'>Submit</div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
