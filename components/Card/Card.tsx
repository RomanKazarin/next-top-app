import { ICardProps } from './Card.props'
import styles from './Card.module.css'
import cn from 'classnames'

export const Card = ({ children, color = 'white', className, ...props }: ICardProps) => {
  return (
    <div className={cn(styles.card, className, {
      [styles.blue]: color === 'blue'
    })}
      {...props}
    >
      {children}
    </div>
  )
}

