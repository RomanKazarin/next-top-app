/* eslint-disable @next/next/no-img-element */
import { IButtonProps } from './Button.props'
import ArrowIcon from './Arrow.svg'
import styles from './Button.module.css'
import cn from 'classnames'

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: IButtonProps) => {
  return (
    <button className={cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost',
    })}
      {...props}
    >
      {children}
      {arrow !== 'none' && <span className={cn(styles.arrow, className, {
        [styles.down]: arrow === 'down',
        [styles.right]: arrow === 'right',
      })}>
        <ArrowIcon />
      </span>}
    </button>
  )
}

