import { ITextareaProps } from './Textarea.props'
import styles from './Textarea.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(({ className, error, ...props }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      <textarea className={cn(styles.textarea, {
        [styles.error]: error
      })} {...props} ref={ref} />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  )
}) 
