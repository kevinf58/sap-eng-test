import { IoShareSocial } from 'react-icons/io5'
import Button from './common/Button'

const ShareButton = () => {
  return (
    <Button color='blue' onClick={() => console.log('shared!')}>
      <IoShareSocial size={16} color='#3967F2' />
    </Button>
  )
}

export default ShareButton
