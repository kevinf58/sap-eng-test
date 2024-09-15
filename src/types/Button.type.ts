import { ComponentProps } from './Component.type'
import { MouseEvent } from 'react'

export type ButtonProps = {
  color?: 'blue' | 'black'
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void
} & ComponentProps
