import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ContainerProps } from '../../types/Container.type'
import { MdOutlineMoreHoriz } from 'react-icons/md'

const Container = (props: ContainerProps) => {
  return (
    <div className='flex flex-col px-6 pt-6 pb-4 my-6 shadow-md rounded-md text-sm text-darkgray border-2 border-solid border-gray'>
      {props.children}
      <Popover className='ml-auto'>
        <PopoverButton>
          <MdOutlineMoreHoriz size={24} />
        </PopoverButton>
        <PopoverPanel anchor='bottom' className='flex flex-col'>
          <div className='bg-white mt-1 text-sm'>
            {props.popoverChildren}
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  )
}

export default Container
