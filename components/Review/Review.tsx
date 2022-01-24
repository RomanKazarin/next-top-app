import { IReviewProps } from './Review.props'
import styles from './Review.module.css'
import UserIcon from './user.svg'
import { Rating } from '..'
import cn from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const Review = ({ reviews, className, ...props }: IReviewProps) => {
  const { name, title, createdAt, rating, description } = reviews

  return (
    <div className={cn(styles.review, className)} {...props}>

      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>
        {description}
      </div>

    </div>
  )
}

