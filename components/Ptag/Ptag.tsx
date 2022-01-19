import { IPtagProps } from './Ptag.props'
import styles from './Ptag.module.css'

export const Ptag = ({ size = 'M', children, className, ...props }: IPtagProps) => {
  switch (size) {
    case 'S':
      return <p className={styles.S} {...props}>{children}</p>
    case 'M':
      return <p className={styles.M} {...props}>{children}</p>
    case 'L':
      return <p className={styles.L} {...props}>{children}</p>
    default:
      return <></>
  }
}

