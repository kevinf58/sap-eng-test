import { ComponentProps } from '../../types/Component.type'

const Container = (props: ComponentProps) => {
  return (
    <div className='flex flex-col px-6 py-6 my-6 shadow-md rounded-md text-sm text-darkgray border-2 border-solid border-gray'>
      {props.children}
    </div>
  )
}

export default Container
