import { ButtonProps } from '../../types/Button.type'

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`flex items-center border border-solid ${
        props.color ? 'border-[#3967F2]' : 'border-black'
      } rounded-md py-1 px-3 hover:shadow-md transition-shadow duration-300 w-min whitespace-nowrap`}
    >
      {props.children}
    </button>
  )
}

export default Button
