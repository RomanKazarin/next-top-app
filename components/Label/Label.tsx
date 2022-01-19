import { ILabelProps } from './Label.props'
import styles from './Label.module.css'
import cn from 'classnames'

export const Label = ({ size = 'S', children, color = 'ghost', href, className, ...props }: ILabelProps) => {
  return (
    <div
      className={cn(styles.Label, className, {
        [styles.S]: size === 'S',
        [styles.M]: size === 'M',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {
        href
          ? <a href={href}>{children}</a>
          : <>{children}</>
      }
    </div>
  )
}

