import React, { useState } from 'react'
import axios from '../../axios'
import { Memory } from '../../types/memory.type'

const AddMemoryForm: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [timestamp, setTimestamp] = useState<string>('')
  const [success, setSuccess] = useState<string>('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const newMemory: Memory = {
      name,
      description,
      timestamp
    }

    try {
      await axios.post('/memories', newMemory)
      setSuccess('Memory created successfully')
      setName('')
      setDescription('')
      setTimestamp('')
    } catch (error) {
      setSuccess('')
    }
  }

  return (
    <div>
      <h2>Add a New Memory</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Timestamp:</label>
          <input
            type='datetime-local'
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Add Memory</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  )
}

export default AddMemoryForm
