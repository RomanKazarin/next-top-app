import { IInputProps } from './Input.props'
import styles from './Input.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ className, error, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input className={cn(styles.input, {
        [styles.error]: error
      })} {...props} ref={ref} />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>

  )
})

