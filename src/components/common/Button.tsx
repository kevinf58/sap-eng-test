import { ButtonProps } from '../../types/Button.type'

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`border border-solid ${
        props.color ? 'border-[#3967F2]' : 'border-black'
      } rounded-md p-[5px] hover:shadow-md transition-shadow duration-300 w-min`}
    >
      {props.children}
    </button>
  )
}

export default Button
