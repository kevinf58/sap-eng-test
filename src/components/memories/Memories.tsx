import { useState, useEffect } from 'react'
import { Memory } from '../../types/memory.type'
import axios from '../../axios'
import Container from '../common/Container'
import formatDate from '../../helpers/formatDate'
import Button from '../common/Button'
import { toast } from 'react-toastify'

const Memories = () => {
  const [memories, setMemories] = useState<Memory[]>([])

  useEffect(() => {
    const getMemories = async () => {
      try {
        const res = await axios.get<{ memories: Memory[] }>('/memories')

        setMemories(res.data.memories)
      } catch (error) {
        console.error('Error getting memories: ', error)
      }
    }

    getMemories()
  }, [])

  const deleteMemory = async (id: number) => {
    try {
      await axios.delete(`/memories/${id}`)
      setMemories((prevMemories) =>
        prevMemories.filter((memory) => memory.id !== id)
      )
    } catch (error) {
      console.error('Error deleting memory: ', error)
    }
  }

  return (
    <section className='flex justify-center items-center'>
      <ul>
        {memories.map((memory) => (
          <li key={memory.id}>
            <Container
              popoverChildren={
                <div className='bg-white mt-1'>
                  <Button
                    onClick={() => {
                      deleteMemory(memory.id as number)
                      toast.success('Memory deleted successfully')
                    }}
                  >
                    <div className='font-sans mx-2 text-xs'>Delete</div>
                  </Button>
                </div>
              }
            >
              <>
                <div className='flex items-center'>
                  <img src='/assets/images/cat.png' className='h-[8vw] m-2' />
                  <div>
                    <h3 className='text-black font-medium text-xl mb-2'>
                      {memory.name}
                    </h3>
                    <p className='mb-2 text-xs italic'>
                      {formatDate(memory.timestamp)}
                    </p>
                    <p className='break-words sm:w-[55vw] w-[40vw]'>
                      {memory.description}
                    </p>
                  </div>
                </div>
              </>
            </Container>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Memories
