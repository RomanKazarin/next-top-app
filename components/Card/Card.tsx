import { ICardProps } from './Card.props'
import styles from './Card.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export const Card = forwardRef(({ children, color = 'white', className, ...props }: ICardProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={cn(styles.card, className, {
      [styles.blue]: color === 'blue'
    })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}) 
