import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from '../axios'
import { addMemoryProps, Memory } from '../types/memory.type'
import Button from './common/Button'
import Modal from './common/Modal'

const AddMemory = (props: addMemoryProps) => {
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
    <Modal
      setModalOpen={props.setModalOpen}
      children={
        <>
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
        </>
      }
    />
  )
}

export default AddMemory
