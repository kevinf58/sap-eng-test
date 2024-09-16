export type Memory = {
  id?: number
  name: string
  description: string
  timestamp: string
}

export type addMemoryProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}