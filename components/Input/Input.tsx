import { IInputProps } from './Input.props'
import styles from './Input.module.css'
import cn from 'classnames'

export const Input = ({ className, ...props }: IInputProps) => {
  return (
    <input className={cn(className, styles.input)} {...props} />
  )
}

