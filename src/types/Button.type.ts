import { MouseEvent } from 'react'

export type ButtonProps = {
  children: JSX.Element
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void
  color?: 'blue' | 'black'
}
