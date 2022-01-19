import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ILabelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'S' | 'M'
  children: ReactNode
  color: 'ghost' | 'red' | 'grey' | 'green' | 'primary'
  href?: string
}